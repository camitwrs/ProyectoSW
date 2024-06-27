import { FiPlusCircle } from "react-icons/fi";
import { IoTrashOutline } from 'react-icons/io5';

const mockEmployees = [
    { firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane.smith@example.com' },
    // Add more mock employees here
];

function EmployeeView() {
    return (
        <div className="p-4 rounded-lg border border-black">
            <div className="mb-4">
            <h1 className="text-l font-bold">EMPLEADOS</h1>
                <button className="mt-2 flex items-center bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    <FiPlusCircle className="mr-2" /> Crear cuenta
                </button>
            </div>

            <div className="flex px-2 py-2 font-bold">
                <div className="flex-1">Nombre</div>
                <div className="flex-1">Apellido</div>
                <div className="flex-2">Correo</div>
                <div className="flex-1"></div> {/* Espacio para el botón de eliminar */}
            </div>

            {mockEmployees.map((employee, index) => (
                <div key={index} className="flex px-2 py-2 items-center">
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left">{employee.firstName}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2">{employee.lastName}</div>
                    <div className="flex-3 bg-gray-300 rounded p-2 text-left ml-2">{employee.email}</div>
                    <button className="text-red-500 font-bold py-2 px-4 rounded ml-2">
                        <IoTrashOutline className="size-6"/>
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2">Modificar</button>
                </div>
            ))}
        </div>
    );
}

export default EmployeeView;
