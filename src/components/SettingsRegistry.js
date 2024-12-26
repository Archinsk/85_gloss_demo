import { useState } from "react";
import Input from "./Input";
import Checkbox from "./Checkbox";

function SettingsRegistry({
  updatedRegistries,
  updatedRegistriesData,
  selectedRegistryId,
  onClickRegistryDelete,
  onClickRegistryClone,
  onClickRegistryUpdate,
}) {
  const registry = updatedRegistries.find(
    (item) => item.id === selectedRegistryId
  );
  const registryData = updatedRegistriesData.find(
    (item) => item.registry === selectedRegistryId
  );
  const [showCollapse, setShowCollapse] = useState(false);
  if (!registry) return;
  return (
    <div className="settings-table">
      <div className="d-flex justify-content-between">
        <h4>Общие настройки реестра</h4>
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
                onClick={onClickRegistryClone}
              >
                Клонировать реестр
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                href="#"
                onClick={onClickRegistryDelete}
              >
                Удалить реестр
              </a>
            </li>
          </ul>
        </div>
      </div>
      <form>
        <div className="row">
          <Input
            label="Наименование"
            value={registry.title}
            cols="6"
            onChange={(e) => {
              onClickRegistryUpdate("title", e.target.value);
            }}
          />
          <Input
            label="Идентификатор (не работает в демо-версии)"
            value={registry.id}
            cols="6"
          />
          <div className="col-6">
            <h6 className="mb-3">Роли</h6>
            <Checkbox
              label="Администратор"
              value={registry.roles.includes("admin")}
              onChange={() => {
                onClickRegistryUpdate("roles", "admin");
              }}
            />
            <Checkbox
              label="Оператор"
              value={registry.roles.includes("operator")}
              onChange={() => {
                onClickRegistryUpdate("roles", "operator");
              }}
            />
            <Checkbox
              label="Продавец"
              value={registry.roles.includes("manager")}
              onChange={() => {
                onClickRegistryUpdate("roles", "manager");
              }}
            />
            <Checkbox
              label="Гость"
              value={registry.roles.includes("guest")}
              onChange={() => {
                onClickRegistryUpdate("roles", "guest");
              }}
            />
          </div>
          <div className="col-6">
            <h6 className="mb-3">Действия</h6>
            {registry.actions.map((action, index) => {
              return (
                <Checkbox
                  label={`Показать "${action.title}"`}
                  value={action.visibility}
                  key={index}
                  onChange={(e) => {
                    console.log(e);
                    onClickRegistryUpdate(
                      "actions",
                      e.target.checked,
                      index,
                      "visibility"
                    );
                  }}
                />
              );
            })}
          </div>
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

export default SettingsRegistry;
