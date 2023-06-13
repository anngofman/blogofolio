import CreatePost from './Pages/CreatePost';
import HomePage from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';
import { SignInPage } from './Pages/SignIn';
import { SignUpPage } from './Pages/SignUp';
import { SuccessPage } from './Pages/Success';
import Layout from './components/Layout';
import { AuthProvider } from './components/hoc/AuthProvidsr';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage />} />
            <Route path='signIn' element={<SignInPage />} />
            <Route path='signUp' element={<SignUpPage />} />
            <Route path='success' element={<SuccessPage />} />
            <Route path='createPost' element={<CreatePost />} />
          </Route>
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
