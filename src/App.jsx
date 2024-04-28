import { Routes, Route } from 'react-router-dom';

import { Profile } from './pages/Profile.jsx';
import { Login } from './pages/Login.jsx';
import { Register } from './pages/Register.jsx';
import { TaskForm } from './pages/TaskForm.jsx';
import { Tasks } from './pages/Tasks.jsx';
import { NotFound } from './pages/NotFound.jsx';

import { NavBar } from './components/navbar/NavBar.jsx';

import { AuthProvider } from './context/AuthContext.jsx';

import { PrivateRoute, PublicRoute } from './components/ProtectedRoute.jsx';


export const App = () => {

  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/create_task' element={<TaskForm />} />
          <Route path='/task/1/edit' element={<TaskForm />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>

  )
}
