const InputField = ({ type, placeholder, icon: Icon, fieldProps, error }) => (
  <div className='input-box'>
    <input type={type} placeholder={placeholder} {...fieldProps} />
    {Icon && <Icon className='icon' />}
    {error && <div className='error'>{error}</div>}
  </div>
);

export default InputField;
