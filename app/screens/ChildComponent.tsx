import React, { FC, useEffect, useState, useCallback } from "react"
import { View, Text, ActivityIndicator } from "react-native"
import { fetchPostById } from "../services/api"

interface ChildComponentProps {
  postId: number
  onPostDetailsFetched: (postDetails: any) => void
}

const ChildComponent: FC<ChildComponentProps> = ({ postId, onPostDetailsFetched }) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const data = await fetchPostById(postId)
        setPost(data)
        onPostDetailsFetched(data) // Callback function to pass post details to the parent component
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchPostDetails()
  }, [postId, onPostDetailsFetched])

  useEffect(() => {
    console.log("ChildComponent re-rendered") // Log message when the component re-renders due to changes in props
  })

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <View>
      {/* Display post details */}
      <Text>{`ID: ${post.id}`}</Text>
      <Text>{`Title: ${post.title}`}</Text>
      <Text>{`Body: ${post.body}`}</Text>
    </View>
  )
}

export default ChildComponent
