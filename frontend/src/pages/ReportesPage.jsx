import React, { useState } from 'react';
import ReportFilter from '../components/ReportFilter';
import ReportView from '../components/ReportView';
import SalesView from '../components/SalesView';

function ReportesPage(){
    return(
        <div>
            <ReportFilter />
            <ReportView />
            <SalesView />
        </div>
    );
}

export default ReportesPage;