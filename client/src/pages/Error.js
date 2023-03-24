import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/Error"
import img from "../assets/images/not-found.svg"

const Error = () => {
  return (
    <Wrapper>
      <div className="error-page">
        <img src={img} alt="not found" />
        <h3>Ohh! Page not found</h3>
        <p>Can't find the page you are looking for</p>
        <Link to="/" className="btn">back home</Link>
      </div>
    </Wrapper>
  )
}
export default Error