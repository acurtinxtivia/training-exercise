import Link from "next/link"

import ImageWithFocalPoint from "./ImageWithFocalPoint"
import Heading from "./Heading"
import Button from "./Button"

const BlogPostHeader = ({ fields, createdAt }: { fields: any, createdAt: string }) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex-shrink-0">
                <ImageWithFocalPoint fields={fields.featuredImage.fields} className="w-full rounded-sm"/>
            </div>
            <div className="flex flex-col mt-[22px]">
                <Heading size='h3' className="font-black">{fields.title}</Heading>
                <div className="flex text-light-gray gap-[22px] items-center mt-[8px]">
                    <p className=""><span className="font-bold text-black">Date:</span> {new Date(createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</p>
                    <div className="h-[18px] border-l"></div>
                    <p className=""><span className="font-bold text-black">Category:</span> {fields.topic}</p>
                </div>
                <hr className="mt-[18px]" />
                {/* <div className="text-sm w-full max-h-24 overflow-hidden mt-[18px]">
                    {documentToReactComponents(fields.postContent)}
                </div>
                <Link href={`/blog/${fields.slug}`} className="mt-[29px]">
                    <Button theme="primary outline" className="text-md">Read More</Button>
                </Link> */}
            </div>
        </div>
    )
}

export default BlogPostHeader