import React from 'react';

function Buttons() {
  return (
    <div className="flex justify-between mt-4 p-4">
      <button className="bg-black text-white p-2 rounded-md">Cancelar</button>
      <button className="bg-black text-white p-2 rounded-md">Finalizar</button>
      <button className="bg-black text-white p-2 rounded-md">Imprimir</button>
    </div>
  );
}

export default Buttons;
