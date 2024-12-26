function PreviewTableColumn({
  property,
  operationValues,
  showAllTableColumns,
  selected,
  active,
  previewRole,
  onClickPreviewTableColumn,
  onClickRegistryColumnUpdate,
}) {
  return (
    <div
      className={`table-column ${selected ? "selected" : ""} ${active ? "active" : ""} ${!property.visibilityTable ? "hidden" : ""} ${!property.visibilityTable && !showAllTableColumns ? "d-none" : ""}`}
      onClick={onClickPreviewTableColumn}
    >
      <div className="table-head">
        {property.title}
        <div
          className={`material-icons ${showAllTableColumns ? "" : "d-none"}  ${property.visibilityTable ? "vis" : "invis"}`}
          onClick={(e) => {
            onClickRegistryColumnUpdate(
              "visibilityTable",
              !property.visibilityTable
            );
          }}
        >
          {property.visibilityTable ? "visibility" : "visibility_off"}
        </div>
      </div>
      {operationValues.map((item, index) => {
        if (property.name === "actions") {
          return (
            <div className="table-data" key={index}>
              {item[property.name].includes("edit") && (
                <span className="material-icons">edit</span>
              )}
              {item[property.name].includes("visibility") && (
                <span className="material-icons">visibility</span>
              )}
            </div>
          );
        } else {
          return (
            <div className="table-data" key={index}>
              {item[property.name]}
            </div>
          );
        }
      })}
    </div>
  );
}

export default PreviewTableColumn;
