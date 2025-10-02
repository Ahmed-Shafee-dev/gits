import { useContext, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdOutlineExitToApp } from "react-icons/md";
import { useHandleWishListStore } from "../../store/HandelWishListStore";
import { CounterContext, CounterProvider } from "../../hooks/CounterContext";

export default function ShopData({ item }) {
    const [open, setOpen] = useState(false);
    const { addToWishList, inWishList } = useHandleWishListStore();
    const { cartItems, setCartItems } = useContext(CounterContext);
    const handleHeartClick = () => {
        if (inWishList(item.id)) {
            addToWishList(item);
            setCartItems(Math.max(cartItems - 1, 0));
        } else {
            addToWishList(item);
            setCartItems(cartItems + 1);
        }
    };
    return (
        <>
            <CounterProvider>
                <section>
                    <div className="shop-data relative h-[50vh] rounded-2xl overflow-hidden bg-red-800 mt-4 group">
                        <button
                            className="absolute cursor-pointer px-3.5 py-1.5 top-4 left-3 bg-zinc-200 text-blue-700 capitalize z-10 rounded-3xl"
                            onClick={() => {
                                setOpen(true);
                            }}>
                            more information
                        </button>
                        <img className="w-full h-full object-cover" src={item.img} alt={item.title} />
                        <div className="shop-data top-0 absolute left-0 w-full h-full flex justify-end flex-col bg-[rgba(0,0,0,.2)]">
                            <div
                                className="shop-data-layer rounded-full border-2 border-fuchsia-200 w-7.5 h-7.5 absolute flex items-center justify-center -top-8 right-3 cursor-pointer group-hover:top-3 duration-300"
                                onClick={handleHeartClick}>
                                {inWishList(item.id) ? <FaShoppingCart className="text text-yellow-300" /> : <FaShoppingCart className="text-white" />}
                            </div>
                            <div className="shop-data-layer-content text-white p-4">
                                <h2 className="text-[.9em]">{item.title}</h2>
                                <p className="text-xl mt-1">{item.subject}</p>
                            </div>
                        </div>
                    </div>
                </section>
                {open && (
                    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.6)] flex items-center justify-center z-15">
                        <div className="bg-white p-7 rounded-2xl w-[80%] max-w-2xl relative">
                            <button className="absolute top-2 right-2" onClick={() => setOpen(!open)}>
                                <MdOutlineExitToApp size={20} className="text-black cursor-pointer hover:text-indigo-600" />
                            </button>
                            <img src={item.img} alt={item.title} className="w-full h-60 object-cover rounded-lg" />
                            <div className="flex gap-15">
                                <div className="flex flex-col">
                                    <h2 className="text-xl font-bold mt-4">{item.title}</h2>
                                    <p className="text-gray-600 mt-2">{item.description}</p>
                                    {/* <span>Rate [ from 1 to 5 ] : {item.rate}</span> */}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </CounterProvider>
        </>
    );
}
