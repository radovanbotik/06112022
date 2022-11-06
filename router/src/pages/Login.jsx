import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  const { setUser } = props;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  console.log({ name, email });

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (!name || !email) return;
    setUser({ name: name, email: email });
    navigate("/dashboard");
  };
  return (
    <div>
      <form className="submit-form" onSubmit={handleSubmit}>
        <h5>login section</h5>
        <label htmlFor="user-name">your name</label>
        <input
          type="text"
          id="user-name"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <label htmlFor="user-email">your email</label>
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
