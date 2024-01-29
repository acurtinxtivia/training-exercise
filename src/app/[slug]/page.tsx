import { fetchLandingEntriesBySlug, fetchAllPages } from "~/api"
import PageRenderer from "~/components/PageRenderer"

export async function generateStaticParams() {
    const allPages = await fetchAllPages()

    return allPages?.map((page) => ({
        slug: page.fields.slug
    }))
}

export default async function Page({ params }: { params: { slug: string } }) {
    const [data] = await fetchLandingEntriesBySlug(params.slug)

    if (!data) {
        return (
            <main className='w-full flex flex-col items-center'>
                {params.slug} page not found
            </main>
        )
    }

    return (
        <PageRenderer data={data} />
    )
}