import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import GoogleBtn from "./GoogleBtn";
import logoImg from '../asserts/Logo.png';
import sideImg from '../asserts/Image.png'
//import { jwtDecode } from "jwt-decode"

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  axios.defaults.withCredentials = true;
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    try {
      const response = await axios.post("https://ruiz-app-server.onrender.com/login", values);
      console.log(response.data);
      navigate('/Welcome');
    } catch (error) {
      console.log(error)
      const errMessage = error.response?.data?.message || 'Connection error.';
      setError(errMessage);
    }
  };

  return (
    <div className="reg-container container my-3">
      <div className="row">
        <div className="col-lg-6 column">
          <div className="logo">
            <img src={logoImg} alt="logo" className="img-fluid" />
          </div>
          <div className="heading">
            <h2>Log In</h2>
            <p>Log in to your account.</p>
          </div>
          <GoogleBtn 
          setError = {setError}
          />
          <div className="separater">
            <span className="top-bottom-space">
              <hr />
              <span className="mx-3">or</span>
              <hr />
            </span>
          </div>
          <div className="form-box">
          { error && <p className="text-danger text-center">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>
              <div className="form-check my-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label htmlFor="exampleCheck1" className="text-capitalize">
                  remember me
                </label>
              </div>
              <button type="submit" className="btn btn-dark w-100 rounded-pill">
                Log In
              </button>
            </form>
            <p className="text-center register-question mt-5">
              Don&apos;t have an account?{" "}
              <Link to="/" className="spn">
                Register
              </Link>
            </p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-xs-6 column1 p-0">
        <img src={sideImg} alt="side_picture..." className="img-fluid" />

        </div>
        <div className="footer-image p-0">
          <img src="/Image2.png" alt="side_picture..." className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Login;
