import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Username.module.css";
import { Toaster } from "react-hot-toast";

export default function Username() {
  const [user, setUser] = useState({
    email: "",
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
      {console.log("user", user)}
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex justify-center items-center h-screen">
        <div className={styles.glass}>
          <div className="title flex flex-col items-center">
            <h1 className="text-5xl font-bold">Admin Login</h1>
            <span className="py-4 w-2/3 text-center text-gray-500">
              Explore More By connecting with us
            </span>
          </div>
          <form className="py-1">
            <div className="textbox flex flex-col items-center gap-6">
              <input
                className={styles.textbox}
                type="email"
                name="email"
                onChange={handleChange}
                value={user.email}
                placeholder="email address"
              />

              <input
                className={styles.textbox}
                type="password"
                name="password"
                onChange={handleChange}
                value={user.password}
                placeholder="Password"
              />

              <button className={styles.btn} type="submit">
                Let's Go
              </button>
            </div>
            <div className="py-4 text-center">
              <span>
                Not a Member{" "}
                <Link className="text-red-500" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
