import forecasts from "../data/forecasts.json";
import { createContext, useContext } from "react";
import { useState } from "react";

export const CityContext = createContext(null);

export default function CityProvider({children}){
    
    const [cityId, setCityId] = useState("seattle");
    const city = forecasts.find((forecast) => forecast.id === cityId);

    return(
        <CityContext value={{ 
            cityId, setCityId,
            city,
        }} 
        >
        {children}
        </CityContext>
    )
}

export function useCity(){
    const val = useContext(CityContext);

    if(val == null){
        throw new Error("useCity must be used inside CityProvider");
    }

    return val;
}