import styled from "./styled.module.scss"

interface SubscribeButtonProps {
    priceId: string;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    return (
        <button
        type="button"
        className={styled.subscribeButton}
        >
            Subscribe Now
        </button>
    )
}