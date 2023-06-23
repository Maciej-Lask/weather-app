import styles from './WeatherSummary.module.scss';

const WeatherSummary = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { city, temp, icon, description } = weatherData;

  return (
    <section className={styles.weatherSummary}>
      <img
        className={styles.weatherIcon}
        alt="Weather Icon"
        src={`${process.env.PUBLIC_URL}/images/weather-icons/${icon}.png`}
      />
      <div className={styles.weatherInfo}>
        <h2>{city}</h2>
        <p>
          <strong>Temp:</strong> {temp}
        </p>
        <p>
          <strong>Description:</strong> {description}
        </p>
      </div>
    </section>
  );
};

export default WeatherSummary;
