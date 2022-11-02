import React from "react"
import Router from 'next/router'
import { MainLayout } from "../components/MainLayout"

export default function About() {
    const linkClickHandler = () => {
        Router.push("/")
    }
    return (
        <MainLayout title="About us">
            <h2>About us</h2>
            <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={() => Router.push("/posts")}>Go to posts</button>
        </MainLayout>
    )
}