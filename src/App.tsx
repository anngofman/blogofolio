import CreatePost from './Pages/CreatePost';
import HomePage from './Pages/Home';
import NotFoundPage from './Pages/NotFoundPage';
import { SignInPage } from './Pages/SignIn';
import { SignUpPage } from './Pages/SignUp';
import SinglePost from './Pages/SinglePost';
import { SuccessPage } from './Pages/Success';
import Layout from './components/Layout';
import { Main } from './components/Main';
import { AuthProvider } from './helpers/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RequireAuth from './helpers/RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='posts' element={<HomePage />} >
              <Route path='all' element={<Main />} />
              <Route path='favorites' element={<Main />} />
              <Route path='popular' element={<Main />} />
            </Route>
            <Route path='posts/:postId' element={<SinglePost />} />
            <Route path='signIn' element={<SignInPage />} />
            <Route path='signUp' element={<SignUpPage />} />
            <Route path='success' element={<SuccessPage />} />
            <Route path='createPost' element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            } />
          </Route>
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
