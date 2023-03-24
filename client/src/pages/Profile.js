import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/Main"
import img from "../assets/images/under_construction.svg"


const Profile = () => {
  return (
    <Wrapper>
      <section className="profile">
        <img src={img} alt="under construction" />
        <h3>Page under construction!</h3>
        <Link to="/" className="btn">back home</Link>
      </section>
    </Wrapper>
  )
}
export default Profile