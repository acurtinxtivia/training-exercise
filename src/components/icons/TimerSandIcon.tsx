const TimerSandIcon = ({ className = 'w-6 h-6' }: { className?: string }) => {

    return (
        <svg className={className} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.5 4h-13m13 16h-13M8 20v-3.3c0-.5.1-.9.4-1.2l1.6-2.9a1 1 0 0 0 0-1.2L8.4 8.5A2 2 0 0 1 8 7.3V4h8v3.3c0 .5-.1.9-.4 1.2L14 11.4a1 1 0 0 0 0 1.2l1.6 2.9c.3.3.4.7.4 1.2V20H8Z"/>
        </svg>
    )
}

export default TimerSandIcon
