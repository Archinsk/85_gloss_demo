function Select({ children, id, label, value, cols = 12, options, onChange }) {
  return (
    <div className={`col-${cols} mb-3`}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select id={id} className="form-select" onChange={onChange}>
        {(!options || !options.length) && (
          <option disabled value="">
            Выберите...
          </option>
        )}
        {options &&
          options.length &&
          options.map((option) => {
            return (
              <option
                value={option.value}
                key={option.id}
                selected={option.value === value}
              >
                {option.label}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default Select;
