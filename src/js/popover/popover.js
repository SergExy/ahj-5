import './css/popover.css';

import createElement from '../createElement/createElement';

export default class Popover {
  constructor() {
    this.popovers = [];
  }

  get popoverSel() {
    return '.popover';
  }

  get popoverArrowSel() {
    return '.popover__arrow';
  }

  get popoverTitleSel() {
    return '.popover__title';
  }

  get popoverDescrSel() {
    return '.popover__descr';
  }

  showPopover(popOptions, element) {
    const id = performance.now();
    const { title, descr } = popOptions;

    const popoverEl = createElement({
      name: 'div',
      id,
      classes: [this.popoverSel],
    });
    const popoverArrowEl = createElement({
      name: 'div',
      classes: [this.popoverArrowSel],
    });
    const popoverTitleEl = createElement({
      name: 'div',
      classes: [this.popoverTitleSel],
      text: title,
    });
    const popoverDescrEl = createElement({
      name: 'div',
      classes: [this.popoverDescrSel],
      text: descr,
    });
    popoverEl.appendChild(popoverArrowEl);
    popoverEl.appendChild(popoverTitleEl);
    popoverEl.appendChild(popoverDescrEl);

    this.popovers.push(popoverEl);

    const popoverFor = element;
    popoverFor.dataset.id = id;

    document.querySelector('body').appendChild(popoverEl);

    const { top, left } = element.getBoundingClientRect();
    popoverArrowEl.style.left = `${popoverEl.offsetWidth / 2}px`;
    popoverEl.style.top = `calc(${top - popoverEl.offsetHeight}px - 0.5rem)`;
    popoverEl.style.left = `${left + element.offsetWidth / 2 - popoverEl.offsetWidth / 2}px`;
  }

  remove(id) {
    const popover = this.popovers.find((item) => id === item.id);
    popover.remove();

    this.popovers = this.popovers.filter((item) => id !== item.id);
  }
}
