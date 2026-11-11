
import { createContext } from "react";
import { useState } from "react";

export const UnitsContext = createContext(null);

export default function UnitsProvider({children}){
    const [units ,setUnits] = useState("F");

    return(
        <UnitsContext.Provider value={{ 
            units, setUnits }} 
        >
        {children}
        </UnitsContext.Provider>
    )
}