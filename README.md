# Sistema de Gerenciamento de Usuários

Este é um projeto desenvolvido com [Next.js](https://nextjs.org) que implementa um sistema de gerenciamento de usuários com funcionalidades de CRUD (Create, Read, Update, Delete).

## Funcionalidades

- 📋 Listagem de usuários com paginação
- ➕ Criação de novos usuários
- ✏️ Edição de usuários existentes
- 🗑️ Exclusão de usuários
- 🎨 Design system personalizado

## Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Superset JavaScript com tipagem estática
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [React Query](https://tanstack.com/query/latest) - Gerenciamento de estado e cache
- [Zod](https://zod.dev/) - Validação de schemas
- [React Hook Form](https://react-hook-form.com/) - Gerenciamento de formulários

## Como Executar

1. Clone o repositório:
```bash
git clone [url-do-repositorio]
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## Estrutura do Projeto

```
src/
├── app/                    # Páginas e rotas da aplicação
├── components/            # Componentes reutilizáveis
│   ├── tables/           # Componentes relacionados a tabelas
│   ├── users/            # Componentes relacionados a usuários
│   └── ui/               # Componentes de interface base
├── hooks/                # Hooks personalizados
├── lib/                  # Utilitários e configurações
├── schemas/              # Schemas de validação
└── types/                # Definições de tipos TypeScript
```


## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
