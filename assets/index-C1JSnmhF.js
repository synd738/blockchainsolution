if (!customElements.get('w3m-modal')) {
  class W3mModal extends HTMLElement {
    connectedCallback() {
      // Minimal stub to satisfy dynamic import side effects.
    }
  }
  customElements.define('w3m-modal', W3mModal);
}

export {};
