import { useSession, signIn } from "next-auth/react"
import styled from "./styled.module.scss"

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const {data:session} = useSession();

    function handleSubscribe (){
        if(!session) {
            signIn('github')
            return;
        }

        // criação da checkout session

        
    }


    return (
        <button
        type="button"
        className={styled.subscribeButton}
        >
            Subscribe Now
        </button>
    )
}