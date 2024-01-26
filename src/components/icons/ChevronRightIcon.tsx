const ChevronRightIcon = ({ className = "w-6 h-6", strokeWidth = 0.5 }: { className?: string, strokeWidth?: number }) => {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={strokeWidth} stroke="currentColor" className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
    )
}

export default ChevronRightIcon