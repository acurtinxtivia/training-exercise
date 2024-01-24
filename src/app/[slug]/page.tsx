import { fetchLandingEntriesBySlug } from "~/api"
import PageRenderer from "~/components/PageRenderer"

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