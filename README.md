# Modern Developer Portfolio

Um portfólio digital moderno, limpo e impactante desenvolvido com React, Vite, Framer Motion e Three.js.

## 🚀 Características

- ✨ Design moderno com paleta deep black + neon pink
- 🎭 Animações suaves com Framer Motion
- 🎨 Elementos 3D interativos com Three.js
- 📱 Totalmente responsivo
- ⚡ Performance otimizada com Vite
- 🎯 Smooth scrolling com Lenis
- 🎪 Microinterações elegantes

## 🛠️ Tecnologias

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Framer Motion** - Animações
- **Three.js + React Three Fiber** - Elementos 3D
- **Lenis** - Smooth scrolling
- **Lucide React** - Ícones modernos

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build de produção
npm run preview
```

## 🎨 Personalização

Para personalizar o portfolio com suas informações:

1. **Informações pessoais**: Edite os componentes em `src/components/`
2. **Cores**: Modifique as variáveis CSS em `src/index.css`
3. **Projetos**: Atualize o array `projects` em `src/components/Projects.jsx`
4. **Habilidades**: Edite `skillsData` em `src/components/Skills.jsx`
5. **Conquistas**: Modifique `achievements` em `src/components/Achievements.jsx`
6. **Links sociais**: Atualize `socialLinks` em `src/components/Contact.jsx`

## 📂 Estrutura do Projeto

```
porti_google/
├── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── ScrollProgress.jsx
│   │   └── MouseFollower.jsx
│   ├── hooks/
│   │   ├── useMousePosition.js
│   │   └── useScrollAnimation.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎯 Seções

1. **Hero** - Apresentação inicial com elementos 3D
2. **Sobre** - História pessoal e estatísticas
3. **Habilidades** - Tecnologias e competências
4. **Projetos** - Showcase de trabalhos
5. **Conquistas** - Certificações e diferenciais
6. **Contato** - Links e CTA

## 📱 Responsividade

O portfolio é totalmente responsivo e otimizado para:
- Desktop (1920px+)
- Tablet (768px - 1919px)
- Mobile (< 768px)

## ⚡ Performance

- Lighthouse Score: 90+
- Animações 60fps
- Lazy loading de componentes 3D
- Otimização de imagens e assets

## 📄 Licença

Este projeto está sob a licença MIT.

---

Desenvolvido com ❤ e muito café ☕
