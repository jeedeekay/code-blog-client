import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import RegisterPage from './Pages/RegisterPage';
import Header from './Components/Header';
import { Routes, Route } from 'react-router';
import './App.css';
import { UserContextProvider } from './Components/UserContext';

function App() {
    return (
        <UserContextProvider>
        <div className='App'>
            
                <Header />
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/register' element={<RegisterPage />} />
                </Routes>
            
        </div>
        </UserContextProvider>


    );
}

export default App;
