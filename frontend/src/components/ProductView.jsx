import Product from "./Product";

function ViewProduct(){
    return(
        <div className="container mx-auto p-4 border-black">
        <h1 className="text-2xl font-bold mb-4">Vista productos</h1>
        <div className="flex justify-end mb-4">
            <select name="" id="" className="rounded">
                <option value="">Todas las categorias</option>
                <option value="">Snack</option>
                <option value="">Bebestible</option>
            </select>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {[...Array(16)].map((_, index) => (
            <Product />
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            IMPRIMIR
          </button>
        </div>  
      </div>
    );
}

export default ViewProduct;