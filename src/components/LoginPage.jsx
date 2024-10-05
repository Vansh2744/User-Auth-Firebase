import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
import GoogleSignIn from "./GoogleSignIn";

function LoginPage() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, user.email, user.password);
    const registeredUser = auth.currentUser;
    console.log(registeredUser);
    console.log("Logged in successfully");
  };
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
        <GoogleSignIn />
      </form>
    </div>
  );
}

export default LoginPage;
