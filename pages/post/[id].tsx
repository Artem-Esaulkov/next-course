import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import Router from 'next/router'
import { NextPageContext } from 'next'
import { MyPost } from '../../interfaces/post'

interface PostPageProps {
    post: MyPost
}

export default function Post({post: serverPost}: PostPageProps) {
    const [post, setPost] = useState(serverPost);
    const router = useRouter();
    useEffect(() => {
        async function load() {
            const response = await fetch(`${process.env.API_URL}/posts/${router.query.id}`)
            const data = await response.json()
            setPost(data);
        }
        if (!serverPost) {
            load()
        }
    }, [])
        if (!post) {
            return(<p>Loading...</p>)
        }
    return (
        <>
            <Head>
                <title>{post.title} | Next Course</title>
            </Head>
            <h3>{post.title}</h3>
            <button onClick={() => Router.push("/")}>Go back to home</button>
            <button onClick={() => Router.push("/posts")}>Go to posts</button>
            <p>{post.body}</p>
        </>
    )
}

interface PostNextPageContext extends NextPageContext {
    query: {
        id: string
    }
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
    if (!req) {
        return {post: null}
    } const response = await fetch(`${process.env.API_URL}/posts/${query.id}`)
    const post: MyPost = await response.json()
    return {
        post
    }
}