import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const renderNavItems = () => {
    if (user) {
      return (
        <>
          <Link to="/account">
            <li>Account</li>
          </Link>
          <Link to="/image_upload">
            <li>Image Upload Demo</li>
          </Link>
          <li onClick={logout}>Logout</li>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Register</li>
          </Link>
        </>
      );
    }
  };
  return (
    <>
      <nav style={{padding:'10px', border:'2px solid black'}}>
        <ul style={{display:'flex', flexDirection:'row'}}>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/hooks">
            <li>Hooks Demo</li>
          </Link>

          {renderNavItems()}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
