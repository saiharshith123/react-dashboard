import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { Activity, LayoutDashboard, Users, UserRound, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export default function Layout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { to: '/', label: 'Overview', icon: LayoutDashboard, end: true },
    { to: '/users', label: 'Users', icon: Users },
    { to: '/profile', label: 'My profile', icon: UserRound },
  ];
  const signOut = () => { logout(); navigate('/login'); };
  return <div className="app-shell">
    <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><span className="brand-icon"><Activity size={20}/></span><span>pulse<span className="brand-dot">.</span></span><button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu"><X size={20}/></button></div>
      <div className="nav-caption">WORKSPACE</div>
      <nav>{links.map(({to,label,icon:Icon,end}) => <NavLink key={to} to={to} end={end} onClick={() => setMobileOpen(false)} className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom"><div className="mini-avatar">{(user?.name || 'U').slice(0,1).toUpperCase()}</div><div className="user-meta"><strong>{user?.name || 'User'}</strong><span>{user?.email}</span></div><button className="icon-button" onClick={signOut} title="Sign out" aria-label="Sign out"><LogOut size={17}/></button></div>
    </aside>
    {mobileOpen && <button className="scrim" onClick={() => setMobileOpen(false)} aria-label="Close navigation"/>}
    <main className="main-area"><header className="topbar"><button className="mobile-menu icon-button" onClick={() => setMobileOpen(true)} aria-label="Open menu"><Menu size={21}/></button><div><div className="eyebrow">WORKSPACE / OVERVIEW</div><h1>Dashboard</h1></div><div className="topbar-right"><span className="status-dot"/> All systems operational <div className="top-avatar">{(user?.name || 'U').slice(0,1).toUpperCase()}</div></div></header><div className="page-content"><Outlet /></div><footer>Pulse Dashboard <span>•</span> Built with React</footer></main>
  </div>;
}
