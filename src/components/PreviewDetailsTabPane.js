function PreviewDetailsTabPane({
  id,
  active,
  items,
  operationProperties,
  operationValues,
  selectedProperty,
  selectedRegistryPropertyId,
  selectedPreviewPart,
  onClickPreviewDetailsTabRow,
}) {
  const tableRows = items
    .sort((a, b) => {
      return a.order - b.order;
    })
    .map((item) => {
      const property = operationProperties.find(
        (prop) => prop.name === item.propertyName
      );
      return (
        <tr
          key={property.name}
          className={`${property.name === selectedRegistryPropertyId ? "selected" : ""} ${property.name === selectedRegistryPropertyId && selectedPreviewPart === "tab-row" ? "active" : ""}`}
          onClick={() => {
            onClickPreviewDetailsTabRow(id, property.name);
          }}
        >
          <td>{property.title}</td>
          <td>{operationValues[0][property.name]}</td>
        </tr>
      );
    });

  return (
    <div
      className={`tab-pane fade ${active ? "active show" : ""}`}
      id={`pills-${id}`}
      role="tabpanel"
      aria-labelledby={`pills-${id}-tab`}
      tabIndex="0"
    >
      <div className="table-responsive">
        <table className="table table-borderless table-hover">
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    </div>
  );
}

export default PreviewDetailsTabPane;
