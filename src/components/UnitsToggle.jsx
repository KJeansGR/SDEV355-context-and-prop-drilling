import { useContext } from "react";
import { UnitsContext } from "../context/UnitsProvider";

function UnitsToggle() {
  const{units,setUnits} = useContext(UnitsContext);
  return (
    <div className="units-toggle">
      <button type="button" onClick={()=>setUnits("F")} className={units == "F" && "units-on"}>
        °F
      </button>
      <button type="button" className={units == "C" && "units-on"}onClick={()=>setUnits("C")}>°C</button>
    </div>
  );
}

export default UnitsToggle;
