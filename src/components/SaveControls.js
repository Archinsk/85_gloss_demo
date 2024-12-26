function SaveControls({ onClickReset, onClickSave }) {
  return (
    <div className="save-controls d-flex gap-2">
      <button className="btn btn-outline-secondary" onClick={onClickReset}>
        Сбросить изменения
      </button>
      <button className="btn btn-primary" onClick={onClickSave}>
        Сохранить
      </button>
    </div>
  );
}

export default SaveControls;
