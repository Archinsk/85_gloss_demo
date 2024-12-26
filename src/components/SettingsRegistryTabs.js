import AccordionItem from "./AccordionItem";
import Checkbox from "./Checkbox";
import Input from "./Input";

function SettingsRegistryTabs({
  updatedRegistries,
  selectedRegistryId,
  previewRole,
  onClickTabCreate,
  onClickTabDelete,
  onClickTabClone,
  onClickTabUpdate,
}) {
  const registry = updatedRegistries.find(
    (item) => item.id === selectedRegistryId
  );
  return (
    <div className="settings-table">
      <h4>Настройки вкладок подробной информации записи реестра</h4>
      <button className="btn btn-primary mb-3" onClick={onClickTabCreate}>
        Добавить вкладку
      </button>
      <div class="accordion accordion-flush" id="accordionExample">
        {registry.tabs.map((tab, index) => {
          return (
            <AccordionItem
              key={tab.targetId}
              label={tab.title}
              id={tab.targetId}
            >
              <form>
                <div className="row">
                  <Input
                    label="Наименование"
                    value={tab.title}
                    cols="6"
                    onChange={(e) => {
                      onClickTabUpdate(index, "title", e.target.value);
                    }}
                  />
                  <Input label="Идентификатор" value={tab.targetId} cols="6" />
                  <h6 className="mb-3">Роли (не работает в демо-версии)</h6>
                  <Checkbox label="Администратор" />
                  <Checkbox label="Оператор" />
                  <Checkbox label="Логист" />
                  <Checkbox label="Гость" />
                </div>
              </form>
              <h6>Строки вкладки</h6>
              <div className="table-responsive">
                <table className="table table-bordered table-hover">
                  <tbody>
                    <tr>
                      <th>Наименование</th>
                      <th>Отобразить на вкладке</th>
                      <th>Номер строки</th>
                    </tr>
                    {registry.properties
                      .filter((propItem) => {
                        return propItem.access.includes(previewRole);
                      })
                      .map((registryProperty) => {
                        /* const tabItem = tab.items.find(
                        (ti) => ti.propertyName === selectedRegistryId
                      ); */
                        console.log("tab");
                        console.log(JSON.stringify(tab));
                        const tabItemsIds = tab.items.map(
                          (item) => item.propertyName
                        );
                        const rowOnCurrerntTab = tab.items.find((item) => {
                          if (item.propertyName === registryProperty.name)
                            return item;
                        });
                        console.log("tabItemsIds");
                        console.log(tabItemsIds);
                        console.log("rowOnCurrerntTab");
                        console.log(rowOnCurrerntTab);
                        return (
                          <tr key={registryProperty.name}>
                            <td>{registryProperty.title}</td>
                            <td>
                              <span
                                className="material-icons"
                                onClick={() => {
                                  if (
                                    tabItemsIds.includes(registryProperty.name)
                                  ) {
                                    onClickTabUpdate(
                                      index,
                                      registryProperty.name,
                                      null,
                                      "remove"
                                    );
                                  } else {
                                    onClickTabUpdate(
                                      index,
                                      registryProperty.name,
                                      null,
                                      "add"
                                    );
                                  }
                                }}
                              >
                                {tabItemsIds.includes(registryProperty.name)
                                  ? "visibility"
                                  : "visibility_off"}
                              </span>
                            </td>
                            <td>
                              {rowOnCurrerntTab && (
                                <Input
                                  value={rowOnCurrerntTab.order}
                                  type="number"
                                  onChange={(e) => {
                                    onClickTabUpdate(
                                      index,
                                      registryProperty.name,
                                      e.target.value,
                                      "changeOrder"
                                    );
                                  }}
                                />
                              )}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
                <div className="d-flex gap-3">
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      onClickTabClone(tab.targetId);
                    }}
                  >
                    Клонировать вкладку
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      onClickTabDelete(tab.targetId);
                    }}
                  >
                    Удалить вкладку
                  </button>
                </div>
              </div>
            </AccordionItem>
          );
        })}
      </div>
    </div>
  );
}

export default SettingsRegistryTabs;
