import { FaFileInvoiceDollar } from "react-icons/fa6";
import { BsClipboardDataFill } from "react-icons/bs";
import { BsBoxSeamFill } from "react-icons/bs";
import { DiAptana } from "react-icons/di";

function Sidebar(){
  return(
    <div className="bg-white p-5 w-16 shadow-md top-0 left-0 flex flex-col items-center">
      <ul className="space-y-5">
        <li className="flex items-center">
          <button><FaFileInvoiceDollar className="text-5xl transition-all p-2 hover:text-orange-500 hover:text-6xl" /></button>
        </li>
        <li className="flex items-center2">
        <button><BsClipboardDataFill className="text-5xl transition-all p-2 hover:text-orange-500 hover:text-6xl" /></button>
        </li>
        <li className="flex items-center">
          <button><BsBoxSeamFill className="text-5xl transition-all p-2 hover:text-orange-500 hover:text-6xl" /></button>
        </li> 
        <li className="flex items-center">
          <button><DiAptana className="text-5xl transition-all p-2 hover:text-orange-500 hover:text-6xl" /></button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

      