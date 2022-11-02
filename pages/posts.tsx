import fetch from 'isomorphic-unfetch';
import Router from 'next/router'
import Link from 'next/link'
import { useState, useEffect } from "react"
import { MainLayout } from '../components/MainLayout'
import { MyPost } from '../interfaces/post'
import { NextPageContext } from 'next';

interface PostsPageProps {
    posts: MyPost[]
}

export default function Posts({posts: serverPosts}: PostsPageProps) {
    const [posts, setPosts] = useState(serverPosts);
    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts`)
            const data = await response.json()
            setPosts(data);
        }
        if (!serverPosts) {
            load()
        }
    }, [])
        if (!posts) {
            return(<p>Loading...</p>)
        }
    return (
        <MainLayout title="Posts">
            <h2>My posts</h2>
            <p>First post</p>
            <button onClick={() => Router.push("/")}>Go back to home</button>
            <button onClick={() => Router.push("/about")}>About us</button>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </MainLayout>
    )
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
    if (!req) {
        return {posts: null}
    }
    const response = await fetch(`${process.env.API_URL}/posts`)
    const posts: MyPost[] = await response.json()
    return {
        posts
    }
}