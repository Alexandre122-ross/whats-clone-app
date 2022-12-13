import './style.inputData.css';

function InputDataComponent({ type = 'text', nameInput, labelText, inputValue, handleChange  }) {
  return (
    <div className='inputDataContainer'>
      <input 
        type={type}
        placeholder=' '
        name={nameInput}
        id={nameInput}
        className='input'
        value={inputValue}
        onChange={(ev) => handleChange(ev.target.value)}
      />

      <label className='labelText' htmlFor={nameInput}> {labelText} </label>
      <div className='activeInputBorder'/>
    </div>
  );
}

export default InputDataComponent;