import ChevronRightIcon from "../icons/ChevronRightIcon"
import type { TypeBlogPostTopic } from "../../../types/contentful-types";

interface TopicsProps {
    onClickTopic: (topic?: string) => void;
    topics: TypeBlogPostTopic[];
}

const Topics = ({ onClickTopic, topics }: TopicsProps) => {
    return (
        <div className="w-[375px] lg:w-1/3 mt-[40px] lg:mt-0 lg:px-4">
            <h4 className="font-bold text-[18px] leading-[22px] lg:text-[20px] lg:leading-[24px]">Categories</h4>
            <ul className="mt-[12px]">
                    {topics.map((topic) => (
                        <li key={topic.sys.id} className="w-full text-extra-light-gray hover:text-primary transition-all px-[7px] py-[12px] border-b">
                            <button className="flex items-center gap-[6px]" onClick={() => onClickTopic(topic.fields.label)}>
                                <ChevronRightIcon strokeWidth={1.5} className="h-5 w-5" />
                                <p className="leading-[24px] whitespace-nowrap">{topic.fields.label}</p>
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