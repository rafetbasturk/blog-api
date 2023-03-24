import { useEffect } from "react";
import { useParams } from "react-router-dom"
import Wrapper from "../assets/wrappers/PostDetail";
import FormWrapper from "../assets/wrappers/Form";
import { Loading, Comments, Panel, FormPost } from "../components";
import { useAppContext } from "../context/appContext";

const Post = () => {
  const { id: postId } = useParams()
  const { isLoading, post, getPost, user, isEditing } = useAppContext()

  useEffect(() => {
    getPost(postId)
    // eslint-disable-next-line
  }, [])

  isLoading && <Loading />

  if (post) {
    return (
      <Wrapper>
        <section className="post">
          <h3>{post.title}</h3>
          <img src={`/images/${post.image}`} alt="post" />
          <p className="text">{post.text}</p>
          {user?.role === "admin" && <Panel id={post.id} userId={user._id} panelType="post-panel" />}
        </section>
        <Comments />
        {
          isEditing &&
          <FormWrapper>
            <FormPost />
          </FormWrapper>
        }
      </Wrapper>
    )
  }
}
export default Post