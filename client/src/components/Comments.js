import { useRef } from "react";
import { MdOutlineEdit } from "react-icons/md"
import { useAppContext } from "../context/appContext";
import { Loading, SingleComment, FormComment } from "./index";
import Wrapper from "../assets/wrappers/Comments";


const Comments = () => {
  const ref = useRef(null)
  const {
    isCommentLoading,
    comments
  } = useAppContext()

  const handleClick = () => {
    ref.current.focus()
    ref.current.scrollIntoView({
      behavior: "smooth",
    })
  }

  if (isCommentLoading) return <Loading />

  return (
    <>
      {
        comments.length > 0 &&
        <Wrapper>
          <h4>Comments ({comments?.length})</h4>
          {comments?.map(comment => <SingleComment key={comment.id} {...comment} />)}
        </Wrapper>
      }

      <button
        type="button"
        className="btn add-comment"
        onClick={handleClick}
      >
        <MdOutlineEdit className="icon" />
        add comment
      </button>

      <FormComment ref={ref} />
    </>
  );
}

export default Comments