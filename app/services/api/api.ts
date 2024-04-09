export async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    return await response.json()
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}

export async function fetchPostById(postId: number) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    return await response.json()
  } catch (error) {
    console.error("Error fetching post details:", error)
    throw error
  }
}
