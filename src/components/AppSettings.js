import Input from "./Input";
import Select from "./Select";

function AppSettings({ url, theme, onChangeAppSettings, onClickResetApp }) {
  const options = [
    { id: 0, value: "white", label: "Белая" },
    { id: 1, value: "grey", label: "Серая" },
    { id: 2, value: "green", label: "Зеленая" },
    { id: 3, value: "blue", label: "Синяя" },
    { id: 4, value: "violet", label: "Фиолетовая" },
  ];
  return (
    <div className="app-settings tile mb-3">
      <h4>Настройки приложения</h4>
      <form>
        <div className="row">
          <Input
            id="url"
            label="Адрес сервера"
            value={url}
            cols="6"
            onChange={(e) => {
              onChangeAppSettings("url", e.target.value);
            }}
          />
          <Select
            id="theme"
            label="Тема"
            value={theme}
            cols="6"
            options={options}
            onChange={(e) => {
              onChangeAppSettings("theme", e.target.value);
            }}
          />
        </div>
      </form>
      <button className="btn btn-primary" onClick={onClickResetApp}>
        Сбросить приложение
      </button>
    </div>
  );
}

export default AppSettings;
