import React from 'react';

function InventoryPagination() {
    return (
        <div className="py-4">
            <div className="flex justify-end">
                <div className="flex items-center space-x-4">
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                        1
                    </button>
                    <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                        2
                    </button>
                </div>
            </div>
        </div>
    );
}

export default InventoryPagination;
