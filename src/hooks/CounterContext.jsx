import { createContext, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({children}) {
    let [cartItems, setCartItems] = useState(0);
    return <CounterContext.Provider value={{ cartItems, setCartItems }}>
        {children}
    </CounterContext.Provider>;
}
