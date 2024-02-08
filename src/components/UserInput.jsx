const UserInput = () => {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label htmlFor=''>Initial Investment</label>
          <input type='number' value='' required />
        </p>
        <p>
          <label htmlFor=''>Annual Investment</label>
          <input type='number' value='' required />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor=''>Expected Return</label>
          <input type='number' value='' required />
        </p>
        <p>
          <label htmlFor=''>Duration</label>
          <input type='number' value='' required />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
