import { useState } from 'react'
import './App.css'
import { SessionProvider } from './components/SessionCotext';
import { AdminSessionProvider } from './components/admin/AdminSessionContext';

import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Admin from './pages/AdminLogin.jsx';
import NavBar from './components/NavBar.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminDashboard from './pages/admin/AdminDashboard';
import AllBooks from './pages/admin/AllBooks';
import BorrowedBooks from './pages/admin/BorrowedBooks';
import BorrowRequest from './pages/admin/BorrowRequest';
import Error from './pages/Error';
import UserDashboard from './pages/user/UserDashboard';
import UserBooks from './pages/user/UserBooks';
import UserRequests from './pages/user/UserRequests';
import ApprovedBooks from './pages/user/ApprovedBooks';

const App = ()=> {
  return (
    <>
    <SessionProvider>
    <AdminSessionProvider>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<><NavBar/> <Home/></>} />
          <Route path="/about" element={<><NavBar/> <About/></>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admindashboard" element={<AdminDashboard/>}>
              <Route path="allbooks" element={<AllBooks />}/>
              <Route path="borrowedbooks" element={<BorrowedBooks />}/>
              <Route path="borrowrequest" element={<BorrowRequest />} />
          </Route>
          <Route path="/userdashboard" element={<UserDashboard/>}>
              <Route path="allbooks" element={<UserBooks />}/>
              <Route path="userrequests" element={<UserRequests />}/>
              <Route path="approvedbooks" element={<ApprovedBooks />}/>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
     </BrowserRouter>
     </AdminSessionProvider>
     </SessionProvider>
    </>
  )
}

export default App
