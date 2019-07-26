import React from "react";

const About = props => {
  return (
    <div>
      <h1 className="text-primary">
        <p className="lead">This is the simple app to manage the Contacts.</p>
        <p className="text-secondary">Version 1.0.0</p>
        {/* To get the params from the url use the below method */}
        {/* <p>{props.match.params.id}</p> */}
      </h1>
    </div>
  );
};

export default About;
