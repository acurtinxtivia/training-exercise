import { fetchBlogPosts } from "~/api"
import BlogPostPreview from "../BlogPostPreview"
import Heading from "../Heading"

const BlogList = async ({ fields }: { fields: any }) => {
    const blogPosts = await fetchBlogPosts(fields.numberOfPosts)
    console.log(blogPosts)
    return (
        <section className="w-full flex justify-center pt-[68px] pb-[85px]">
            <div className="w-full max-w-[1200px] flex flex-col items-center gap-4 px-4">
                {fields.title && (
                    <Heading size={fields.titleSize} className="font-bold">{fields.title}</Heading>
                )}
                {(!blogPosts || blogPosts.length === 0) ? (
                    <div>
                        No blog posts
                    </div>
                ) : (
                    <div className="max-w-[750px] flex flex-col gap-[58px]">
                        {blogPosts.map((blogPost) => (
                            <BlogPostPreview fields={blogPost.fields} createdAt={blogPost.sys.createdAt} key={blogPost.sys.id} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default BlogList