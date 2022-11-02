import Link from "next/link"
import Head from "next/head"

export function MainLayout({ children, title="Next App" }) {
    return(
        <>
            <Head>
                <title>{title} | Next Course</title>
                <meta name="keywords" content="nextjs, react, typescript, html"/>
                <meta name="description" content="this is tutorial for youtube next"/>
                <meta charSet="utf-8"/>
            </Head>
            <nav>
                <Link className="navlink" href={"/"}>Home</Link>
                <Link className="navlink" href={"/about"}>About</Link>
                <Link className="navlink" href={"/posts"}>Posts</Link>
            </nav>
            <main>{children}</main>
            <style jsx>{`
                nav {
                    display: flex;
                    background-color: blue;
                    justify-content: space-around;
                    align-items: center;
                    height: 60px;
                    width: 100%;
                    margin: 0;
                };
                a {
                    color: #fff;
                    text-decoration: none;
                    margin: 0;
                };
                main {
                    margin-top: 60px;
                }
            `}</style>
        </>
    )
}