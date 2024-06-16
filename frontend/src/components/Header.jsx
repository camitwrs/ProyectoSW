import React from 'react';
import { UserIcon } from '@heroicons/react/outline';

function Header() {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-100">
      <h1 className="text-lg">NOMBRE_USUARIO</h1>
      <UserIcon className="h-8 w-8 text-gray-700" />
    </div>
  );
}

export default Header;
