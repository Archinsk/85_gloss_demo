function PreviewDetailsTab({ title, targetId, active }) {
  return (
    <li className="nav-item" role="presentation">
      <button
        className={`nav-link ${active ? "active" : ""}`}
        id={`pills-${targetId}-tab`}
        data-bs-toggle="pill"
        data-bs-target={`#pills-${targetId}`}
        type="button"
        role="tab"
        aria-controls={`pills-${targetId}`}
        aria-selected={active ? "true" : "false"}
      >
        {title}
      </button>
    </li>
  );
}

export default PreviewDetailsTab;
