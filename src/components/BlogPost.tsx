import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Heading from "./Heading"
import ImageWithFocalPoint from "./ImageWithFocalPoint"

const BlogPost = ({ fields }: { fields: any }) => {
    return (
        <section className="w-full flex justify-center pt-16">
            <div className="w-full max-w-[1170px] flex flex-col items-center">
                <div>
                    <ImageWithFocalPoint fields={fields.featuredImage.fields} />
                </div>
                <Heading size='h1' className="font-bold">{fields.title}</Heading>
                <div>
                    {documentToReactComponents(fields.content)}
                </div>
            </div>
        </section>
    )
}

export default BlogPost