import React from 'react';
import ReportFilter from '../components/ReportFilter';
import ReportView from '../components/ReportView';
import SalesView from '../components/SalesView';

function ReportesPage() {
    return (
        <div className="p-4 m-4 border-2 border-black rounded-lg">
            <ReportFilter />
            <ReportView />
            <SalesView />
        </div>
    );
}

export default ReportesPage;
