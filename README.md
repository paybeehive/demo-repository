# Demo Repository

Repositório sandbox para treino de habilidades em Git, configuração de repositórios e CI/CD.

## Estrutura

- `index.html` — página web estática
- `src/utils.js` — módulo dummy com funções utilitárias (add, subtract, greet)
- `src/utils.test.js` — testes unitários com Jest
- `.github/workflows/` — workflows do GitHub Actions

## Pré-requisitos

- Node.js 22 ou superior

## Como rodar

```bash
# Instalar dependências
npm install

# Executar testes
npm test

# Executar testes em modo watch
npm run test:watch
```

## GitHub Actions

| Workflow      | Descrição                          |
|---------------|------------------------------------|
| Run Tests     | Executa os testes em push/PR       |
| Proof HTML    | Valida o HTML do projeto           |
| Auto Assign   | Atribui issues/PRs automaticamente |

## Licença

MIT
