function SalesView() {
    return (
        <div>
            <div class="flex gap-4">
                <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-medium">Productos más vendidos</h2>
                        <button class="bg-gray-200 px-2 py-1 rounded-md text-xs">Mostrar</button>
                    </div>

                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2">Nombre</th>
                                <th class="px-4 py-2">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="flex flex-col gap-2">
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-medium">Productos menos vendidos</h2>
                        <button class="bg-gray-200 px-2 py-1 rounded-md text-xs">Mostrar</button>
                    </div>

                    <table class="table-auto w-full">
                        <thead>
                            <tr>
                                <th class="px-4 py-2">Nombre</th>
                                <th class="px-4 py-2">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                                <td class="px-4 py-2"><span class="bg-gray-300 h-6 w-24 rounded-md inline-block"></span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default SalesView;