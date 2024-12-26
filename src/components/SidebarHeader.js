function SidebarHeader({ onCklickShowSettings }) {
  return (
    <div className="sidebar-header d-flex justify-content-between tile mb-3">
      <h4 className="mb-0">Редактор реестров</h4>
      <div className="dropdown">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="material-icons">settings</span>
        </a>

        <ul className="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              href="#"
              onClick={onCklickShowSettings}
            >
              Настройки приложения
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Выйти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SidebarHeader;
