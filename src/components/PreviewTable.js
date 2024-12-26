import PreviewTableColumn from "./PreviewTableColumn";

function PreviewTable({
  updatedRegistries,
  updatedRegistriesData,
  selectedRegistryId,
  selectedRegistryPropertyId,
  selectedPreviewPart,
  showAllTableColumns,
  showAllRegistryProperties,
  previewRole,
  onClickPreviewTableTitle,
  onClickPreviewTableColumn,
  onClickVisibilityPreviewTableColumn,
  onClickShowAllProperties,
  onClickRegistryColumnUpdate,
}) {
  const registry = updatedRegistries.find(
    (item) => item.id === selectedRegistryId
  );
  const registryData = updatedRegistriesData.find(
    (item) => item.registry === selectedRegistryId
  );
  const roles = {
    admin: "Админиcтратор",
    operator: "Оператор",
    manager: "Продавец",
    guest: "Гость",
  };
  console.log("registry");
  console.log(registry);
  //console.log(registryData);
  if (!registry) return;
  return (
    <div className="preview-table my-3">
      <h4>Предварительный просмотр таблицы реестра</h4>
      {!registry.roles.includes(previewRole) && (
        <div className="alert alert-warning">
          У роли "{roles[previewRole]}" нет доступа к реестру "{registry.title}"
        </div>
      )}
      {registry.roles.includes(previewRole) && (
        <>
          <div
            className={`preview-table-title d-flex justify-content-between align-items-center ${selectedPreviewPart === "title" ? "active" : ""}`}
            onClick={onClickPreviewTableTitle}
          >
            <h5>{registry.title}</h5>
            <div className="d-flex column-gap-3">
              {registry.actions.map((action, index) => {
                if (action.type === "icon") {
                  return (
                    action.visibility && (
                      <span className="material-icons" key={index}>
                        {action.icon}
                      </span>
                    )
                  );
                }
                if (action.type === "text") {
                  return (
                    action.visibility && <span key={index}>{action.text}</span>
                  );
                }
                return;
              })}
            </div>
          </div>
          <div className="table-responsive">
            <div className="table">
              {registry.properties
                .sort((a, b) => {
                  return a.order - b.order;
                })
                .filter((propItem) => {
                  return propItem.access.includes(previewRole);
                })
                .map((propItem, index) => {
                  return (
                    <PreviewTableColumn
                      property={propItem}
                      operationValues={registryData.apps}
                      showAllTableColumns={showAllRegistryProperties}
                      selected={propItem.name === selectedRegistryPropertyId}
                      active={
                        propItem.name === selectedRegistryPropertyId &&
                        selectedPreviewPart === "column"
                      }
                      previewRole={previewRole}
                      key={index}
                      onClickPreviewTableColumn={() => {
                        onClickPreviewTableColumn(propItem.name);
                      }}
                      onClickRegistryColumnUpdate={onClickRegistryColumnUpdate}
                    />
                  );
                })}
            </div>
          </div>

          <div className="preview-table-footer">
            <div>Всего: 3</div>
          </div>
        </>
      )}
    </div>
  );
}

export default PreviewTable;
