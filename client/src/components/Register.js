import React, { useState } from "react";

import { Link } from "react-router-dom";
import avatar from "../assets/pic1.png";
import styles from "../styles/Username.module.css";

export default function Register() {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Register</h1>
            <span className="py-4 w-2/3 text-center text-gray-500">
              You can access all data but not modify
            </span>
          </div>
          {console.log("User", user)}
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} className={styles.profile_img} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email}
                placeholder="Enter email"
              />

              <input
                className={styles.textbox}
                onChange={handleChange}
                type="phone"
                name="phone"
                value={user.phone}
                placeholder="Enter phone"
              />

              <input
                className={styles.textbox}
                onChange={handleChange}
                type="password"
                name="password"
                value={user.password}
                placeholder="Password"
              />

              <button className={styles.btn} type="submit">
                Create account
              </button>
            </div>
            <div className="py-4 text-center">
              <span>
                Are you admin{" "}
                <Link className="text-red-500" to="/">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
