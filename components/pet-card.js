const template = document.createElement("template");

template.innerHTML = `
    <p>pet card: <span></span></p>
    <div>
        name: <slot name="name"></slot>
    </div>
`;

class PetCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // trigger shadow DOM to using DOM syntax with self
    this.shadowRoot.appendChild(template.content.cloneNode(true)); // this line could be run by the shadow DOM was triggered
  }

  static get observedAttributes() {
    return ["name", "hehe"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.shadowRoot.querySelector("p span").innerText = ` ${this.getAttribute("name")}`;
  }
}

export default PetCard;
