import type { PropsWithChildren } from "react";
import cn from 'classnames'

interface ButtonProps {
    theme?: 'primary' | 'primary outline' | 'secondary' | 'white' | 'image' | undefined;
    className?: string;
}

const Button = ({ theme = 'primary', className = '', children }: PropsWithChildren<ButtonProps>) => {
    const classNames = {
        'primary': 'btn-primary',
        'primary outline': 'btn-primary-outline',
        'secondary': 'btn-secondary',
        'white': 'btn-white',
        'image': ''
    }
    return (
        <button className={cn(`btn text-lg whitespace-nowrap`, classNames[theme], className)}>
            {children}
        </button>
    )
}

export default Button;