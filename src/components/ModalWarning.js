import { useState } from "react";

function ModalWarning({
  show,
  isEditingSettings,
  selectedRegistryId,
  selectedPreviewPart,
  selectedRegistryPropertyId,
  onDetectTransitionWithoutSaving,
  onSaveModalWarning,
  onNoSaveModalWarning,
  onCancelModalWarning,
}) {
  const [previousSelectedRegistryId, setPreviousSelectedRegistryId] =
    useState(null);
  const [previousSelectedPreviewPart, setPreviousSelectedPreviewPart] =
    useState(null);
  const [
    previousSelectedRegistryPropertyId,
    setPreviousSelectedRegistryPropertyId,
  ] = useState(null);
  const [targetObject, setTargetObject] = useState({});

  if (selectedRegistryId !== previousSelectedRegistryId) {
    if (isEditingSettings) {
      onDetectTransitionWithoutSaving();
    } else {
      setPreviousSelectedRegistryId(selectedRegistryId);
    }
  }

  if (selectedPreviewPart !== previousSelectedPreviewPart) {
    setPreviousSelectedPreviewPart(selectedPreviewPart);
    if (isEditingSettings) {
      onDetectTransitionWithoutSaving();
    }
  }

  if (
    selectedRegistryPropertyId !== previousSelectedRegistryPropertyId &&
    isEditingSettings
  ) {
    setPreviousSelectedRegistryPropertyId(selectedRegistryPropertyId);
    if (isEditingSettings) {
      onDetectTransitionWithoutSaving();
    }
  }

  return (
    <div className={`backdrop${show ? "" : " d-none"}`}>
      <div className="modal position-static d-block">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Предупреждение</h5>
              <button
                className="btn-close"
                onClick={() => {
                  onCancelModalWarning({
                    previousSelectedRegistryId: previousSelectedRegistryId,
                  });
                }}
              ></button>
            </div>
            <div className="modal-body">
              Вы не сохранили изменения. При переходе к редактированию другого
              элемента текущие изменения будут сброшены
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-success"
                onClick={() => {
                  onSaveModalWarning({ targetObject });
                }}
              >
                Сохранить
              </button>
              <button className="btn btn-danger">Перейти, не сохраняя</button>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  onCancelModalWarning({
                    previousSelectedRegistryId: previousSelectedRegistryId,
                  });
                }}
              >
                Вернуться к редактированию
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalWarning;
