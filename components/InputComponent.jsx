function InputComponent({label, value, onChange, placeholder, name}){
    return(
        <div className="mt-2">
        <label>{label}</label>
          <input
            className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="number"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </div>
    );
}

export default InputComponent;