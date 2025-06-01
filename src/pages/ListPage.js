import React, { useEffect, useState } from 'react';
import axios from "axios";
import { ListContainer, ListAll } from './Liststyles';


function ListPage() {
  const [posts, setPosts] = useState([]);
   const getPosts = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log('응답 완료');
            setPosts(response.data);
        } catch (error) {
            console.error('에러 : ', error);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);


  return (
        <ListContainer>
            {posts.map((post) => ( 
                <div key={post.id}>
                  <ListAll>
                       <h5>제목: {post.title}</h5>
                    <p>내용: {post.body}</p>
                  </ListAll>
                </div>
            ))}
        </ListContainer>
    );
};

export default ListPage;