import Link from 'next/link'
import { MainLayout } from '../components/MainLayout'

export default function Index() {
    return (
        <MainLayout title="Main Page">
            <h1>Hello Next.JS</h1>
            <p>Lorem ipsum</p>
        </MainLayout>
    )
}