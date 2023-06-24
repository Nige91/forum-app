import {useState} from "react";
import {firebaseApp} from "../firebase/firebase.ts";
import {ChangeEvent} from "react";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const auth = getAuth(firebaseApp)

  const googleAuthProvider = new GoogleAuthProvider()

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleSignup = () => {
    // Input validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User signup successful
      const user = userCredential.user;
      // Additional actions (e.g., redirecting to a new page)
    })
    .catch((error) => {
      // Handle signup errors
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  const handleLogin = () => {
    // Input validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User login successful
      const user = userCredential.user;
      // Additional actions (e.g., redirecting to a new page)
    })
    .catch((error) => {
      // Handle login errors
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    });
  };

  const handleGoogleLogin = () => {
    //TODO correct error handling
    signInWithPopup(auth, googleAuthProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          const user = result.user
        }
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        {error && (
          <div className="bg-red-100 text-red-700 py-2 px-4 rounded mb-4">
            {error}
          </div>
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <div className="flex justify-between mb-4">
          <button
            onClick={handleLogin}
            className="w-1/2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 mr-2 rounded"
          >
            Login
          </button>
          <button
            onClick={handleSignup}
            className="w-1/2 bg-green-500 hover:bg-green-600 text-white py-2 px-4 ml-2 rounded"
          >
            Signup
          </button>
        </div>
        <div className="flex items-center justify-center">
          <span className="mr-2">or</span>
          <button
            onClick={handleGoogleLogin}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;