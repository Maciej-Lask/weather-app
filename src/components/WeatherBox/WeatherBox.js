import PickCity from '../PickCity/PickCity';
import WeatherSummary from '../WeatherSummary/WeatherSummary';
import Loader from '../Loader/Loader';
import { useCallback, useState } from 'react';

const WeatherBox = (props) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCityChange = useCallback((city) => {
    setLoading(true);
    

    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71d9f2d58d90bcaa8d5a1784cb2066fb&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newWeatherData = {
          city: data.name,
          temp: data.main.temp,
          icon: data.weather[0].icon,
          description: data.weather[0].main,
        };
        setWeatherData(newWeatherData);
        setLoading(false);
      });
  }, []);

  return (
    <section>
      <PickCity action={handleCityChange} />
      {loading ? (
        <Loader />
      ) : (
        weatherData && <WeatherSummary weatherData={weatherData} />
      )}
    </section>
  );
};

export default WeatherBox;
