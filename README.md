<h1 align="center">
   <br/>
   <img
      src="./_docs/assets/icon.jpg"
      alt="Genshin Impact Logo"
      width="250"
   />
   <br/>
   <b>Genshin Impact Clone</b>
   <br/>
</h1>

## Descrição do Projeto
Este é um projeto de recriação do site do jogo **Genshin Impact**, um RPG de ação desenvolvido pela miHoYo. O objetivo deste projeto é replicar a interface do zero como forma de praticar e consolidar conhecimentos em desenvolvimento web utilizando tecnologias modernas como **Next.js**, **React**, e ferramentas de estilização como **Tailwind CSS** e **styled-components**.

## Funcionalidades
- Replicação da interface original do site do jogo.
- Design responsivo utilizando **styled-components** e **Tailwind CSS**.
- Carrosséis interativos com **React Slick**.
- Detecção de dispositivo com **React Device Detect** para adaptação do conteúdo.

## Tecnologias Utilizadas
| Categoria          | Dependência                                                                                     | Versão     |
|--------------------|------------------------------------------------------------------------------------------------|------------|
| Framework          | [Next.js](https://nextjs.org/)                                                                 | 15.1.0     |
| Biblioteca         | [React](https://reactjs.org/)                                                                  | ^19.0.0    |
| Biblioteca         | [React DOM](https://reactjs.org/docs/react-dom.html)                                           | ^19.0.0    |
| Biblioteca         | [React Slick](https://react-slick.neostack.com/)                                               | ^0.30.2    |
| Estilização        | [styled-components](https://styled-components.com/)                                            | ^6.1.13    |
| Detecção de Device | [React Device Detect](https://github.com/duskload/react-device-detect)                         | ^2.2.3     |
| Linter             | [ESLint](https://eslint.org/)                                                                  | ^9         |
| Configuração ESLint| [ESLint Config Next](https://nextjs.org/docs/basic-features/eslint)                             | 15.1.0     |
| Tipagem            | [TypeScript](https://www.typescriptlang.org/)                                                  | ^5         |
| CSS                | [Tailwind CSS](https://tailwindcss.com/)                                                       | ^3.4.1     |
| CSS                | [PostCSS](https://postcss.org/)                                                                | ^8         |

## Como Rodar o Projeto
### Pré-requisitos
- **Node.js** (versão 16 ou superior)
- **npm** ou **Yarn**

### Passo a Passo
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/genshin-impact-clone.git
   cd genshin-impact-clone
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
   O site estará disponível em [http://localhost:3000](http://localhost:3000).

4. Para rodar em produção:
   ```bash
   npm run build
   npm start
   # ou
   yarn build
   yarn start
   ```

5. Verifique o código com o linter:
   ```bash
   npm run lint
   # ou
   yarn lint
   ```

## Estrutura do Projeto
```plaintext
.
├── pages            # Páginas Next.js
├── components       # Componentes reutilizáveis do React
├── styles           # Estilos globais e específicos
├── public           # Arquivos estáticos
├── utils            # Funções utilitárias
└── package.json     # Configurações do projeto
```

## Como Contribuir
1. Faça um fork do repositório.
2. Crie uma branch para a sua feature:
   ```bash
   git checkout -b minha-nova-feature
   ```
3. Commit suas alterações:
   ```bash
   git commit -m "Adiciona nova feature"
   ```
4. Envie para a sua branch remota:
   ```bash
   git push origin minha-nova-feature
   ```
5. Abra um Pull Request na branch principal.

## Licença
Este projeto está sob a licença MIT.

## Contato
Para dúvidas ou sugestões, envie um e-mail para [seu-email@example.com](mailto:seu-email@example.com).