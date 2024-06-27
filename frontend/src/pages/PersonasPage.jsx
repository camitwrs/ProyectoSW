import React from 'react';
import EmployeeView from '../components/EmployeeView';
import SupplierView from '../components/SupplierView';

function PersonasPage() {
    return (
        <div className='max-h-screen flex flex-col'>
            <div className="p-4 flex-1 flex">
                <div className="bg-gray-100 rounded-lg p-4 flex flex-col h-full w-full">
                <h1 className="text-xl font-bold mb-3">CONFIGURACIÓN</h1>
                    <div className="flex flex-1 justify-between">
                        <div className="w-1/2 pr-2">
                            <EmployeeView />
                        </div>
                        <div className="w-1/2 pl-2">
                            <SupplierView />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonasPage;
