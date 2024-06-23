import { FaHamburger } from "react-icons/fa";

function Product() {
    return (
        <div className="bg-white rounded-md border border-gray-300 p-4">
        <div className="flex justify-center">
            <FaHamburger />
        </div>
        <div className="text-center mt-2">
            <h2 className="font-bold text-lg">Nombre</h2>
            <p className="text-gray-500">[Código]</p>
        </div>
        </div>
        
    );
}
export default Product;