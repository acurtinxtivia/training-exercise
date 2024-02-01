import { fetchAllTopics, fetchAllBlogPosts } from "~/api"
import Heading from "../Heading"
import Posts from "./Posts"
import type { TypeBlogListFields } from "../../../types/contentful-types"

const BlogList = async ({ fields }: { fields: TypeBlogListFields }) => {
    const blogPosts = await fetchAllBlogPosts()
    const topics = await fetchAllTopics()
    
    return (
        <section className="w-full flex justify-center pt-[68px] pb-[85px]">
            <div className="w-full max-w-[480px] md:max-w-[750px] lg:max-w-[970px] xl:max-w-[1200px] flex flex-col items-center gap-4 px-4">
                {fields.title && (
                    <Heading size='h1'>{fields.title}</Heading>
                )}
                {blogPosts && (
                    <Posts blogPosts={blogPosts} postsPerPage={fields.numberOfPosts} topics={topics || []} />
                )}
            </div>
        </section>
    )
}

export default BlogList