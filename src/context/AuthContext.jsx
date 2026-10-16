import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('pulse_user')) || null; } catch { return null; }
  });
  useEffect(() => {
    if (user) localStorage.setItem('pulse_user', JSON.stringify(user));
    else localStorage.removeItem('pulse_user');
  }, [user]);

  // Demo-only authentication. Replace this with a real API and secure session/cookie.
  const login = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 350));
    if (!email.trim() || password.length < 4) throw new Error('Enter an email and a password of at least 4 characters.');
    const nextUser = { name: email.split('@')[0].replace(/[._-]/g, ' '), email };
    setUser(nextUser);
    return nextUser;
  };
  const logout = () => setUser(null);
  const value = useMemo(() => ({ user, login, logout }), [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}
