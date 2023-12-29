import './css/button.css';

import createElement from '../createElement/createElement';

export default class Button {
  constructor(text, parent) {
    if (typeof (parent) === 'string') {
      this.parent = document.querySelector(parent);
    } else {
      this.parent = parent;
    }
    this.text = text;
    this.create();
  }

  get buttonSel() {
    return '.btn';
  }

  create() {
    this.buttonEl = createElement({
      name: 'button',
      classes: [this.buttonSel],
      text: this.text,
    });
  }

  clickEvent(callback) {
    this.buttonEl.addEventListener('click', callback);
  }

  bindToDOM() {
    this.parent.appendChild(this.buttonEl);
  }
}
