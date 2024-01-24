import Link from "next/link"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Heading from "./Heading"
import ImageWithFocalPoint from "./ImageWithFocalPoint"

const BlogPostPreview = ({ fields }: { fields: any }) => {
    const content = fields.sections.find((section: any) => section.sys.contentType.sys.id === 'blogPost')

    return (
        <div>
            {content ? (
                <div className="flex gap-4 p-4">
                    <div className="flex-shrink-0">
                        <ImageWithFocalPoint fields={content.fields.featuredImage.fields} className="w-48 rounded-sm"/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Heading size='h4' className="font-semibold">{content.fields.title}</Heading>
                        <div className="text-sm w-full max-h-24 overflow-hidden">
                            {documentToReactComponents(content.fields.content)}
                        </div>
                        <Link href={`/${fields.slug}`}>read more</Link>
                    </div>
                </div>
            ) : (
                <div>not availaible</div>
            )}
        </div>
    )
}

export default BlogPostPreview
