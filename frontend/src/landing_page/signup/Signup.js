import React from "react";

function Signup() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <h1 className="mt-5">Signup for an Account</h1>
        <p className="text-muted">Open a free demat and trading account.</p>
        <div className="mt-4">
          <img
            src="media/images/signup.png"
            alt="Signup Graphic"
            className="img-fluid"
            style={{ maxWidth: "60%" }}
          />
        </div>
        <div className="mt-5">
          <button className="btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto" }}>
            Sign Up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
