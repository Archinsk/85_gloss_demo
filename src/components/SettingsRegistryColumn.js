import { useState } from "react";
import Checkbox from "./Checkbox";
import Input from "./Input";
import Select from "./Select";

function SettingsRegistryColumn({
  updatedRegistries,
  updatedRegistriesData,
  selectedRegistryId,
  selectedRegistryPropertyId,
  onClickRegistryColumnDelete,
  onClickRegistryColumnClone,
  onClickRegistryColumnUpdate,
}) {
  const [showCollapse, setShowCollapse] = useState(false);
  const registry = updatedRegistries.find(
    (item) => item.id === selectedRegistryId
  );
  if (!registry) return;
  const registryData = updatedRegistriesData.find(
    (item) => item.registry === selectedRegistryId
  );
  const property = registry.properties.find(
    (item) => item.name === selectedRegistryPropertyId
  );
  console.log("SettingsRegistryColumn");
  console.log(registry);
  console.log(registryData);
  console.log(property);
  if (!property) return;

  return (
    <div className="settings-column">
      <div className="d-flex justify-content-between">
        <h4>Настройки колонки реестра</h4>
        <div className="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span className="material-icons">more_vert</span>
          </a>

          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                data-bs-toggle="collapse"
                href="#collapseExample"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Детальная настройка
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={onClickRegistryColumnClone}
              >
                Клонировать колонку
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={onClickRegistryColumnDelete}
              >
                Удалить колонку
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="alert alert-warning mt-3">
        Для изменения положения выбранной колонки управляйте стрелками{" "}
        <span className="material-icons">arrow_back</span>
        <span className="material-icons">arrow_upward</span>
        <span className="material-icons">arrow_forward</span>
        <span className="material-icons">arrow_downward</span>
        (или перетащите колонку на нужное место - только для платной версии)
      </div>
      <form>
        <div className="row">
          <Input
            label="Наименование"
            value={property.title}
            cols="6"
            onChange={(e) => {
              onClickRegistryColumnUpdate("title", e.target.value);
            }}
          />
          <Input
            label="Идентификатор (не работает в демо-версии)"
            value={property.name}
            cols="6"
          />
          <div className="col-6">
            <h6 className="mb-3">Роли</h6>
            <Checkbox
              label="Администратор"
              value={property.access.includes("admin")}
              onChange={(e) => {
                onClickRegistryColumnUpdate("access", "admin");
              }}
            />
            <Checkbox
              label="Оператор"
              value={property.access.includes("operator")}
              onChange={(e) => {
                onClickRegistryColumnUpdate("access", "operator");
              }}
            />
            <Checkbox
              label="Продавец"
              value={property.access.includes("manager")}
              onChange={(e) => {
                onClickRegistryColumnUpdate("access", "manager");
              }}
            />
            <Checkbox
              label="Гость"
              value={property.access.includes("guest")}
              onChange={(e) => {
                onClickRegistryColumnUpdate("access", "guest");
              }}
            />
          </div>
          <div className="col-6">
            <h6>Видимость</h6>
            <Checkbox
              label="Отображать в таблице"
              value={property.visibilityTable}
              onChange={(e) => {
                onClickRegistryColumnUpdate(
                  "visibilityTable",
                  e.target.checked
                );
              }}
            />
            <Checkbox
              label="Отображать в детальной информации"
              value={property.visibilityDetails}
              onChange={(e) => {
                onClickRegistryColumnUpdate(
                  "visibilityDetails",
                  e.target.checked
                );
              }}
            />
          </div>

          <Select
            options={[
              { id: 1, label: "Число", value: "number" },
              { id: 2, label: "Дата", value: "date" },
              { id: 3, label: "Строка", value: "string" },
              { id: 4, label: "Массив", value: "array" },
              { id: 5, label: "Номер телефона", value: "phone" },
            ]}
            value={property.type}
            onChange={(e) => {
              onClickRegistryColumnUpdate("type", e.target.value);
            }}
          />
          <Input
            label="Номер столбца в таблице"
            cols="6"
            type="number"
            value={property.order}
            onChange={(e) => {
              onClickRegistryColumnUpdate("order", e.target.value);
            }}
          />
          <Input
            label="Номер строки в детальке"
            cols="6"
            type="number"
            value={property.orderDetails}
            onChange={(e) => {
              onClickRegistryColumnUpdate("orderDetails", e.target.value);
            }}
          />
        </div>
      </form>

      <div className="collapse" id="collapseExample">
        <hr />
        <form className="row row-cols-2">
          <div className="row">
            <Input label="Параметр 1" />
            <Input label="Параметр 2" />
            <Input label="Параметр 3" />
            <Input label="Параметр 4" />
            <Input label="Параметр 5" />
            <Input label="Параметр 6" />
            <Input label="Параметр 7" />
            <Input label="Параметр 8" />
            <Input label="Параметр 9" />
            <Input label="Параметр 10" />
            <Input label="Параметр 11" />
            <Input label="Параметр 12" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SettingsRegistryColumn;
