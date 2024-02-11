import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  let [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = values.duration >= 1;

  const handleChangeValues = (event) => {
    let id = event.target.id;
    let value = event.target.value;

    setValues((prevValue) => {
      let newValues = { ...prevValue, [id]: +value };
      return newValues;
    });
  };

  return (
    <>
      <Header />
      <UserInput values={values} handleChangeValues={handleChangeValues} />
      {inputIsValid ? (
        <Results values={values} />
      ) : (
        <p className='center'>Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
