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

# Lint
npm run lint

# Executar testes
npm test

# Build
npm run build

# Testes em modo watch (desenvolvimento)
npm run test:watch
```

## GitHub Actions

| Workflow    | Descrição                                      |
|-------------|------------------------------------------------|
| CI          | Lint, testes e build em push/PR                |
| Proof HTML  | Valida o HTML do projeto                       |
| Auto Assign | Atribui issues/PRs ao autor automaticamente   |

## Licença

MIT
