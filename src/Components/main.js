import { Link } from "react-router-dom";
import "../Components/signlog.css";

const Main = () => {
  return (
    <div className="centered-container">
      <Link to="/signup" className="btn">
        <h1>For SignUp</h1>
      </Link>
    </div>
  );
};

export default Main;
