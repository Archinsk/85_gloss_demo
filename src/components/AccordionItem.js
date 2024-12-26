function AccordionItem({ children, id, label }) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header">
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          {label}
        </button>
      </h2>
      <div
        id={id}
        class="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
