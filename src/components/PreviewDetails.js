import PreviewDetailMainRow from "./PreviewDetailMainRow";
import PreviewDetailsTab from "./PreviewDetailsTab";
import PreviewDetailsTabPane from "./PreviewDetailsTabPane";

function PreviewDetails({
  updatedRegistries,
  updatedRegistriesData,
  selectedRegistryId,
  selectedRegistryPropertyId,
  selectedPreviewPart,
  showAllDetailsMainRows,
  selectedPreviewDetailsTab,
  previewRole,
  onClickPreviewDetailsMainRow,
  onClickVisibilityDetailsMainRow,
  onClickPreviewDetailsTab,
  onClickPreviewDetailsTabRow,
  onClickPreviewDetails,
  selectedProperty,
  showAllRegistryProperties,
  onClickRegistryColumnUpdate,
}) {
  const registry = updatedRegistries.find(
    (item) => item.id === selectedRegistryId
  );
  const registryData = updatedRegistriesData.find(
    (item) => item.registry === selectedRegistryId
  );
  console.log(registry);
  console.log(registryData);
  const roles = {
    admin: "Админиcтратор",
    operator: "Оператор",
    manager: "Продавец",
    guest: "Гость",
  };
  if (!registry) return;
  return (
    <div className="preview-details">
      <h4>Предварительный просмотр подробной информации записи реестра</h4>
      {!registry.roles.includes(previewRole) && (
        <div className="alert alert-warning">
          У роли "{roles[previewRole]}" нет доступа к реестру "{registry.title}"
        </div>
      )}
      {registry.roles.includes(previewRole) && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3"></div>
          <div className="preview-details-basic mb-3">
            <div className="table-responsive">
              <table className="table table-borderless table-hover">
                <tbody>
                  {registry.properties
                    .sort((a, b) => {
                      return a.orderDetails - b.orderDetails;
                    })
                    .filter((propItem) => {
                      return propItem.access.includes(previewRole);
                    })
                    .map((propItem, index) => {
                      return (
                        <PreviewDetailMainRow
                          updatedRegistries={updatedRegistries}
                          updatedRegistriesData={updatedRegistriesData}
                          property={propItem}
                          operationValues={registryData.apps}
                          showAllDetailsMainRows={showAllRegistryProperties}
                          selected={
                            propItem.name === selectedRegistryPropertyId
                          }
                          active={
                            propItem.name === selectedRegistryPropertyId &&
                            selectedPreviewPart === "main-row"
                          }
                          onClickPreviewDetailsMainRow={() => {
                            console.log("onClickPreviewDetailsMainRow");
                            console.log(propItem);
                            console.log(propItem.name);
                            onClickPreviewDetailsMainRow(propItem.name);
                          }}
                          onClickRegistryColumnUpdate={
                            onClickRegistryColumnUpdate
                          }
                          key={index}
                        />
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="preview-details-additional">
            <div className="d-flex justify-content-between mb-3">
              <ul
                className={`nav nav-pills ${selectedPreviewPart === "tabs" ? "active" : ""}`}
                id="pills-tab"
                role="tablist"
              >
                {registry.tabs.map((tab, index) => {
                  return (
                    <PreviewDetailsTab
                      title={tab.title}
                      targetId={tab.targetId}
                      active={selectedPreviewDetailsTab === tab.targetId}
                      key={index}
                    />
                  );
                })}
              </ul>
              <button
                className="btn btn-primary"
                onClick={onClickPreviewDetailsTab}
              >
                Изменить вкладки
              </button>
            </div>
            <div className="tab-content" id="pills-tabContent">
              {registry.tabs.map((tab, index) => {
                return (
                  <PreviewDetailsTabPane
                    id={tab.targetId}
                    operationProperties={registry.properties}
                    operationValues={registryData.apps}
                    selectedRegistryPropertyId={selectedRegistryPropertyId}
                    selectedPreviewPart={selectedPreviewPart}
                    active={selectedPreviewDetailsTab === tab.targetId}
                    items={tab.items}
                    onClickPreviewDetailsTabRow={onClickPreviewDetailsTabRow}
                    selectedProperty={selectedProperty}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PreviewDetails;
