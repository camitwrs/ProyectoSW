import React from 'react';

function Summary() {
  return (
    <div className="w-full p-4">
      <div className="bg-gray-100 p-4 rounded-md">
        <p className="flex justify-between">
          <span>Subtotal:</span>
          <span>$80.00</span>
        </p>
        <p className="flex justify-between">
          <span>Descuentos:</span>
          <span>$0.00</span>
        </p>
        <p className="flex justify-between">
          <span>Total:</span>
          <span>$80.00</span>
        </p>
      </div>
    </div>
  );
}

export default Summary;
