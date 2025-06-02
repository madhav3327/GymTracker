import React, { useState } from "react";

export default function Login() {
  const [userdata, setUserdata] = useState({
    username: "",
    password: "",
  });

  const { username, password } = userdata;

  const handler = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userdata);
        }}
        className="flex flex-col gap-3"
      >
        <input
          onChange={handler}
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          className="p-2 rounded bg-gray-900 text-black border border-gray-600"
        />
        <input
          onChange={handler}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="p-2 rounded bg-gray-900 text-black border border-gray-600"
        />
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
