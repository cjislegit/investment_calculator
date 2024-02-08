const UserInput = () => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor='initialInvestment'>Initial Investment</label>
          <input id='initialInvestment' type='number' value='' required />
        </p>
        <p>
          <label htmlFor='annualInvestment'>Annual Investment</label>
          <input id='annualInvestment' type='number' value='' required />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expectedReturn'>Expected Return</label>
          <input id='expectedReturn' type='number' value='' required />
        </p>
        <p>
          <label htmlFor='duration'>Duration</label>
          <input id='duration' type='number' value='' required />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
