import { CiBarcode } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";



function ListProduct() {
    return (
        <div>
            <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                    <h1>Escanear producto:</h1>
                    <button>
                        <CiBarcode className="text-3xl" />
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <h1>Ingresar código de producto:</h1>
                    <form type="text"></form>
                    <FaMicrophone className="text-2xl" />
                </div>
            </div>

            <div></div>


            <div className="">
                <h1>Subtotal:</h1>
                <h1>Descuentos:</h1>
                <h1>Total: 1000 besos reina</h1>
                <button className="bg-red-500">Cancelar</button>
                <button className="bg-green-500">Finalizar</button>
            </div>




        </div>
    );
}

export default ListProduct;