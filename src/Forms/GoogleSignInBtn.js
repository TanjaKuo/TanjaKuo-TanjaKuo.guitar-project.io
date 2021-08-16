import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const clientId =
  "969347518634-jn77077986n6difsi9vpt6r7us8lsjpf.apps.googleusercontent.com";

function GoogleSignInBtn() {
  const [loading, setLoading] = useState("Loading...");
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (response) => {
    console.log("Login Success ", response);
    setUser(response.profileObj);
    setLoading();
  };

  const handleLoginFailure = (error) => {
    console.log("Login Failure ", error);
    setLoading();
  };

  const handleLogoutSuccess = (response) => {
    console.log("Logout Success ", response);
    setUser(null);
  };

  const handleLogoutFailure = (error) => {
    console.log("Logout Failure ", error);
  };

  const handleRequest = () => {
    setLoading("Loading...");
  };

  const handleAutoLoadFinished = () => {
    setLoading();
  };

  return (
    <div>
      {user ? (
        <div>
          <div className="name">Welcome {user.name}!</div>
          <GoogleLogout
            clientId={clientId}
            onLogoutSuccess={handleLogoutSuccess}
            onFailure={handleLogoutFailure}
          />
          <pre>{JSON.stringify(user, null, 50)}</pre>
        </div>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText={loading}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
          onRequest={handleRequest}
          onAutoLoadFinished={handleAutoLoadFinished}
          isSignedIn={true}
        />
      )}
    </div>
  );
}

export default GoogleSignInBtn;
