import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import FormRow from "./FormRow";
import Alert from "./Alert";
import { useOutsideClick } from "../hooks/useOutsideClick";

const FormPost = () => {
  const {
    showAlert,
    generateAlert,
    createPost,
    isEditing,
    editPost,
    setIsEditing,
    handleChange,
    clearValues,
    title,
    text,
    published
  } = useAppContext()
  const formRef = useRef(null)
  const navigate = useNavigate()
  useOutsideClick(formRef, setIsEditing)

  const handleSubmit = e => {
    e.preventDefault()
    if (!title || !text) {
      generateAlert({ alertType: "danger", alertText: "Please provide all values!" });
      return
    }

    const post = {title, text, published}

    if (!isEditing) {
      createPost(post)
      navigate("/")
    }
    else {
      editPost(post)
    }
    clearValues()
  }

  return (
    <form className={"form"} onSubmit={handleSubmit} ref={formRef}>
      <FormRow
        type="text"
        name="title"
        value={title}
        handleChange={handleChange}
      />
      <div className="input-container">
        <label htmlFor="text">
          Post
        </label>
        <textarea
          name="text"
          id="text"
          value={text}
          onChange={handleChange}>
        </textarea>
      </div>
      <label htmlFor="published" className="checkbox">
        <input
          type="checkbox"
          name="published"
          id="published"
          checked={published}
          onChange={handleChange}
        />
        Publish Now
      </label>
      {showAlert && <Alert />}
      <button
        type="submit"
        className="btn"
      >Submit
      </button>
    </form>
  )
}
export default FormPost