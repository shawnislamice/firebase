import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.init";
import { getAuth } from "firebase/auth";
const LoginRecap = () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const handleGoogleLogin=()=>{
        
        signInWithPopup(auth,provider)
        .then(result=>{
            const user=result.user
            console.log(user);
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>Login With Google</button>
        </div>
    );
};

export default LoginRecap;