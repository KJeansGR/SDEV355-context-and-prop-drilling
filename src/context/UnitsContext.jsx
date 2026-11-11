
import { createContext } from "react";

export const UnitsContext = createContext(null);

export default function UnitsProvider({children}){

    const units = "F";

    return(
        <UnitsContext 
        units={units}
        >
        {children}
        </UnitsContext>
    )
}