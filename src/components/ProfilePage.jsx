import { useEffect, useState } from 'react'
import {auth,db} from "./Firebase"
import {getDoc, doc} from "firebase/firestore"
import { useNavigate } from 'react-router-dom'

function ProfilePage() {
  const navigate = useNavigate();
  const [user,setUser] = useState({})
useEffect(()=>{
    auth.onAuthStateChanged(async(user)=>{
        console.log(user);
        setUser(user);
      // const docRef = doc(db,"Users",user.uid);
      // const docSnap = await getDoc(docRef);
      
      // if(docSnap.exists()){
      //   console.log(docSnap.data());
      // }
    })
},[])

const handleSignout = ()=>{
auth.signOut();
navigate("/signup")
}
  return (
    <div>
      <img src={user.photoURL} height={100} width={100}/>
      <p>{user.displayName}</p>
      <h1>Profile Page</h1>
      <button onClick={handleSignout}>Logout</button>
    </div>
  );
}

export default ProfilePage
