import { useEffect, useState } from 'react';
import { GoogleLogin } from 'react-google-login';

const GOOGLE_CLIENT_ID = 'your-google-client-id';

function Login() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // check if user is authenticated
  }, []);

  function handleLoginSuccess(response) {
    // handle successful login
  }

  function handleLoginFailure(response) {
    // handle failed login
  }

  return (
    <div>
      {isAuthenticated ? (
        // show chat app
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          onSuccess={handleLoginSuccess}
          onFailure={handleLoginFailure}
        />
      )}
    </div>
  );
}