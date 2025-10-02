import React, { useContext, useState } from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CounterContext } from "../hooks/CounterContext";
import { FcFlashOn } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
    const [open, setOpen] = useState(false)
    const increase = useContext(CounterContext)
    console.log(increase);
    
    return (
        <>
            <div className="px-4 py-3 flex justify-between items-center relative">
                <FcFlashOn className="text-yellow-500 w-8 h-8" />
                <h1 className="font-bold text-3xl text-blue-400">C O R S A T Y</h1>
                <div className="flex relative">
                    <FaShoppingCart color="yellow" className="w-7 h-7" />
                    <div>
                        <span className="text-md absolute top-3 -left-1.5 text-white text-center rounded-full">{increase.cartItems}</span>
                    </div>
                </div>
            </div>
        </>
    );
}
