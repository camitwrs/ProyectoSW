import React from 'react';
import { CiBarcode } from 'react-icons/ci';
import { FaMicrophone } from 'react-icons/fa';
import { IoTrashOutline } from 'react-icons/io5';

function TicketView({ ticketItems }) {
    const subtotal = ticketItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = subtotal * 0.1; // 10% discount
    const total = subtotal - discount;

    return (
        <div className="flex flex-col h-full p-4">
            <div className="flex flex-col space-y-2 p-4 border-2 border-black rounded-lg">
                <div className="flex items-center space-x-2">
                    <h1>Escanear producto:</h1>
                    <button>
                        <CiBarcode className="text-3xl" />
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <h1>Ingresar código de producto:</h1>
                    <input type="text" className="w-32 p-2 rounded-md border border-gray-300" />
                    <button>
                        <FaMicrophone className="text-2xl" />
                    </button>
                </div>
            </div>

            <div className="pt-5 flex-1 p-4 border-2 border-black rounded-lg mt-4 overflow-y-auto">
                <div className="flex px-14 py-2">
                    <h1 className="flex-1 text-left">Nombre</h1>
                    <h1 className="flex-1 text-center">Cantidad</h1>
                    <h1 className="flex-1 text-right">Total</h1>
                </div>
                <div className="flex flex-col px-4">
                    {ticketItems.map((item, index) => (
                        <div key={index} className="bg-gray-300 flex justify-between rounded m-1 p-1">
                            <span className="flex-1 text-left text-black">{item.name}</span>
                            <span className="flex-1 text-center text-black">{item.quantity}</span>
                            <div className="flex-1 flex justify-end items-center space-x-2 text-black">
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                                <button className="text-red-600 size-7">
                                    <IoTrashOutline />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center p-4 border-2 border-black rounded-lg mt-4">
                <div className="flex flex-col items-center mb-4">
                    <div className="flex justify-between mb-1 w-full">
                        <div className="flex items-center">
                            <h1 className="font-bold">Subtotal:</h1>
                        </div>
                        <div className="flex items-center">
                            <span className="ml-auto">${subtotal.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="flex justify-between mb-1 w-full">
                        <div className="flex items-center">
                            <h1 className="font-bold">Descuentos:</h1>
                        </div>
                        <div className="flex items-center">
                            <span className="ml-auto">-${discount.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="flex justify-between mb-1 w-full">
                        <div className="flex items-center">
                            <h1 className="font-bold">Total:</h1>
                        </div>
                        <div className="flex items-center">
                            <span className="ml-auto">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-4">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                        CANCELAR
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4">
                        FINALIZAR
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TicketView;
