import Button from './button/button';
import createElement from './createElement/createElement';
import Popover from './popover/popover';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const wrapper = createElement({
    name: 'div',
    classes: ['wrapper'],
  });
  body.appendChild(wrapper);

  const popovers = new Popover();
  const button = new Button('Click me', wrapper);
  button.bindToDOM();
  const onClick = (e) => {
    const { id } = e.target.dataset;

    if (id) {
      popovers.remove(id);
      e.target.removeAttribute('data-id');
      return;
    }

    const popOptions = {
      title: 'Popover title',
      descr: 'And here\'s some amazing content. It\'s very engaging. Right?',
    };
    popovers.showPopover(popOptions, e.target);
  };

  button.clickEvent(onClick);
});
