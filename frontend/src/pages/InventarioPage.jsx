import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import InventoryTable from '../components/InventoryTable';
import InventoryPagination from '../components/InvetoryPagination';
import RecordsInfo from '../components/RecordsInfo';

function InventarioPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-100">
            <h1 className="text-xl font-bold py-4">INVENTARIO</h1>
            <SearchBar />
            <InventoryTable />
            <InventoryPagination />
            <RecordsInfo />
        </div>
    );
}

export default InventarioPage;