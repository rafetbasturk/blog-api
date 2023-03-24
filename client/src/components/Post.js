import moment from "moment"
import { MdDateRange } from "react-icons/md"
import { Link } from "react-router-dom";

const Post = ({ id, url, image, title, createdAt }) => {
  const date = moment(createdAt).format('DD MMM YYYY');

  return <Link to={url} key={id} className="post-link" >
    <article className="post-card">
      <img src={`/images/${image}`} alt="post related" />
      <div className="post-info-container">
        <div className="post-info">
          <h3>{title}</h3>
          <p><MdDateRange />{date}</p>
        </div>
      </div>
    </article>
  </Link>;
}

export default Post