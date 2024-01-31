import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Heading from "./Heading"
import ImageWithFocalPoint from "./ImageWithFocalPoint"
import type { TypeBlogPostFields } from "../../types/contentful-types"

const BlogPost = ({ fields }: { fields: TypeBlogPostFields }) => {
    return (
        <section className="w-full flex justify-center pt-16">
            <div className="w-full max-w-[1170px] flex flex-col items-center">
                <div>
                    <ImageWithFocalPoint fields={fields.featuredImage.fields} />
                </div>
                <Heading size='h1' className="font-bold">{fields.title}</Heading>
                <div>
                    {documentToReactComponents(fields.postContent)}
                </div>
            </div>
        </section>
    )
}

export default BlogPost