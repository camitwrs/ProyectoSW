import React, { useState } from 'react';
import TicketView from '../components/TicketView';
import ProductView from '../components/ProductView';

function CajaPage() {
    const [ticketItems, setTicketItems] = useState([]);

    const products = [
        { id: 1, name: "Producto 1", code: "123", price: 100, image: 'path/to/image1.jpg' },
        { id: 2, name: "Producto 2", code: "456", price: 200, image: 'path/to/image2.jpg' },
        { id: 3, name: "Producto 3", code: "456", price: 300, image: 'path/to/image3.jpg' },
        { id: 4, name: "Producto 4", code: "456", price: 400, image: 'path/to/image4.jpg' },
        { id: 5, name: "Producto 5", code: "456", price: 500, image: 'path/to/image5.jpg' },
        { id: 6, name: "Producto 6", code: "456", price: 600, image: 'path/to/image6.jpg' },
        { id: 7, name: "Producto 7", code: "456", price: 700, image: 'path/to/image7.jpg' },
        { id: 8, name: "Producto 8", code: "456", price: 800, image: 'path/to/image8.jpg' },
        { id: 9, name: "Producto 9", code: "456", price: 900, image: 'path/to/image9.jpg' }
        // Agrega más productos aquí...
    ];

    const addToTicket = (product) => {
        setTicketItems((prevItems) => {
            const existingItem = prevItems.find(item => item.id === product.id);
            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    };

    return (
        <div className='h-full'>
            <div className="p-4">
                <div className="flex bg-gray-200 rounded-lg p-4">
                    <div className="w-5/12">
                        <TicketView ticketItems={ticketItems} />
                    </div>
                    <div className="w-7/12">
                        <ProductView products={products} addToTicket={addToTicket} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CajaPage;
