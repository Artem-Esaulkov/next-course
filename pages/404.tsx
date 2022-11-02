import Link from "next/link"
import classes from "../styles/error.module.scss"

export default function ErrorPage() {
    return (
        <>
            <h1 className={classes.error}>404 | Страницы не существует</h1>
            <p><Link className="link" href={"/"}>На главную</Link></p>
            <style jsx>{`
                h1 {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin: 100px;
                }
                p {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin: 0;
                }
            `}</style>
        </>
    )
}