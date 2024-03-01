import React, { useState, useEffect } from 'react'
import service from '../appwrite/config/config'
import Container from '../components/container/Container'
import PostCard from '../components/PostCard'


function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        service.getPosts([])
            .then((posts) => {
                if (posts) {
                    setPosts(posts.documents)
                }
            })
    }, [])
    return (
        <div className='w-full'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts