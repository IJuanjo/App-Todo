# 📝 Node.js Todo App - Architecture Comparison

A monorepo project that implements the same TODO application using different architectural patterns to compare and learn the differences between each approach.

## 🏗️ Implemented Architectures

| Architecture | Description | Folder |
|-------------|-------------|---------|
| **MVC** | Model-View-Controller | `architectures/mvc/` |
| **MVVM** | Model-View-ViewModel | `architectures/mvvm/` |
| **Clean Architecture** | Onion Architecture with well-defined layers | `architectures/clean-architecture/` |
| **Hexagonal** | Ports and Adapters pattern | `architectures/hexagonal/` |

## 🚀 Features

- ✅ **Monorepo** with multiple implementations
- ✅ **Shared template engine** (EJS)
- ✅ **Same functionality** implemented in different architectures
- ✅ **Management with pnpm workspaces**
- ✅ **Direct comparison** of architectural patterns

## 📁 Project Structure

```
node-mvc-app-todo/
├── 📄 package.json              # Main monorepo configuration
├── 📄 pnpm-workspace.yaml       # pnpm workspace configuration
├── 📄 .gitignore               # Files and folders ignored by Git
├── 📄 README.md                # This file
├── 📁 shared/                  # Shared resources
│   └── 📁 views/               # Shared EJS templates
│       ├── 📁 layouts/         # Main layouts
│       ├── 📁 partials/        # Reusable components
│       └── 📁 pages/           # Specific pages
└── 📁 architectures/           # Architectural implementations
    ├── 📁 mvc/                 # MVC Architecture
    │   ├── 📄 package.json
    │   ├── 📄 app.js
    │   ├── 📁 controllers/     # Controllers
    │   ├── 📁 models/          # Data models
    │   └── 📁 routes/          # Route definitions
    ├── 📁 mvvm/                # MVVM Architecture
    │   ├── 📄 package.json
    │   ├── 📄 app.js
    │   ├── 📁 viewmodels/      # ViewModels
    │   └── 📁 models/          # Data models
    ├── 📁 clean-architecture/  # Clean Architecture
    │   ├── 📄 package.json
    │   ├── 📄 app.js
    │   ├── 📁 domain/          # Entities and business rules
    │   ├── 📁 application/     # Use cases
    │   ├── 📁 infrastructure/  # Data access and external
    └── 📁 hexagonal/           # Hexagonal Architecture
        ├── 📄 package.json
        ├── 📄 app.js
        ├── 📁 domain/          # Core business logic
        ├── 📁 ports/           # Interfaces (ports)
        ├── 📁 adapters/        # Implementations (adapters)
        └── 📁 application/     # Application services
```

## 🛠️ Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **EJS** - Template engine
- **pnpm** - Package manager and workspaces
- **nodemon** - Auto-restart in development

## 📋 Prerequisites

- Node.js (v18 or higher)
- pnpm (v8 or higher)

```bash
# Install pnpm globally
npm install -g pnpm
```

## 🚀 Installation and Usage

### 1. Clone the repository
```bash
git clone <repository-url>
cd node-mvc-app-todo
```

### 2. Install dependencies
```bash
# Install all monorepo dependencies
pnpm install
```

### 3. Run a specific architecture

```bash
# Run MVC architecture
cd architectures/mvc
pnpm dev

# Run MVVM architecture
cd architectures/mvvm
pnpm dev

# Run Clean architecture
cd architectures/clean-architecture
pnpm dev

# Run Hexagonal architecture
cd architectures/hexagonal
pnpm dev
```

### 4. Run from root (coming soon)
```bash
# Scripts to run from project root
pnpm dev:mvc
pnpm dev:mvvm
pnpm dev:clean
pnpm dev:hexagonal
```

## 🎯 TODO App Features

- ✅ **Create** new tasks
- ✅ **List** all tasks
- ✅ **Mark** tasks as completed
- ✅ **Edit** existing tasks
- ✅ **Delete** tasks
- ✅ **Filter** by status (completed/pending)

## 🏛️ Architecture Comparison

### MVC (Model-View-Controller)
**Advantages:**
- Simple and widely known pattern
- Clear separation of responsibilities
- Easy to understand for beginners

**Disadvantages:**
- Can become complex in large applications
- Coupling between Controller and View

### MVVM (Model-View-ViewModel)
**Advantages:**
- Better separation between logic and presentation
- ViewModels facilitate testing
- More elegant data binding

**Disadvantages:**
- Higher learning curve
- Can be over-engineering for simple apps

### Clean Architecture
**Advantages:**
- Independence from frameworks and UI
- Highly testable
- Protected business rules

**Disadvantages:**
- Higher initial complexity
- More boilerplate code

### Hexagonal Architecture
**Advantages:**
- Completely isolated business logic
- Easy adapter swapping
- Excellent for testing

**Disadvantages:**
- Steep learning curve
- Can seem like over-engineering

## 🧪 Testing

```bash
# Run tests in all architectures
pnpm test:all

# Run tests in a specific architecture
pnpm --filter mvc-todo test
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📚 Learning Resources

### MVC
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MVC Pattern Explained](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

### MVVM
- [MVVM Pattern](https://docs.microsoft.com/en-us/xamarin/xamarin-forms/enterprise-application-patterns/mvvm)

### Clean Architecture
- [Clean Architecture by Uncle Bob](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Implementing Clean Architecture](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together/)

### Hexagonal Architecture
- [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [Ports and Adapters](https://jmgarridopaz.github.io/content/hexagonalarchitecture.html)

## 📄 License

This project is under the ISC License. See the `LICENSE` file for more details.

## ✨ Author

Developed as an educational project to compare different architectural patterns in Node.js.

---

## 🔄 Upcoming Features

- [ ] Implement database persistence
- [ ] Add user authentication
- [ ] Implement REST API
- [ ] Add unit and integration tests
- [ ] Dockerize each architecture
- [ ] Add API documentation with Swagger
- [ ] Implement logging and monitoring
