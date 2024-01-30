import { BLOG_POST_TOPICS } from "~/constants/blogPostTopics"
import ChevronRightIcon from "../icons/ChevronRightIcon"

const Topics = ({ onClickTopic }: { onClickTopic: (topic?: string) => void }) => {
    return (
        <div className="w-[375px] lg:w-1/3 mt-[40px] lg:mt-0 lg:px-4">
            <h4 className="font-bold text-[18px] leading-[22px] lg:text-[20px] lg:leading-[24px]">Categories</h4>
            <ul className="mt-[12px]">
                    {BLOG_POST_TOPICS.map(topic => (
                        <li key={topic} className="w-full text-extra-light-gray hover:text-primary transition-all px-[7px] py-[12px] border-b">
                            <button className="flex items-center gap-[6px]" onClick={() => onClickTopic(topic)}>
                                <ChevronRightIcon strokeWidth={1.5} className="h-5 w-5" />
                                <p className="leading-[24px] whitespace-nowrap">{topic}</p>
                            </button>
                        </li>
                    ))}
                <li className="w-full text-extra-light-gray hover:text-primary transition-all px-[7px] py-[12px] border-b">
                    <button className="flex items-center gap-[6px]" onClick={() => onClickTopic()}>
                        <ChevronRightIcon strokeWidth={1.5} className="h-5 w-5" />
                        <p className="leading-[24px] whitespace-nowrap">All</p>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Topics