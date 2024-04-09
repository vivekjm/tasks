import React, { useEffect, useState, useCallback, useMemo } from "react"
import { View, FlatList, ActivityIndicator, RefreshControl, StyleSheet } from "react-native"
import { useNavigation, useIsFocused } from "@react-navigation/native"
import { fetchPosts } from "../services/api"
import { SafeAreaView } from "react-native-safe-area-context"
import Card from "./Card"

const ListScreen = () => {
  const navigation = useNavigation()
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [posts, setPosts] = useState([])
  const isFocused = useIsFocused()

  const fetchData = async () => {
    try {
      const data = await fetchPosts()
      setPosts(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => {
    if (isFocused || !posts.length) {
      fetchData()
    }
  }, [isFocused])

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    fetchData()
  }, [])

  const computeDetails = useCallback((item) => {
    const startTime = performance.now()
    const result = `${item.title} processed`
    const endTime = performance.now()
    console.log(`Computation for item ${item.id} took ${endTime - startTime}ms`)
    return result
  }, [])

  const memoizedComputeDetails = useMemo(() => computeDetails, [])

  const renderItem = ({ item }) => (
    <Card
      item={item}
      onPress={() => navigation.navigate("ItemDetail", { postId: item.id })}
      computeDetails={memoizedComputeDetails}
    />
  )

  const renderSkeleton = () => (
    <View style={styles.skeletonContainer}>
      {[...Array(10)].map((_, index) => (
        <View key={index} style={styles.skeletonItem}>
          <View style={styles.skeletonText} />
          <View style={[styles.skeletonText, styles.skeletonTextShort]} />
        </View>
      ))}
    </View>
  )

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {loading ? (
        renderSkeleton()
      ) : (
        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  skeletonContainer: {
    padding: 10,
  },
  skeletonItem: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  skeletonText: {
    height: 20,
    backgroundColor: "#eee",
    marginBottom: 5,
    borderRadius: 4,
  },
  skeletonTextShort: {
    width: "50%",
  },
})

export default ListScreen
