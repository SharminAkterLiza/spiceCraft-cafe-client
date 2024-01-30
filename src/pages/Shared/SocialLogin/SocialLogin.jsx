import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            const loggedInUser =result.user;


            const saveUser = {name:loggedInUser.displayName, email:loggedInUser.email}

           fetch('https://spicecraft-cafe-server.onrender.com/users', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(saveUser)
           })

           .then(res =>res.json())
           .then(() => {
           
                navigate(from, { replace: true });
           })


        })
    }

    return (
        <div>
              <div className="divider"></div>
         <div className="w-full text-center mb-4">
         <button onClick={handleGoogleSignIn} className="w-[190px] btn btn-square btn-outline">
               <img className="h-[25px] w-[25px]" src="https://i.ibb.co/1Z5mwmL/google-icon.png" alt="" /> Google 
</button>

         </div>
        </div>
    );
};

export default SocialLogin;