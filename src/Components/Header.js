import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Utils/UserContext';

const Header = () => {
    const {userInfo, setUserInfo} = useContext(UserContext);
    const username = userInfo?.username;
    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            })
        })
    }, []);

    const logout = () => {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        });
        setUserInfo(null);
    }

    return (
        <header>
            <Link to='/' className='logo'>MyBlog</Link>
            <nav>
                {username && (
                    <>
                        <Link to='/create'>Create new post</Link>
                        <a href='' onClick={logout}>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}

export default Header;