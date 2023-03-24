import { forwardRef } from "react";
import { useParams } from "react-router-dom"
import { useAppContext } from "../context/appContext";
import Alert from "./Alert";

const FormComment = forwardRef((props, ref) => {
  const { id } = useParams()
  const {
    createComment,
    getPostComments,
    showAlert,
    generateAlert,
    handleChange,
    commentText,
    clearValues,
    isCommentEditing,
    editComment
  } = useAppContext()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!commentText) {
      generateAlert({ alertType: "danger", alertText: "Comment cannot be blank!" });
      return
    }
    const comment = { text: commentText };
    let res;
    if (!isCommentEditing) {
      res = await createComment(id, comment)
    }
    else {
      res = await editComment(comment)
    }
    
    if (res.ok) {
      getPostComments(id)
    }
    clearValues()
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea 
        name="commentText" 
        id="commentText" 
        value={commentText} 
        onChange={handleChange}
        ref={ref}
      >
      </textarea>
      {showAlert && <Alert />}
      <button type="submit" className="btn">Submit</button>
    </form>
  );
})

export default FormComment