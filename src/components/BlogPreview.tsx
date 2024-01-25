import { fetchBlogPosts } from "~/api"
import BlogPostPreview from "./BlogPostPreview"
import Heading from "./Heading"

const BlogPreview = async ({ fields }: { fields: any }) => {
    const blogPosts = await fetchBlogPosts(fields.numberOfPosts)

    return (
        <section className="w-full flex justify-center pt-16">
            <div className="w-full max-w-[1170px] flex flex-col items-center gap-4">
                {fields.title && (
                    <Heading size={fields.titleSize} className="font-bold">{fields.title}</Heading>
                )}
                {(!blogPosts || blogPosts.length === 0) ? (
                    <div>
                        No blog posts
                    </div>
                ) : (
                    <div>
                        {blogPosts.map((blogPost) => (
                            <BlogPostPreview fields={blogPost.fields} key={blogPost.sys.id} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default BlogPreview