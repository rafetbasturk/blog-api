import { FaBars, FaTimes } from "react-icons/fa"

const MenuIcons = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="menu-icons">
      {isNavOpen && <FaTimes className="menu" alt="close icon" onClick={() => {
        setIsNavOpen(!isNavOpen);
      }} />}
      {!isNavOpen && <FaBars className="menu" alt="menu icon" onClick={() => {
        setIsNavOpen(!isNavOpen);
      }} />}
    </div>
  );
}

export default MenuIcons
