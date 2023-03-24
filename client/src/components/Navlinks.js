import { NavLink } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import links from "../data/links"

const NavLinks = ({ isNavOpen, setIsNavOpen }) => {
  const { user } = useAppContext()

  return (
    <nav className="links" >
      {links
        .filter(item => user ? item.id !== 1 : item)
        .map(item => {
          const { id, path, text } = item
          return (
            <NavLink
              to={path}
              key={id}
              onClick={() => setIsNavOpen(!isNavOpen)}
            >
              {text}
            </NavLink>
          )
        })}
    </nav>
  )
}
export default NavLinks