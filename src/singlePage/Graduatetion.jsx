import React, { useState } from "react";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";

export default function Graduatetion({ data }) {
    const [pupop, setPopup] = useState(false);
    return (
        <>
            <section className="bg-amber-800 relative rounded-2xl h-[34vh] overflow-hidden group">
                <img className="w-full h-full" src={data.img} alt="" />
                <button className="cursor-pointer border-2 border-white rounded-2xl text-amber-50 px-3 py-2.5 absolute top-3 duration-200 left-2 hover:text-amber-500" onClick={() => setPopup(!pupop)}>
                    <FaClipboardList className="text-[1em]" />
                </button>
                {pupop && (
                    <div className="fixed flex items-center justify-center z-20 w-full h-full bg-[rgba(0,0,0,0.6)] top-0 left-0">
                        <div className="max-w-2xl relative w-[40%] bg-white rounded-2xl p-7">
                            <button className="absolute top-2 right-1.5" onClick={() => setPopup(!pupop)}>
                                <MdOutlineExitToApp className=" hover:text-indigo-600 cursor-pointer " size={20} />
                            </button>
                            <img src={data.img} className="w-[20vh] h-[20vh] rounded-2xl" alt="" />
                            <div className="flex flex-col gap-1.5">
                                <h3 className="font-bold text-xl mt-[0.2em]">name : {data.name}</h3>
                                <span>age : {data.age}</span>
                                <p>graduatetions year : {data.graduatetionYears}</p>
                                <span>certificate : {data.certificate}</span>
                                <span>graduatetionFrom : {data.graduatetionFrom}</span>
                            </div>

                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
