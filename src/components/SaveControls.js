function SaveControls({ isEditingSettings, onClickReset, onClickSave }) {
  return (
    <div className="save-controls d-flex gap-2 justify-content-end">
      <button
        className="btn btn-outline-secondary"
        disabled={!isEditingSettings}
        onClick={onClickReset}
      >
        Сбросить изменения
      </button>
      <button
        className="btn btn-primary"
        disabled={!isEditingSettings}
        onClick={onClickSave}
      >
        Сохранить
      </button>
    </div>
  );
}

export default SaveControls;
