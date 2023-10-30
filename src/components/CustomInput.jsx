const CustomInput = ({ label, title, type, state, placeholder, setState }) => {
  return (
    <div>
      <label htmlFor={label}>{title}</label>
      <input
        id={label}
        type={type}
        value={state}
        placeholder={placeholder}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </div>
  );
};

export default CustomInput;
