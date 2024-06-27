function SalesView() {
    return (
        <div className="bg-white p-6 rounded-md shadow-md">
            <div className="flex gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium">Productos más vendidos</h2>
                    </div>

                    <table className="table-auto w-full border border-black">
                        <thead className="border border-black">
                            <tr>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(3)].map((_, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">
                                        <div className="flex justify-center items-center">
                                            <span className="bg-gray-300 h-6 w-24 rounded-md"></span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="flex justify-center items-center">
                                            <span className="bg-gray-300 h-6 w-24 rounded-md"></span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium">Productos menos vendidos</h2>
                    </div>

                    <table className="table-auto w-full border border-black">
                        <thead className="border border-black">
                            <tr>
                                <th className="px-4 py-2">Nombre</th>
                                <th className="px-4 py-2">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[...Array(3)].map((_, index) => (
                                <tr key={index}>
                                    <td className="px-4 py-2">
                                        <div className="flex justify-center items-center">
                                            <span className="bg-gray-300 h-6 w-24 rounded-md"></span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2">
                                        <div className="flex justify-center items-center">
                                            <span className="bg-gray-300 h-6 w-24 rounded-md"></span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SalesView;
