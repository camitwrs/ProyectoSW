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
                <h1 className="text-2xl font-bold">Empleados</h1>
                <button className="mt-2 flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <FiPlusCircle className="mr-2" /> Crear cuenta
                </button>
            </div>

            <div className="flex px-14 py-2">
                <h1 className="flex-1 text-left" style={{ minWidth: '120px' }}>Nombre</h1>
                <h1 className="flex-1 text-left" style={{ minWidth: '120px' }}>Apellido</h1>
                <h1 className="flex-1 text-left" style={{ minWidth: '200px' }}>Correo</h1>
            </div>

            {mockEmployees.map((employee, index) => (
                <div key={index} className="flex px-14 py-2 items-center">
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left" style={{ minWidth: '120px', height: '40px' }}>{employee.firstName}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2" style={{ minWidth: '120px', height: '40px' }}>{employee.lastName}</div>
                    <div className="flex-1 bg-gray-300 rounded p-2 text-left ml-2" style={{ minWidth: '200px', height: '40px' }}>{employee.email}</div>
                    <button className="text-red-500 font-bold py-2 px-4 rounded ml-2">
                        <IoTrashOutline />
                    </button>
                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-2">Mod</button>
                </div>
            ))}
        </div>
    );
}

export default EmployeeView;
