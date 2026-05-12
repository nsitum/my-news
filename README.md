# News App

A responsive news application built with React, TypeScript and Vite.

The application allows users to browse news by category, search articles, view latest headlines and manage favorite articles. The project was built with a strong focus on responsive UX, reusable components and clean architecture.

## Setup

### Clone the repository

```bash
git clone https://github.com/nsitum/my-news
cd my-news
```

### Install dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root of the project and copy the contents from `.env.example`.

Provide the required API keys:

- NewsAPI: https://newsapi.org
- New York Times API: https://developer.nytimes.com

### Run Commands

#### Start the development server

```bash
npm run dev
```

#### Run tests

```bash
npm run test
```

#### Run ESLint

```bash
npm run lint
```

## Design Decisions

- The project was built using a mobile-first approach with reusable UI components and a layout structure designed to keep responsive behavior predictable and maintainable. Shared components such as Navbar, Tabs, Search and Menu were separated from feature-specific UI to improve scalability and readability.

- Search behavior was intentionally separated between mobile and desktop devices to provide a more suitable UX for each platform. Mobile search uses debounced live searching for faster browsing, while desktop search uses manual submission to give users more control while typing.

- Favorites functionality was implemented using localStorage together with React Context to provide lightweight global state management and instant UI updates across the application without introducing unnecessary complexity.

- The Latest News section was implemented using infinite scrolling to provide a smoother browsing experience and reduce the need for manual pagination. Additional articles are loaded progressively as the user scrolls, keeping the interface lightweight and focused on continuous content consumption.
