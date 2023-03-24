import { useEffect } from "react"
import { useAppContext } from "../context/appContext"
import Wrapper from "../assets/wrappers/Main"
import { Pagination, Post, Loading } from "../components";

const Blog = () => {
  const {
    isLoading,
    posts,
    getPosts,
    numOfPages,
    page
  } = useAppContext()

  useEffect(() => {
    getPosts()
    // eslint-disable-next-line
  }, [page])

  if (isLoading) return <Loading />

  return (
    <Wrapper>
      <div className="posts-container">
        {posts && posts.map(post => {
          return <Post key={post.id} {...post} />
        })}
      </div>
      {numOfPages > 1 && <Pagination />}
    </Wrapper>
  )
}

export default Blog