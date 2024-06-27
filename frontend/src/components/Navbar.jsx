import React, { useState } from 'react';

import { HiUserCircle } from "react-icons/hi";

function Navbar(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleUserClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSignOut = () => {
    // Implement your sign out logic here
    console.log('Sign out clicked!');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          FULL$TOCK
        </div>
        <div className="relative mr-2">
          <button onClick={handleUserClick} className="flex items-center gap-2" >
            <HiUserCircle className="size-8" />
            <span className="text-sm font-medium">{props.username}</span>
          </button>
          {showDropdown && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
              <ul className="py-2">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <button onClick={handleSignOut}>Cerrar sesión</button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
