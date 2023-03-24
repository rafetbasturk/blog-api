import moment from "moment";
import { useState } from "react";
import { useAppContext } from "../context/appContext";
import Panel from "./Panel";

const SingleComment = ({ id, text, createdAt, user: { image, name, email, _id } }) => {
  const [show, setShow] = useState(false)
  const { user: loggedUser } = useAppContext()
  return (
    <div
      className="comment"
      onMouseEnter={() => setShow(!show)}
      onMouseLeave={() => setShow(!show)}
    >
      <p className="comment-text">{text}</p>
      <div className="comment-profile">
        <img src={`/images/${image}`} alt="profile" className="profile-pic" />
        <div>
          <p>{name || email}</p>
          <p>{moment(createdAt).format("ddd, D MMM YYYY, HH:mm:ss")}</p>
        </div>
      </div>
      {(show && (loggedUser.role === "admin" || loggedUser._id === _id)) && <Panel id={id} panelType="comment-panel" />}
    </div>
  );
}

export default SingleComment
