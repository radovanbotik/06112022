import React from "react";
import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  console.log({ name, email });
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h5>login section</h5>
        <label htmlFor="user-name"></label>
        <input
          type="text"
          id="user-name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="user-email"></label>
        <input
          type="text"
          id="user-email"
          onChange={e => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
