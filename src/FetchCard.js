import React from 'react'
import { useState, useEffect, useCallback } from "react";
import getUser from './helpers/getUser';
import getPosts from './helpers/getPosts';

// const initialUser = {
//     name: 'Fernando',
//     email: 'cainuriel@gmail.com'
// }

// const initialPost = [
//     {id: 1, title: 'Titulo 1'},
//     {id: 2, title: 'Titulo 2'}
// ]


const FetchCard = () => {

    const [user, setUser] = useState({});
    const [post, setPost] = useState([]);

    const apiUser = () => {
        getUser().then((newUser) => {
            setUser(newUser);
        })
    }

    // dudas con el useCallback mira https://youtu.be/6lvI-gTF_X8?t=2087
    const apiPost = useCallback(() => {
        getPosts(user.id)
        .then((newposts) => {
             setPost(newposts);
        })
    }, [user.id]);


    useEffect(() => {
        apiUser();
    }, []);

    
    useEffect(() => {
        if(user?.id) {
        apiPost();
        }
    }, [user, apiPost]);


    return (
        <div>
            <h1>FechCard</h1>
            <h2>{user.name}</h2>
            <h2>{user.email}</h2>
            <button onClick={apiUser} className='btn-warning' >Another User</button>
            <br/>
            <h2>Posts User: {user.id}</h2>
            <ul>
                {post.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>



    )
}

export default FetchCard
