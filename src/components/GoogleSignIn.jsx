import {auth} from "./Firebase"
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"

const GoogleSignIn = ()=>{
    const handleGoogleAuth = ()=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
          console.log(result);
        });
    }
    return(
    <>
    <button onClick={handleGoogleAuth}>
        Sign in with Google
    </button>
    </>
    )
}

export default GoogleSignIn;