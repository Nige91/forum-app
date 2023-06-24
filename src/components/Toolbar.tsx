import {auth} from "../firebase/firebase.ts";
import {useAuthState} from "react-firebase-hooks/auth";
import DropdownButton from "./DropdownButton.tsx";

function Toolbar() {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    //TODO error handling
    auth.signOut()
  }

  const options = [
    {
      label: "Sign Out",
      action: handleSignOut,
      class: 'text-red-500',
    },
    {
      label: "Settings",
      action: () => console.log("Settings clicked"),
      class: 'text-blue-500',
    },
  ];

  return (
    <div className="flex justify-between items-center p-4 bg-blue-500">
      <h1 className="text-white">Welcome, {user && user.email}</h1>
      <DropdownButton
        buttonText="Menu"
        options={options}
        buttonClass="w-16 h-16 bg-red-500 rounded-full text-white"
        dropdownClass="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5"
      />
    </div>
  );
}

export default Toolbar;
