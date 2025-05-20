# FGO24 React Todo App

![Project Banner](https://raw.githubusercontent.com/riezaekatomara/fgo24-react-todo/main/public/banner.png)

> A sleek, modern Todo application built with React, Tailwind CSS, and Vite

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

## ✨ Features

- 📝 Create, read, update, and delete todos
- ✅ Mark todos as completed
- 🔍 Filter todos by status (All, Active, Completed)
- 💾 Persistent storage using local storage
- 📱 Fully responsive design
- 🌙 Dark mode support
- ⚡ Lightning-fast performance with Vite

## 🖥️ Screenshots

### Desktop View
![Desktop View](https://raw.githubusercontent.com/riezaekatomara/fgo24-react-todo/main/screenshots/desktop.png)

### Mobile View
![Mobile View](https://raw.githubusercontent.com/riezaekatomara/fgo24-react-todo/main/screenshots/mobile.png)

## 🚀 Demo

Check out the live demo: [FGO24 React Todo App](https://fgo24-react-todo.vercel.app/)

## 📋 Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js 18.x or higher
- npm or yarn package manager

## 🛠️ Installation

1. Clone the repository:

```bash
git clone https://github.com/riezaekatomara/fgo24-react-todo.git
cd fgo24-react-todo
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Start the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Building for Production

To build the app for production, run:

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
fgo24-react-todo/
├── public/             # Public assets
├── src/                # Source files
│   ├── assets/         # Static assets
│   ├── components/     # React components
        TodoForm.jsx
        TodoItem.jsx
        TodoList.jsx
        TodoStats.jsx
│   ├── contexts/       # React contexts
        TodoContext.jsx
│   ├── pages/          # Main pages
        AboutPage.jsx
        DetailPage.jsx
        HomePage.jsx
        NotFoundPage.jsx
│   ├── main.jsx        # Entry point
│   └── rounter.jsx     # Routing
├── .eslintrc.cjs       # ESLint configuration
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🧰 Technologies Used

- **React**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Next-generation frontend tooling
- **Local Storage API**: For persistent data storage
- **React Icons**: Popular icon library for React applications

## ⚙️ Configuration

You can customize the Tailwind configuration by editing the `tailwind.config.js` file.

## 📋 To-Do

- [ ] Add user authentication
- [ ] Implement cloud syncing
- [ ] Add due dates and reminders
- [ ] Create task categories
- [ ] Enable drag-and-drop reordering

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/riezaekatomara/fgo24-react-todo/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Rieza Ekatomara**

- GitHub: [@riezaekatomara](https://github.com/riezaekatomara)
- LinkedIn: [Rieza Ekatomara](https://linkedin.com/in/riezaekatomara)

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- All the contributors and supporters of this project

---

Made with ❤️ by Rieza Ekatomara
