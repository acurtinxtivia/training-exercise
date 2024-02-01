import Link from "next/link"

import { fetchBlogPostBySlug, fetchAllBlogPosts, fetchBlogPostsByTopic } from "~/api"
import Footer from "~/components/Footer"
import PageHeader from "~/components/PageHeader"
import BlogPostHeader from "~/components/BlogPostHeader"
import ImageWithFocalPoint from "~/components/ImageWithFocalPoint"
import ArrowLeftIcon from "~/components/icons/ArrowLeftIcon"
import Banner from "~/components/Banner"
import RichText from "~/components/RichText"
import type { TypeBlogPost } from "../../../../types/contentful-types"
import NotFound from "~/components/NotFound"

export async function generateStaticParams() {
    const allBlogPosts = await fetchAllBlogPosts()

    return allBlogPosts?.map(blogPost => ({
        slug: blogPost.fields.slug
    }))
}

export default async function BlogPage({ params }: { params: { slug: string }}) {
    const result = await fetchBlogPostBySlug(params.slug)

    if (!result || result.length < 1) return <NotFound />

    const post: TypeBlogPost = result[0]
    const relatedPosts: TypeBlogPost[] | undefined = await fetchBlogPostsByTopic(post.fields.blogTopic.sys.id, post.sys.id)

    return (
        <main className="w-full min-h-screen flex flex-col items-center">
            <PageHeader fields={post.fields.pageHeader.fields} />
            <Banner fields={post.fields.banner.fields} />
            <div className="w-full max-w-[480px] md:max-w-[750px] lg:max-w-[970px] xl:max-w-[1200px] pt-[68px] pb-[85px] px-4">
                <div className="w-full flex flex-col lg:flex-row lg:gap-[30px]">
                    <div className="w-full lg:w-2/3">
                        <BlogPostHeader fields={post.fields} createdAt={post.sys.createdAt} />
                        <div className="mt-[19px] font-light leading-[26px]">
                    </div>
                    <div className="text-light-gray leading-[26px] font-light">
                        <RichText content={post.fields.postContent} />
                    </div>
                    </div>
                    {relatedPosts && relatedPosts.length > 0 && (
                        <div className="w-full lg:w-1/3 flex flex-col mt-[35px] lg:mt-0 lg:px-4">
                            <h3 className="font-bold text-[22px] leading-[26px] md:text-[26px] md:leading-[31px] lg:text-[30px] lg:leading-[38px]">Related Posts</h3>
                            <div className="mt-[30px] flex flex-col md:flex-row flex-wrap gap-[23px]">
                                {relatedPosts.map((relatedPost) => (
                                    <div key={relatedPost.sys.id} className="flex items-center gap-[30px] leading-[20px]">
                                        <div className="flex-shrink-0">
                                            <ImageWithFocalPoint fields={relatedPost.fields.featuredImage.fields} className="w-[60px] h-[60px] object-cover rounded-full" />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="flex items-center gap-1">
                                                <ArrowLeftIcon className="w-3 h-3 rotate-180 text-primary" strokeWidth={2} />
                                                <span className="text-light-gray font-light text-[13px]">
                                                    {new Date(relatedPost.sys.createdAt).toLocaleDateString('en-US', {
                                                        year: 'numeric',
                                                        day: 'numeric',
                                                        month: 'numeric'
                                                    })}
                                                </span>
                                            </div>
                                            <Link href={`/blog/${relatedPost.fields.slug}`} className="mt-[4px] max-w-[180px] max-h-[40px] hover:text-primary transition-all overflow-hidden text-ellipsis">
                                                <h6 className="text-[16px]">
                                                    {relatedPost.fields.title}
                                                </h6>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <Footer fields={post.fields.pageFooter.fields} />
        </main>
    )
}