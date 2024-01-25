import type { PropsWithChildren } from "react";

interface ButtonProps {
    theme: 'primary' | 'secondary' | 'image' | undefined,
}

const Button = ({ theme = 'primary', children }: PropsWithChildren<ButtonProps>) => {
    return (
        <button className={`btn ${theme === 'primary' ? 'btn-primary' : 'btn-secondary'} text-lg`}>
            {children}
        </button>
    )
}

export default Button;