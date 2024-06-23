import React from 'react';
import ListProduct from '../components/TicketView';
import ViewProduct from '../components/ProductView';

function CajaPage() {
  return (
    <div>
      <div className="p-4">
        <div className="flex bg-gray-200 rounded-lg p-4 h-full">
          <div className="w-2/4"> <ListProduct /> </div>
          <div className="w-2/4"> <ViewProduct /> </div>
        </div>
      </div>
    </div>
  );
};

export default CajaPage;