import Button from '../../button/button';
import Popover from '../popover';

test('test popover close', () => {
  const body = document.querySelector('body');

  const popovers = new Popover();
  const button = new Button('Click me', body);
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
  button.buttonEl.click();
  button.buttonEl.click();
  const result = body.querySelector(popovers.popoverSel);

  expect(result).toBeNull();
});

test('test popover show', () => {
  const body = document.querySelector('body');

  const popovers = new Popover();
  const button = new Button('Click me', body);
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
  button.buttonEl.click();
  const result = body.querySelector(popovers.popoverSel);

  expect(result).not.toBeNull();
});
