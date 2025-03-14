import React, { useState } from 'react';
import Signstyle from './signup.module.css';
import { Link, useNavigate , useLocation } from 'react-router-dom';
import {auth} from '../../Utility/firebase';
import {signInWithEmailAndPassword , createUserWithEmailAndPassword} from 'firebase/auth';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { useContext } from 'react';
import { Type } from '../../Utility/action.type';
import { ClipLoader } from 'react-spinners';

function Auth() {
  const [email, setEmail] = useState("");
  const [passWord , setPassword] = useState("");
  const [error, setErorr] = useState("");
  const [loading, setLoading] = useState({
    signIn:false,
    signUp:false
  });

   const [{user}, dispatch] = useContext(DataContext);
   const navigate = useNavigate();
   const navStateData = useLocation()
  //  console.log(user);
  // console.log(navStateData.state);
  // console.log(navStateData.state.redirect);
  
  
   
  const authHandler = async(e) => {
        e.preventDefault(); 
        // console.log(e.target.name);
        if (e.target.name === "signIn") {
          setLoading({...loading, signIn:true})
             signInWithEmailAndPassword(auth, email, passWord).then((userinfo) =>{
             
              dispatch({
                type:Type.SET_USER,
                user:userinfo.user
              });
              setLoading({...loading, signIn:false})
              navigate( navStateData?.state?.redirect || "/")
              // console.log("login sucessuflly");
              
             }).catch((err)=>{
               setErorr(err.message)
               setLoading({...loading, signIn:false})
               
              
             });
        } else {
          setLoading({...loading, signUp:true})
          createUserWithEmailAndPassword(auth, email, passWord).then((userinfo) =>{
           
            dispatch({
              type:Type.SET_USER,
              user:userinfo.user
            });
            setLoading({...loading, signUp:false})
            navigate( navStateData?.state?.redirect || "/")
           }).catch((err)=>{
            setErorr(err.message)
            setLoading({...loading, signUp:false}) 
           });
        }
        
     };
  
  return (
    <section className={Signstyle.logo}>
      {/* Logo */}
      <Link to ="/">
        <img src="https://en.wikichip.org/w/images/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
      </Link>
      <div className={`${Signstyle.logo_container} `}>
        {/* Sign In Form */}
        <div className={`${Signstyle.login_container} } `}>
          <h1>Sign In</h1>
           {navStateData?.state?.message && (
            <small style={{
              padding:"5px",
              textAlign:"center",
              color:"red",
              fontWeight: "bold",
            }} >
              {navStateData?.state?.message}
            </small>

           )}
          <form >
            <div className={Signstyle.login_form}>
              <label htmlFor="login-email">Email</label>
              <input  value={email} onChange={(e) => setEmail(e.target.value)}   type="email" id="login-email"  />
            </div>
            <div className={Signstyle.login_form}>
              <label htmlFor="login-password">Password</label>
              <input value={passWord} onChange={(e) => setPassword(e.target.value)}  type="password" id="login-password" />
            </div>
            <button 
              type="submit"
              onClick={authHandler}
              name= "signIn"
            
            className={Signstyle.login_signin}>
              {
                loading.signIn ? (<ClipLoader size={15} color='#000'/>) : ("Sign In")
              }
              </button>
          </form>

          <p>By signing, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please review our Privacy Notice and Cookie Policy.</p>
          <button 
          type="submit"
          onClick={authHandler}
          name= "signup"
          className={Signstyle.login_register} >
            {
                loading.signUp ? (<ClipLoader size={15} color='#000'/>) : ("Create Your Amazon Account")
              }
            </button>
           {
          error && (<small style={{paddingTop:"5px" , color: "red"}}>{error}</small>

          ) }
        </div>

        {/* Sign Up Form */}
        {/* <div className={`${Signstyle.login_container} ${Signstyle.login_registration} `}>
          <h1>Sign Up</h1>
          <form >
            <div className={Signstyle.login_form}>
              <label htmlFor="signup-name">Name</label>
              <input type="text" id="signup-name" required />
            </div>
            <div className={Signstyle.login_form}>
              <label htmlFor="signup-email">Email</label>
              <input type="email" id="signup-email" required />
            </div>
            <div className={Signstyle.login_form}>
              <label htmlFor="signup-password">Password</label>
              <input type="password" id="signup-password" required />
            </div>
            <button className={Signstyle.login_signin}>Sign Up</button>
          </form>

          <p>By signing up, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please review our Privacy Notice and Cookie Policy.</p>
          <button className={Signstyle.login_register} >Have an Account? Sign In</button>
        </div> */}

       
      </div>
    </section>
  );
}

export default Auth;















// import React, { useState } from 'react';
// import Signstyle from './signup.module.css';
// import { Link } from 'react-router-dom';

// function Auth() {
//   const [action, setAction] = useState(''); // State to control form visibility

//   const registerLink = () => {
//     setAction('active'); // Show Sign Up
//   };

//   const loginLink = () => {
//     setAction(''); // Show Sign In
//   };

//   const handleSignIn = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     // Handle sign-in logic here
//   };

//   const handleSignUp = (event) => {
//     event.preventDefault(); // Prevent default form submission
//     // Handle sign-up logic here
//   };

//   return (
//     <section className={Signstyle.logo}>
//       {/* Logo */}
//       <Link>
//         <img src="https://en.wikichip.org/w/images/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
//       </Link>
//       <div className={`${Signstyle.logo_container} ${action}`}>
//         {/* Sign In Form */}
//         <div className={`${Signstyle.login_container} ${Signstyle.login_sign} ${action === 'active' ? Signstyle.active : ''}`}>
//           <h1>Sign In</h1>
//           <form onSubmit={handleSignIn}>
//             <div className={Signstyle.login_form}>
//               <label htmlFor="login-email">Email</label>
//               <input type="email" id="login-email" required />
//             </div>
//             <div className={Signstyle.login_form}>
//               <label htmlFor="login-password">Password</label>
//               <input type="password" id="login-password" required />
//             </div>
//             <button className={Signstyle.login_signin}>Sign In</button>
//           </form>

//           <p>By signing, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please review our Privacy Notice and Cookie Policy.</p>
//           <button className={Signstyle.login_register} onClick={registerLink}>Create Your Amazon Account</button>
//         </div>

//         {/* Sign Up Form */}
//         <div className={`${Signstyle.login_container} ${Signstyle.login_registration} ${action === 'active' ? Signstyle.active : ''}`}>
//           <h1>Sign Up</h1>
//           <form onSubmit={handleSignUp}>
//             <div className={Signstyle.login_form}>
//               <label htmlFor="signup-name">Name</label>
//               <input type="text" id="signup-name" required />
//             </div>
//             <div className={Signstyle.login_form}>
//               <label htmlFor="signup-email">Email</label>
//               <input type="email" id="signup-email" required />
//             </div>
//             <div className={Signstyle.login_form}>
//               <label htmlFor="signup-password">Password</label>
//               <input type="password" id="signup-password" required />
//             </div>
//             <button className={Signstyle.login_signin}>Sign Up</button>
//           </form>

//           <p>By signing up, you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please review our Privacy Notice and Cookie Policy.</p>
//           <button className={Signstyle.login_register} onClick={loginLink}>Have an Account? Sign In</button>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Auth;
