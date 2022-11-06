import React from "react";

export default function Dashboard(props) {
  const { name, email } = props.user;
  return (
    <div>
      <h4>
        hello {name} from {email}
      </h4>
    </div>
  );
}
