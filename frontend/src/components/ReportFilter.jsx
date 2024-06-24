function ReportFilter() {
    return (
        <div>
            <div class="bg-white p-4 rounded-md shadow-md">
                <div class="flex space-x-4">
                    <div class="flex-1">
                        <label for="fecha-desde" class="block text-sm font-medium text-gray-700">Fecha desde</label>
                        <input type="date" id="fecha-desde" class="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
                    </div>
                    <div class="flex-1">
                        <label for="fecha-hasta" class="block text-sm font-medium text-gray-700">Fecha hasta</label>
                        <input type="date" id="fecha-hasta" class="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm" />
                    </div>
                    <div class="flex-1">
                        <label for="empleado" class="block text-sm font-medium text-gray-700">Empleado</label>
                        <select id="empleado" class="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm">
                            <option value="">Seleccionar</option>
                            <option value="empleado1">Empleado 1</option>
                            <option value="empleado2">Empleado 2</option>
                        </select>
                    </div>
                    <div class="flex-1">
                        <label for="categoria" class="block text-sm font-medium text-gray-700">Categoría</label>
                        <select id="categoria" class="mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm">
                            <option value="">Seleccionar</option>
                            <option value="categoria1">Categoría 1</option>
                            <option value="categoria2">Categoría 2</option>
                        </select>
                    </div>
                    <div class="flex-1">
                        <button type="button" class="bg-black text-white font-bold py-2 px-4 rounded hover:bg-gray-700 focus:outline-none focus:shadow-outline">btn Generar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReportFilter;