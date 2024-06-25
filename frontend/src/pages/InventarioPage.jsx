import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import InventoryTable from '../components/InventoryTable';
import InventoryPagination from '../components/InvetoryPagination';
import RecordsInfo from '../components/RecordsInfo';

function InventarioPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <SearchBar />
            <InventoryTable />
            <InventoryPagination />
            <RecordsInfo />
        </div>
    );
}

export default InventarioPage;