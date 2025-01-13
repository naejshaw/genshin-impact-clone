contexto: 
Este projeto é um projeto de recriação do site do jogo Genshin Impact, um jogo de RPG de ação desenvolvido pela miHoYo. O objetivo é replicar a interface do zero para praticar os conhecimentos prévios em desenvolvimento web.

especificações:
```
{
  "name": "genshin-impact-clone",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "genshin-impact-clone": "file:",
    "next": "15.1.0",
    "react": "^19.0.0",
    "react-device-detect": "^2.2.3",
    "react-dom": "^19.0.0",
    "react-slick": "^0.30.2",
    "styled-components": "^6.1.13"
  },
  "devDependencies": {
    "@eslint/eslintrc": "^3",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "@types/react-slick": "^0.23.13",
    "eslint": "^9",
    "eslint-config-next": "15.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}

```

REGRAS: 
- Sempre que citar alguma dependência do projeto, deixe ela como hyperlink para a página oficial daquela dependência.
- Organize as dependências em uma sessão em formato de tabela