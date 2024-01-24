import type { PropsWithChildren } from "react"
import cn from 'classnames'

interface HeadingProps {
    size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | undefined;
    color?: string;
    className?: string;
}

const Heading = ({ size, children, color = '', className = '' }: PropsWithChildren<HeadingProps>) => {
    const colorClass = color ? `text-[${color}]` : ''
    switch (size) {
        case 'h1':
            return <h1 className={cn('text-5xl', colorClass, className)}>{children}</h1>
        case 'h2':
            return <h2 className={cn('text-3xl', colorClass, className)}>{children}</h2>
        case 'h3':
            return <h3 className={cn('text-xl', colorClass, className)}>{children}</h3>
        case 'h4':
            return <h4>{children}</h4>
        case 'h5':
            return <h5>{children}</h5>
        case 'h6':
            return <h6>{children}</h6>
        default:
            return null
    }
}

export default Heading
