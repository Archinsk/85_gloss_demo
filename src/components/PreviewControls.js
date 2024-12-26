import Checkbox from "./Checkbox";

function PreviewControls({
  showAllRegistryProperties,
  previewRole,
  onClickShowAllProperties,
  onClickCreateNewRegistryColumn,
  onChangePreviewRole,
}) {
  return (
    <div className="preview-controls tile mt-3">
      <div className="row">
        <div className="col-5">
          <div className="input-group">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Просмотр для роли
            </span>
            <select
              className="form-select"
              aria-label="Default select example"
              title="Не работает в демо-версии"
              value={previewRole}
              onChange={onChangePreviewRole}
            >
              <option value="admin">Администратор</option>
              <option value="operator">Оператор</option>
              <option value="manager">Продавец</option>
              <option value="guest">Гость</option>
            </select>
          </div>
        </div>
        <div className="col-4">
          <Checkbox
            label="Управлять видимостью"
            value={showAllRegistryProperties}
            onChange={onClickShowAllProperties}
          />
        </div>
        <div className="col-3">
          <button
            className="btn btn-outline-secondary d-inline-block"
            onClick={onClickCreateNewRegistryColumn}
          >
            Добавить колонку реестра
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewControls;
