import Input from "./Input";

function SidebarBody({
  updatedRegistries,
  selectedRegistryId,
  isSearchRegistry,
  searchRegistryText,
  showAllRegistries,
  registriesListCurrentPage,
  totalRegistriesListPages,
  onClickSidebarItem,
  onClickRegistryCreate,
  onChangeSearchRegistryMode,
  onChangeSearchRegistryText,
  onChangeRegistriesMode,
  onChangeRegistryPageNumber,
}) {
  return (
    <div className="sidebar-body tile d-flex flex-column justify-content-between">
      <div className="registries">
        <h4>Список реестров</h4>
        <div className="d-flex justify-content-between gap-3 align-items-start">
          {isSearchRegistry && (
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Введите текст"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
                value={searchRegistryText}
                onChange={onChangeSearchRegistryText}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={() => {
                  onChangeSearchRegistryMode(false);
                }}
              >
                <span className="material-icons">close</span>
              </button>
            </div>
          )}
          {!isSearchRegistry && (
            <button
              className="btn btn-outline-secondary mb-3"
              onClick={() => {
                onChangeSearchRegistryMode(true);
              }}
            >
              <span className="material-icons me-2">search</span>
              Найти
            </button>
          )}
          <button
            className="btn btn-primary mb-3"
            onClick={onClickRegistryCreate}
          >
            Добавить реестр
          </button>
        </div>

        <div className="list-group">
          {updatedRegistries.map((registry) => {
            return (
              <a
                href="#"
                className={
                  registry.id === selectedRegistryId
                    ? "list-group-item list-group-item-action active"
                    : "list-group-item list-group-item-action"
                }
                key={registry.id}
                onClick={() => {
                  onClickSidebarItem(registry.id);
                }}
              >
                {registry.title}
              </a>
            );
          })}
        </div>
      </div>
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-outline-secondary"
          onClick={onChangeRegistriesMode}
        >
          {showAllRegistries ? "Показать постранично" : "Показать всё"}
        </button>
        {!showAllRegistries && (
          <div className="d-flex align-items-center">
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                onChangeRegistryPageNumber(-1);
              }}
            >
              <span className="material-icons">chevron_left</span>
            </button>
            <div className="mx-2">
              {registriesListCurrentPage} / {totalRegistriesListPages}
            </div>
            <button
              className="btn btn-outline-secondary"
              onClick={() => {
                onChangeRegistryPageNumber(1);
              }}
            >
              <span className="material-icons">chevron_right</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default SidebarBody;
