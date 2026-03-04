const { add, subtract, greet } = require('./utils');
// asda dasdasd asdasdasd asdfggfdhrthhrt
describe('add', () => {
  it('soma dois números positivos', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('soma números negativos', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  it('retorna zero quando ambos são zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('subtract', () => {
  it('subtrai dois números', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  it('lida com resultado negativo', () => {
    expect(subtract(3, 5)).toBe(-2);
  });
});

describe('greet', () => {
  it('retorna saudação com nome', () => {
    expect(greet('Marco')).toBe('Hello, Marco!');
  });

  it('remove espaços extras do nome', () => {
    expect(greet('  Maria  ')).toBe('Hello, Maria!');
  });

  it('retorna mensagem genérica quando nome é vazio', () => {
    expect(greet('')).toBe('Hello, stranger!');
  });

  it('retorna mensagem genérica quando nome é null/undefined', () => {
    expect(greet(null)).toBe('Hello, stranger!');
    expect(greet(undefined)).toBe('Hello, stranger!');
  });
});
