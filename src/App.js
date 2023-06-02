import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import PostPage from './Pages/PostPage';
import CreatePost from './Pages/CreatePost';
import { Routes, Route } from 'react-router';
import './App.css';
import { UserContextProvider } from './Utils/UserContext';
import Layout from './Utils/Layout';

function App() {
    return (
        <UserContextProvider>
            <Routes>
                <Route path='/' element={<Layout />} >
                    <Route index element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                    <Route path='/create' element={<CreatePost />} />
                    <Route path='/post/:id' element={<PostPage />} />
                </Route>
            </Routes>
        </UserContextProvider>
    );
}

export default App;
