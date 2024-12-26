function Input({
  children,
  id,
  label,
  type = "text",
  value,
  cols = 12,
  onChange,
}) {
  return (
    <div className={`col-${cols} mb-3`}>
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
      <input
        type={type}
        className="form-control"
        id={id}
        value={value}
        onChange={onChange}
      />
      {/* <div id="emailHelp" className="form-text">
        We'll never share your email with anyone else.
      </div> */}
    </div>
  );
  /* onChange={(e) => {
    console.log(e);
    onChange({ id: id, value: e.target.value });
  }} */
}

export default Input;
