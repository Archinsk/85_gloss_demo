function PreviewDetailMainRow({
  property,
  operationValues,
  showAllDetailsMainRows,
  selected,
  active,
  onClickPreviewDetailsMainRow,
  onClickRegistryColumnUpdate,
}) {
  return (
    <tr
      className={`${selected ? "selected" : ""} ${active ? "active" : ""} ${!property.visibilityDetails ? "hidden" : ""} ${!property.visibilityDetails && !showAllDetailsMainRows ? "d-none" : ""}`}
      onClick={onClickPreviewDetailsMainRow}
    >
      <td>
        {property.title}
        <div
          className={`material-icons ${property.visibilityDetails ? "vis" : "invis"} ${showAllDetailsMainRows ? "" : "d-none"}`}
          onClick={() => {
            onClickRegistryColumnUpdate(
              "visibilityDetails",
              !property.visibilityDetails
            );
          }}
        >
          {property.visibilityDetails ? "visibility" : "visibility_off"}
        </div>
      </td>
      {property.name !== "actions" && (
        <td>{operationValues[0][property.name]}</td>
      )}
      {property.name === "actions" && (
        <td>
          {operationValues[0][property.name].includes("edit") && (
            <span className="material-icons">edit</span>
          )}
          {operationValues[0][property.name].includes("visibility") && (
            <span className="material-icons">visibility</span>
          )}
        </td>
      )}
    </tr>
  );
}

export default PreviewDetailMainRow;
