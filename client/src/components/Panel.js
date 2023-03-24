import { useNavigate } from "react-router-dom";
import { RiEditBoxFill, RiDeleteBin6Fill } from "react-icons/ri"
import Wrapper from "../assets/wrappers/Panel";
import { useAppContext } from "../context/appContext";

const AdminPanel = ({ id: commentId, panelType }) => {
  const navigate = useNavigate()
  const { deleteComment, getPostComments, deletePost, post, setIsEditing, setIsCommentEditing } = useAppContext()

  const handleCommentDelete = async () => {
    await deleteComment(commentId)
    getPostComments(post.id)
  }

  const handleCommentEdit = () => {
    setIsCommentEditing({ commentId })
  }

  const handlePostDelete = async () => {
    await deletePost(post.id);
    navigate("/")
  }

  const handlePostEdit = () => {
    setIsEditing()
  }

  return (
    <Wrapper className={panelType}>
      <button
        className="btn"
        onClick={panelType === "post-panel" ? handlePostEdit : handleCommentEdit}
      >
        <RiEditBoxFill className="icon" />
        {panelType === "post-panel" ? "edit post" : ""}
      </button>
      <button
        className="btn"
        onClick={panelType === "post-panel" ? handlePostDelete : handleCommentDelete}
      >
        <RiDeleteBin6Fill className="icon" />
        {panelType === "post-panel" ? "delete post" : ""}
      </button>
    </Wrapper>
  )
}

export default AdminPanel