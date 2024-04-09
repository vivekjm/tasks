import React, { FC, useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { useRoute, useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context"
import ChildComponent from "./ChildComponent"

interface ItemDetailsProps {}

const ItemDetails: FC<ItemDetailsProps> = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { postId } = route.params as { postId: number }
  const [postDetails, setPostDetails] = useState<any>(null)

  const handlePostDetailsFetched = (details: any) => {
    setPostDetails(details)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backText}>Go Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Post Details</Text>
      </View>
      {/* Display post details */}
      {postDetails ? (
        <View>
          <Text>{`ID: ${postDetails.id}`}</Text>
          <Text>{`Title: ${postDetails.title}`}</Text>
          <Text>{`Body: ${postDetails.body}`}</Text>
        </View>
      ) : (
        <ChildComponent postId={postId} onPostDetailsFetched={handlePostDetailsFetched} />
      )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  backText: {
    fontSize: 18,
    color: "blue",
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
  },
})

export default ItemDetails
