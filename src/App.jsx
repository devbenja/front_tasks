import { Routes, Route, Outlet } from 'react-router-dom';

import { Profile } from './pages/Profile.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { TaskForm } from './pages/TaskForm.jsx';
import { Tasks } from './pages/Tasks.jsx';
import { NotFound } from './pages/NotFound.jsx';

import { NavBar } from './components/navbar/NavBar.jsx';

import { TaskProvider } from './context/TaskContext.jsx';

import { PrivateRoute, PublicRoute } from './components/ProtectedRoute.jsx';

import { useAuth } from './context/AuthContext.jsx';


export const App = () => {

  const { loading } = useAuth();

  if (loading) return <h1>Loading</h1>

  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route element={<TaskProvider><Outlet /></TaskProvider>}>
            <Route path='/tasks' element={<Tasks />} />
            <Route path='/create_task' element={<TaskForm />} />
            <Route path='/task/:id/edit' element={<TaskForm />} />
          </Route>

          <Route path='/profile' element={<Profile />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  )
}
