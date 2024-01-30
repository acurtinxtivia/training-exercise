import { fetchBlogPostBySlug } from "~/api"
import Footer from "~/components/Footer"

import PageHeader from "~/components/PageHeader"
import BlogPostHeader from "~/components/BlogPostHeader"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export default async function BlogPage({ params }: { params: { slug: string }}) {
    const [post] = await fetchBlogPostBySlug(params.slug)

    return (
        <main className="w-full min-h-screen flex flex-col items-center">
            <PageHeader fields={post.fields.pageHeader.fields} />
            <div className="max-w-[750px] pt-[68px] pb-[85px]">
                <BlogPostHeader fields={post.fields} createdAt={post.sys.createdAt} />
                <div className="mt-[19px] font-light leading-[26px]">
                    {documentToReactComponents(post.fields.postContent)}
                </div>
            </div>
            <Footer fields={post.fields.pageFooter.fields} />
        </main>
    )
}