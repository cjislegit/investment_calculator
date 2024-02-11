import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';

function App() {
  let [values, setValues] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChangeValues = (event) => {
    let id = event.target.id;
    let value = event.target.value;

    setValues((prevValue) => {
      let newValues = { ...prevValue, [id]: value };
      return newValues;
    });
  };

  return (
    <>
      <Header />
      <UserInput values={values} handleChangeValues={handleChangeValues} />
    </>
  );
}

export default App;
