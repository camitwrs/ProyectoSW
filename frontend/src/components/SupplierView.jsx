const mockSuppliers = [
    { name: 'Proveedor 1', contact: 'contacto1@example.com', request: 'Solicitud 1', reception: 'Recepción 1' },
    { name: 'Proveedor 2', contact: 'contacto2@example.com', request: 'Solicitud 2', reception: 'Recepción 2' },
    // Add more mock suppliers here
];

function SupplierView() {
    return (
        <div className="p-4 rounded-lg border border-black">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">Proveedores</h1>
                <div className="flex justify-between mt-2">
                    <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Registrar proveedor
                    </button>
                    <button className="flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        Registrar pedido
                    </button>
                </div>
            </div>

            <div className="flex px-14 py-2">
                <h1 className="flex-1 text-left">Nombre</h1>
                <h1 className="flex-1 text-left">Contacto</h1>
                <h1 className="flex-1 text-left">Solicitud</h1>
                <h1 className="flex-1 text-left">Recepción</h1>
            </div>

            {mockSuppliers.map((supplier, index) => (
                <div key={index} className="flex px-14 py-2 items-center">
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left" style={{ minWidth: '100px', height: '40px' }}>{supplier.name}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2" style={{ minWidth: '150px', height: '40px' }}>{supplier.contact}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2" style={{ minWidth: '150px', height: '40px' }}>{supplier.request}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2" style={{ minWidth: '150px', height: '40px' }}>{supplier.reception}</div>
                </div>
            ))}
        </div>
    );
}

export default SupplierView;
