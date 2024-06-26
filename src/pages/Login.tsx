import "@aws-amplify/ui-react/styles.css";
import { Link } from "react-router-dom";
import "./css/login.css";

function Login() {
  return (
    <div className="login-wrapper">
      <main>
        <div className="button-container">
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Login;
