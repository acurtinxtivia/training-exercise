import { fetchLandingEntriesBySlug, fetchAllPages } from "~/api"
import NotFound from "~/components/NotFound"
import PageRenderer from "~/components/PageRenderer"

export async function generateStaticParams() {
    const allPages = await fetchAllPages()

    return allPages?.map((page) => ({
        slug: page.fields.slug
    }))
}

export default async function Page({ params }: { params: { slug: string } }) {
    const result = await fetchLandingEntriesBySlug(params.slug)

    if (!result || result.length < 1) return <NotFound />

    return (
        <PageRenderer data={result[0]} />
    )
}