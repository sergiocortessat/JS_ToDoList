import { myCreate, myQuery, myAppend } from '../js/myQueriesForTest';

describe('My Query', () => {
  test('Should return the selected p tag', () => {
    const pTag = myQuery('p');
    expect(pTag).not.toBe(null);
  });

  test('Should return the selected div tag', () => {
    const divTag = myQuery('div');
    expect(divTag).toBeDefined();
  });
  test('Should return the selected div, p tag content', () => {
    const divClassTag = myQuery('.test');
    expect(divClassTag.textContent).toBe('test');
  });
});

describe('My Query', () => {
  test('Should return the selected p tag', () => {
    const pTag = myQuery('p');
    expect(pTag).not.toBe(null);
  });

  test('Should return the selected div tag', () => {
    const divTag = myQuery('div');
    expect(divTag).toBeDefined();
  });
  test('Should return the selected div, p tag content', () => {
    const divClassTag = myQuery('.test');
    expect(divClassTag.textContent).toBe('test');
  });
});

describe('My Create', () => {
  test('Should return the selected h tag', () => {
    const hTag = myCreate('h1');
    expect(hTag).toBeDefined();
  });

  test('Should return the created div tag', () => {
    const divTag = myCreate('div');
    divTag.textContent = 'test';
    expect(divTag.textContent).toBe('test');
  });
  test('Should return the created div, with a created h tag content', () => {
    const divClassTag = myCreate('div');
    const tempH = myCreate('h1');
    tempH.textContent = 'test h1';
    divClassTag.appendChild(tempH);
    expect(divClassTag.textContent).toBe('test h1');
  });
});

describe('My Append', () => {
  const innerDom = myQuery('.test');

  test('Should return the appended form tag', () => {
    const formTag = myCreate('form');
    formTag.classList.add('testForm');
    myAppend('.test', formTag);
    expect(innerDom.querySelector('testForm')).toBeDefined();
  });

  test('Should return the appended div tag', () => {
    const divTag = myCreate('div');
    divTag.classList.add('.test2');
    const hTag = myCreate('h2');
    hTag.textContent = 'testDiv';
    // myAppend('.test2', hTag);
    divTag.appendChild(hTag);
    myAppend('.test', hTag);

    expect(innerDom.querySelector('.test2')).toBeDefined();
  });
  test('Should return the created div, with a created h tag content', () => {
    const divClassTag = myCreate('div');
    const tempH = myCreate('h1');
    tempH.textContent = 'test h1';
    divClassTag.appendChild(tempH);
    innerDom.appendChild(divClassTag);
    expect(innerDom.querySelector('h1').textContent).toBe('test h1');
  });
});