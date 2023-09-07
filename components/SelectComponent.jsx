function SelectComponent ({label, onChange, options, placeholder,name}){

    return(
        <div>
          <label>{label}</label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            placeholder={placeholder}
            onChange={onChange}
            name={name}
          >
            {options.map((option, index)=>(
                <option key = {index} value={option.value}>
                    {option.label}
                </option>
            ))}
          </select>
          </div>
    );
};

export default SelectComponent;