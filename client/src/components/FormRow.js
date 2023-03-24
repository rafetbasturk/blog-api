const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='input-container'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>

      <input
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;