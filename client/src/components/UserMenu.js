import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa"
import { useAppContext } from "../context/appContext";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const UserMenu = ({ setIsNavOpen }) => {
  const [showLogout, setShowLogout] = useState(false)
  const logoutRef = useRef()
  const { user, logout } = useAppContext()
  useOutsideClick(logoutRef, setShowLogout)

  const handleClick = () => {
    setIsNavOpen(false)
    logout()
  }

  return (
    <div className='user' onClick={() => setShowLogout(!showLogout)} ref={logoutRef}>
      <button type="button" className='btn btn-profile'>
        <FaUserCircle className="profile-icon" />
        {user?.name}
        <FaCaretDown style={
          {
            transition: "var(--transition)",
            transform: showLogout ? "rotate(180deg)" : "rotate(360deg)"
          }
        } />
      </button>
      <div className={showLogout ? 'user-menu show' : "user-menu"} >
        <Link to="profile" className="btn profile-link" onClick={() => setIsNavOpen(false)}>profile</Link>
        <button type="button" className='btn btn-logout' onClick={handleClick}>
          logout
        </button>
      </div>
    </div >
  )
}
