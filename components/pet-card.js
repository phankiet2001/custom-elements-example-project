import { createTemplate } from "./../core/createTemplate.js";

class PetCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // trigger shadow DOM to using DOM syntax with self
    this.shadowRoot.appendChild(
      createTemplate(`
        <div>
          <p>pet card: <span></span></p>
          <div>
              name: <slot name="name"></slot>
          </div>
        </div>
    `)
    ); // this line could be run by the shadow DOM was triggered
  }

  static get observedAttributes() {
    return ["name"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.querySelector("p span").innerText = ` ${this.getAttribute(
      "name"
    )}`;
  }
}

export default PetCard;
