/**
 * Módulo dummy para demonstração de testes.
 * Funções utilitárias simples para treino de Git e CI/CD.
 */

/**
 * Soma dois números.
 * @param {number} a - Primeiro número
 * @param {number} b - Segundo número
 * @returns {number} Soma de a + b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtrai o segundo número do primeiro.
 * @param {number} a - Minuendo
 * @param {number} b - Subtraendo
 * @returns {number} Resultado de a - b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Gera uma saudação personalizada.
 * @param {string} name - Nome da pessoa
 * @returns {string} Mensagem de saudação
 */
function greet(name) {
  if (!name || typeof name !== 'string') {
    return 'Hello, stranger!';
  }
  return `Hello, ${name.trim()}!`;
}

module.exports = { add, subtract, greet };
