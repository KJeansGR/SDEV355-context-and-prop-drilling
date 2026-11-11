
import { createContext } from "react";
import { useState,useContext } from "react";

export const UnitsContext = createContext(null);

export default function UnitsProvider({children}){
    const [units ,setUnits] = useState();

    return(
        <UnitsContext value={{ 
            units, setUnits }} 
        >
        {children}
        </UnitsContext>
    )
}

export function useUnits(){
    const val = useContext(UnitsContext);

    if(val == null){
        throw new Error("useUnits must be used inside unitsProvider");
    }

    return val;
}