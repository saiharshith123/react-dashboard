# Pulse Dashboard

A responsive, multi-page React dashboard built with React, React Router, Context API, client-side state management, authentication flow, and server-side data fetching.

## Features

- **Dashboard overview** — summary cards, workspace activity chart, and recent activity.
- **Multi-page navigation** — Overview, Users, and My Profile pages using React Router.
- **Authentication context** — shared login/logout state using React Context.
- **Protected routes** — prevent unauthenticated users from accessing protected pages.
- **Server-side data fetching** — fetch sample user data from the JSONPlaceholder REST API.
- **User search** — filter the users list by matching user information.
- **Responsive layout** — dashboard styling for desktop and smaller screens.
- **Refresh controls** — reload data on supported dashboard views.

> **Demo note:** Authentication is for demonstration only. The sample login does not verify credentials against a real server. Dashboard metrics such as revenue and engagement may be static sample values. Do not use this authentication flow to protect production data.

## Tech Stack

| Technology | Purpose |
|---|---|
| React | Component-based user interface |
| Vite | Development server and build tool |
| React Router | Client-side routing and navigation |
| Context API | Shared authentication state |
| React Hooks (`useState`, `useEffect`, `useMemo`) | Component state, effects, and derived data |
| Fetch API | HTTP requests to a REST API |
| CSS | Dashboard layout, styling, and responsiveness |
| JSONPlaceholder | Public demo API for sample user data |

## Pages

- **Login** — demo sign-in screen.
- **Overview** — dashboard metrics, activity visualization, and recent activity.
- **Users** — API-loaded user list with search/filtering.
- **My Profile** — displays the current demo account information.

## Project Structure

```text
react-dashboard/
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── context/
    │   └── AuthContext.jsx
    ├── components/
    │   ├── Layout.jsx
    │   ├── ProtectedRoute.jsx
    │   └── StatCard.jsx
    └── pages/
        ├── Login.jsx
        ├── Overview.jsx
        ├── Users.jsx
        └── Profile.jsx
```

*The exact structure may differ slightly depending on the files in your local project.*

## Prerequisites

Install the following before running the application:

- [Node.js](https://nodejs.org/) (a current LTS version is recommended)
- npm (included with Node.js)
- A modern web browser
- Internet access for JSONPlaceholder API requests

Check your installations:

```bash
node --version
npm --version
```

## Installation and Setup

1. Clone your repository or download and extract the project ZIP.
2. Open a terminal in the project directory.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Vite development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in the terminal. Vite commonly uses:

   ```text
   http://localhost:5173
   ```

## Demo Login

The sample project may provide prefilled demo credentials:

- **Email:** `demo@example.com`
- **Password:** `demo1234`

If these are not prefilled in your current version, use the values or validation rules shown in `src/pages/Login.jsx`. In the demo implementation, login may only check basic form input and does not authenticate against a backend.

## How Data Fetching Works

The Users page can request sample data from JSONPlaceholder:

```text
https://jsonplaceholder.typicode.com/users
```

A typical request uses the browser Fetch API:

```js
const response = await fetch("https://jsonplaceholder.typicode.com/users");

if (!response.ok) {
  throw new Error("Failed to fetch users");
}

const users = await response.json();
```

Handle loading and error states in the component so the user receives feedback if the request fails. The API requires internet access and is intended for demonstrations, not as a production database.

## Available Scripts

The scripts depend on `package.json`. A standard Vite React project usually supports:

```bash
npm run dev       # Start development server
npm run build     # Create production build
npm run preview   # Preview production build locally
```

## Testing Checklist

- [ ] The application starts without Vite or JSX errors.
- [ ] Login accepts the demo input according to the current validation rules.
- [ ] Protected routes redirect when the user is logged out.
- [ ] Logout clears the current authentication state.
- [ ] Overview and Users pages load successfully.
- [ ] User search filters the fetched list.
- [ ] Loading and API error states are displayed appropriately.
- [ ] Navigation and layout work at desktop and mobile widths.
- [ ] `npm run build` completes successfully.

## Troubleshooting

### Vite or JSX parse errors

- Check that JSX tags are correctly nested and closed.
- Remove any extra braces or stray characters.
- Save the file and restart Vite if the error persists.

### API data does not load

- Check your internet connection.
- Open the JSONPlaceholder endpoint in your browser.
- Check the browser DevTools Console and Network tab for errors.
- Confirm the component handles failed requests and loading states.

### Dependency or package errors

```bash
npm install
npm run dev
```

If an error persists, review the exact error output and your installed Node.js version before deleting lock files or reinstalling packages.

## Production Improvements

Before using this dashboard in a real application:

1. Implement backend authentication with secure session handling or appropriately configured tokens.
2. Enforce authorization on the server; frontend route guards alone do not secure APIs.
3. Replace demo credentials and static metrics with backend endpoints.
4. Add robust loading, error, and empty states.
5. Add tests for authentication, routing, data fetching, and search.
6. Configure environment variables for API base URLs where appropriate.
7. Review accessibility, logging, security headers, and deployment settings.

## Future Enhancements

- Real analytics charts and date-range filters
- Backend authentication and role-based access control
- CRUD operations for users
- Theme toggle (light/dark)
- Notifications and user preferences
- Unit and integration tests

## License

This project is intended for learning and demonstration. Add a license file if you plan to distribute it publicly.
