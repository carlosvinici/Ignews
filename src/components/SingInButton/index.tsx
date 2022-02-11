import { FaAdversal } from "react-icons/fa";

import styles from './styles.module.scss'

export function SignInButton () {
    return (
        <button type="button" className={styles.signInButton}>
            Sign in with GitHub
        </button>
    )
}