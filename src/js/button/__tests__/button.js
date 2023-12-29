import Button from '../button';

test('test create button', () => {
  const body = document.querySelector('body');
  const btn = new Button('New button', body);
  btn.bindToDOM();
  const result = body.querySelector(btn.buttonSel);
  expect(result).not.toBeNull();
});

test('test click event add', () => {
  const body = document.querySelector('body');
  const btn = new Button('New button', body);
  btn.bindToDOM();

  let counter = 0;

  const onClick = () => {
    counter += 1;
  };

  btn.clickEvent(onClick);
  btn.buttonEl.click();

  expect(counter).toBe(1);
});
