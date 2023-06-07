import { useState, useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../Editor';

const EditPost = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFile] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/post/' + id)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
                })
            })
    }, [])

    const updatePost = async (ev) => {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        
        await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data
        })
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }
    return (
        <form onSubmit={updatePost}>
            <input
                type='title'
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)}
            />
            <input
                type='summary'
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)}    
            />
            <input
                type='file'
                onChange={ev => setFile(ev.target.files)}
            />
            <Editor onChange={setContent} value={content} />
            <button style={{ marginTop: '5px' }}>Update post</button>
        </form>
    );
}

export default EditPost;