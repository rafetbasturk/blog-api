import { UserMenu } from './UserMenu';
import { useRef } from 'react';
import { useAppContext } from '../context/appContext';
import Wrapper from "../assets/wrappers/Navbar";
import { useOutsideClick } from "../hooks/useOutsideClick";
import NavLinks from './Navlinks';
import { Link } from 'react-router-dom';

const Navbar = ({ isNavOpen, setIsNavOpen }) => {
  const { user } = useAppContext()
  const navRef = useRef(null)
  useOutsideClick(navRef, setIsNavOpen)

  return (
    <Wrapper 
      ref={navRef} 
      style={
        isNavOpen
          ? {top: "calc(var(--size-header) + 3px)"}
          : null
        }
    >
      <NavLinks 
        isNavOpen={isNavOpen} 
        setIsNavOpen={setIsNavOpen} 
      />
      {user?.role === "admin" && <Link to="posts/compose" onClick={() => setIsNavOpen(!isNavOpen)}>Create Post</Link>}
      {user && <hr></hr>}
      {user && <UserMenu setIsNavOpen={setIsNavOpen} />}
    </Wrapper>
  )
}
export default Navbar