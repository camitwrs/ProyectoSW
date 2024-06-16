import React from 'react';
import { HomeIcon, ReceiptRefundIcon } from '@heroicons/react/outline';

function Sidebar() {
  return (
    <div className="w-16 bg-gray-200 flex flex-col items-center p-2">
      <button className="mb-4">
        <HomeIcon className="h-6 w-6 text-gray-700" />
      </button>
      <button>
        <ReceiptRefundIcon className="h-6 w-6 text-gray-700" />
      </button>
    </div>
  );
}

export default Sidebar;
