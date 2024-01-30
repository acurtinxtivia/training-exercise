'use client'
import { useSearchParams, usePathname, useRouter} from "next/navigation"

import BlogPostPreview from "../BlogPostPreview"
import Topics from "./Topics"
import Paginator from "./Paginator"

const Posts = ({ blogPosts, postsPerPage }: { blogPosts: any, postsPerPage: number }) => {
    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()
    const selectedTopic = searchParams.get('topic')
    const currentPage = Number(searchParams.get('page')) || 1
    const filteredPosts = selectedTopic ? blogPosts.filter(post => post.fields.topic === selectedTopic) : blogPosts
    const pagePosts = filteredPosts.slice((currentPage - 1) * postsPerPage, postsPerPage * currentPage)

    const onClickTopic = (topic: string = '') => {
        const params = new URLSearchParams(searchParams)
        params.delete('page')
        if (topic) {
            params.set('topic', topic)
        } else {
            params.delete('topic')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    const onClickPageChange = (number: number) => {
        const params = new URLSearchParams(searchParams)
        if (number > 1) {
            params.set('page', number.toString())
        } else {
            params.delete('page')
        }
        replace(`${pathname}?${params.toString()}`)
    }

    return (
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col lg:flex-row">
                {(!blogPosts || blogPosts.length === 0) ? (
                    <div className="w-full lg:w-2/3 flex justify-center text-[22px] font-bold">
                        No blog posts
                    </div>
                ) : (
                    <div className="w-full lg:w-2/3 flex flex-col gap-[58px]">
                        {pagePosts.map((blogPost) => (
                            <BlogPostPreview fields={blogPost.fields} createdAt={blogPost.sys.createdAt} key={blogPost.sys.id} />
                        ))}
                    </div>
                )}
                <Topics onClickTopic={onClickTopic} />
            </div>
            <Paginator
                currentPage={currentPage}
                itemsPerPage={postsPerPage}
                totalItems={filteredPosts.length}
                onClickPageChange={onClickPageChange}
            />
        </div>
    )
}

export default Posts