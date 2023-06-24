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
import ConfirmPage from './Pages/ConfirmPage';
import ActivatePage from './Pages/ActivatePage';
import { useEffect } from 'react';
import { loadPosts } from './store/post/actions';
import { useDispatch } from 'react-redux';
import { AppDispatch } from './store';


function App() {
  const dispatch = useDispatch<AppDispatch>()

  useEffect(()=>{
    dispatch(loadPosts(12,0))
  })
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
            <Route path='post/:postId' element={<SinglePost />} />
            <Route path='posts/:page' element={<HomePage/>}/>
            <Route path='signIn' element={<SignInPage />} />
            <Route path='signUp' element={<SignUpPage />} />
            <Route path='confirm' element={<ConfirmPage />} />
            <Route path='activate/:uid/:token' element={<ActivatePage/>} />
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
