const UserInput = ({ values, handleChangeValues }) => {
  let { initialInvestment, annualInvestment, expectedReturn, duration } =
    values;
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initialInvestment'>Initial Investment</label>
          <input
            id='initialInvestment'
            type='number'
            value={initialInvestment}
            onChange={handleChangeValues}
            required
          />
        </p>
        <p>
          <label htmlFor='annualInvestment'>Annual Investment</label>
          <input
            id='annualInvestment'
            type='number'
            value={annualInvestment}
            onChange={handleChangeValues}
            required
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expectedReturn'>Expected Return</label>
          <input
            id='expectedReturn'
            type='number'
            value={expectedReturn}
            onChange={handleChangeValues}
            required
          />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input
            id='duration'
            type='number'
            value={duration}
            onChange={handleChangeValues}
            required
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
