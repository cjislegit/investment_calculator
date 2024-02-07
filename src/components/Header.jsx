import calculatorLogo from '../assets/investment-calculator-logo.png';

const Header = () => {
  return (
    <header id='header'>
      <img src={calculatorLogo} alt='Calculator Logo' />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
