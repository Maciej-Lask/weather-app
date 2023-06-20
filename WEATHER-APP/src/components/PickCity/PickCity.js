import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './PickCity.module.scss';
import ErrorBox from '../ErrorBox/ErrorBox';
import { useState } from 'react';

const PickCity = ({ action }) => {
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71d9f2d58d90bcaa8d5a1784cb2066fb&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setError('');
        action(city, data);
        setCity('');
      } else {
        setError('This city does not exist!');
        // alert('ERROR!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <form className={styles.pickCityForm} onSubmit={handleSubmit}>
        <label>
          <TextInput
            placeholder="Enter city name...."
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        <Button>Search</Button>
      </form>
      {error && <ErrorBox>{error}</ErrorBox>}
    </div>
  );
};

export default PickCity;