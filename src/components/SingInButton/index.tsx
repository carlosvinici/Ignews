import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './styles.module.scss'

export function SignInButton () {
    const {data: session} = useSession();
    
    return session ? 
    (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            Welcome! {session.user.name}
        </button>
    )  
    :
    (
        <button
            type="button"
            className={styles.signInButton}
            onClick={() => signIn("github")}
        >
            Sign in with GitHub
        </button>
    )
}