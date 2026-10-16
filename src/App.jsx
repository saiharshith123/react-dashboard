import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Overview from './pages/Overview';
import UsersPage from './pages/Users';
import Profile from './pages/Profile';
export default function App() {
  return <Routes><Route path="/login" element={<Login/>}/><Route element={<ProtectedRoute/>}><Route element={<Layout/>}><Route index element={<Overview/>}/><Route path="users" element={<UsersPage/>}/><Route path="profile" element={<Profile/>}/></Route></Route><Route path="*" element={<Navigate to="/" replace/>}/></Routes>;
}
