import { Link, useNavigate } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const { singIn } = useContext(AuthContext);
  
  const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        singIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
              console.log('login success');
              // const navigate state
              navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                const errorMessage = err.message;
                console.log(errorMessage);
            })
        console.log(email, password);
    }

  return (
    <div>
      <NavBar></NavBar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-6">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                                  placeholder="email"
                                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                                  type="password"
                                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
                      </form>
               <p className="p-2 text-center">Dont’t Have An Account ? <Link to="/register" className="text-red-500 font-bold">Register</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
