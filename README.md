# Pulse Dashboard — React Router + Context API

A responsive multi-page dashboard demonstrating client-side routing, shared authentication state, protected routes, state management with React hooks, and API data fetching.

## Features
- **React Router:** Overview, Users, Profile, and Login pages.
- **Context API:** Shared login/logout state through `AuthContext`.
- **Protected routes:** Dashboard pages redirect unauthenticated visitors to Login.
- **State management:** `useState`, `useEffect`, and `useMemo` manage UI, API loading/error states, and user filtering.
- **API fetching:** Reads demo users from JSONPlaceholder (`https://jsonplaceholder.typicode.com/users`).
- **Responsive UI:** Sidebar navigation, summary cards, activity chart, searchable users table, and profile settings.
- **Demo authentication:** Prefilled demo credentials; any email plus a password of at least four characters works.

## Requirements
- Node.js 18+ recommended
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
react-dashboard/
├── index.html
├── package.json
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── styles.css
    ├── components/
    │   ├── Layout.jsx
    │   ├── ProtectedRoute.jsx
    │   └── StatCard.jsx
    ├── context/
    │   └── AuthContext.jsx
    └── pages/
        ├── Login.jsx
        ├── Overview.jsx
        ├── Users.jsx
        └── Profile.jsx
```

## How it works
1. `main.jsx` wraps the app in `BrowserRouter` and `AuthProvider`.
2. `AuthContext.jsx` exposes `user`, `login`, and `logout` to any component using `useAuth()`.
3. `ProtectedRoute.jsx` checks whether a user is signed in and redirects to `/login` if not.
4. `App.jsx` declares the routes; `Layout.jsx` supplies the shared sidebar and header.
5. `Overview.jsx` and `Users.jsx` fetch API data in `useEffect`, and handle loading/error states.
6. The Users page filters API results as the search input changes.

## Important security note
This is a learning/demo project, **not production authentication**. The login function accepts any email and password of at least four characters, and the demo user is persisted in `localStorage`. Client-side route protection is not a security boundary. For production, authenticate against a backend, validate authorization on every protected API request, use secure HttpOnly/SameSite cookies or an equivalent secure session strategy, and never trust client-provided roles or profile data.

## Data source
User directory data comes from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users), a public fake REST API. Dashboard metrics and chart values are illustrative demo values.
