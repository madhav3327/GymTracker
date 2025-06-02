import React, { useState } from 'react';

export default function Signup() {
  const [userdata, setUserdata] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const { username, email, password, confirmpassword } = userdata;

  const handler = (e) => {
    setUserdata({
      ...userdata,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(userdata);
        }}
        className="flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-center">Signup</h2>

        <input
          onChange={handler}
          type="text"
          placeholder="Username"
          name="username"
          value={username}
          className="border p-2 rounded"
        />

        <input
          onChange={handler}
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          className="border p-2 rounded"
        />

        <input
          onChange={handler}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          className="border p-2 rounded"
        />

        <input
          onChange={handler}
          type="password"
          placeholder="Re-Password"
          name="confirmpassword"
          value={confirmpassword}
          className="border p-2 rounded"
        />

        <button className='btn btn-success'>Create Account</button>
      </form>
    </div>
  );
}