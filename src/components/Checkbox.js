function Checkbox({ id, label, value, cols = 12, onChange }) {
  return (
    <div className={`col-${cols} mb-3`}>
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={label}
          checked={value}
          onChange={onChange}
        />
        <label className="form-check-label" htmlFor={label}>
          {label}
        </label>
      </div>
    </div>
  );
}

export default Checkbox;
