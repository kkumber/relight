import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {
  return (
    <nav className="flex justify-between items-center py-8">
      {/* Left Side */}
      <div className="">
          <FontAwesomeIcon icon={faBars} />
          <Link to='/'>Home</Link>
          <a href="">Personal Library</a>
          <a href="">Browse</a>
      </div>

      {/* Right Side */}
      <div className="">
        <Link to='/register'>Register</Link>
        <Link to='/login'>Login</Link>
      </div>
    </nav>
  );
};

export default Navigation;