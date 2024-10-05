import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "./Firebase"
import {setDoc, doc} from "firebase/firestore"


function SignupPage() {
  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e)=>{
     setUser((prev)=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async(e)=>{
    try {
      e.preventDefault();
      await createUserWithEmailAndPassword(auth, user.email, user.password);
      const registeredUser = auth.currentUser;
      console.log(registeredUser);
      await setDoc(doc(db,"Users",registeredUser.uid),{
        username:user.username,
        name:user.name,
        email:registeredUser.email
      })
      
    } catch (error) {
      console.log(error.message);
      
    }
  }

  return (
    <div>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
        <button type="text">Submit</button>
      </form>
    </div>
  );
}

export default SignupPage;
