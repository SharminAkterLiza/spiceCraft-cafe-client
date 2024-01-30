import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';

const Login = () => {
  const [disabled, setDisabled] = useState(true);
const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(4);
  }, [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire("Login Successfully!");
        navigate(from, { replace: true });
      })
      
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    }
    else {
      setDisabled(true);
    }
  }

  return (
    <div >
      <Helmet>
        <title>SpiceCraft | Login</title>
      </Helmet>
      {/* ..hero min-h-screen bg-base-200 */}
      <div >
        <div className="hero-content flex-col lg:flex-row-reverse">
           {/* <div className="text-center md:w-full lg:text-left ml-20  "> */}
            <h1 className="text-5xl font-bold text-blue-600 ">Login now!</h1>
           
          {/* </div>  */}
  
          {/* ..lg:w-[500px] bg-base-100*/}
          <div className= " card  max-w-sm shadow-2xl     ">
          
            <form onSubmit={handleLogin} className="card-body w-80 mb-0 ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered " required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input onBlur={handleValidateCaptcha} type="text" name="captcha" placeholder="Please write the above captcha text." className="input input-bordered" required />
              </div>
              <div className="form-control mt-2 ">
                <input disabled={disabled} className="btn btn-primary" type="submit" value="Login"/>
              
              </div>
            </form>
            <p className=''><small className='ml-6'>New here? <Link className='text-blue-600' to="/signup">Create an account</Link>  </small></p>
         <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Login;