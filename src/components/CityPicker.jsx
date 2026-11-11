import forecasts from "../data/forecasts.json";
import { useCity } from "../context/CityContext";
function CityPicker() {
  const{cityId, setCityId} = useCity();
  return (
    <label className="city-picker">
      City
      <select value={cityId} onChange={(e) => setCityId(e.target.value)}>
        {forecasts.map((forecast) => (
          <option key={forecast.id} value={forecast.id}>
            {forecast.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CityPicker;
