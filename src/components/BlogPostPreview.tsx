import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Button from "./Button"
import BlogPostHeader from "./BlogPostHeader"

const BlogPostPreview = ({ fields, createdAt }: { fields: any, createdAt: string }) => {
    return (
        <div>
            {fields ? (
                <div className="flex flex-col sm:px-4">
                    <BlogPostHeader fields={fields} createdAt={createdAt} />
                    <div className="w-full max-h-[156px] overflow-hidden mt-[18px] text-light-gray font-light leading-[26px]">
                        {documentToReactComponents(fields.postContent)}
                    </div>
                    <Link href={`/blog/${fields.slug}`} className="mt-[29px]">
                        <Button theme="primary outline" className="text-md">Read More</Button>
                    </Link>
                </div>
            ) : (
                <div>not availaible</div>
            )}
        </div>
    )
}

export default BlogPostPreview
