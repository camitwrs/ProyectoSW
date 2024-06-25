function ReportView() {
    return (
        <div className="bg-white p-6 rounded-md shadow-md mb-4 border border-black">
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-gray-500">
                                <thead className="bg-gray-50 border border-black">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Fecha</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Día</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Subtotal</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Descuento</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-black">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="border border-black">
                                    {[...Array(5)].map((_, index) => (
                                        <tr key={index} className="bg-white border border-black">
                                            {['Fecha', 'Día', 'Subtotal', 'Descuento', 'Total'].map((col, idx) => (
                                                <td key={idx} className="px-6 py-4 whitespace-nowrap">
                                                    <div className="text-sm font-medium text-gray-900">
                                                        <div className="bg-gray-300 rounded-full h-4 w-32"></div>
                                                    </div>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="text-gray-600 text-xs mt-2">
                    Mostrando 5 de 20 registros
                </div>
            </div>
        </div>
    );
}

export default ReportView;
