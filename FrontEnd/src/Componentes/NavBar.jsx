import {Link} from "react-router-dom";
import "../HojasDeEstilo/NavBar.css";
const NavBar = () => {
  return (
    <div className="navBar">
      <Link to="/home">Home</Link>
      <Link to="/create">Form</Link>
    </div>
  );
};

export default NavBar;