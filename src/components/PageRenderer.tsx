import type { TypePageLanding } from "../../types/contentful"
import PageHeader from "./PageHeader"
import Hero from "./Hero"
import Banner from "./Banner"
import SetOfCards from "./SetOfCards"
import SetOfTestimonials from "./SetOfTestimonials"
import ImageAndText from "./ImageAndText"
import Footer from "./Footer"

const PageRenderer = ({ data }: { data: TypePageLanding }) => {
    return (
        <main className='w-full flex flex-col items-center'>
            {data.fields.sections.map((section: any) => {
                switch(section.sys.contentType.sys.id) {
                    case 'header':
                        return <PageHeader fields={section.fields} key={section.sys.id} />
                    case 'heroImage':
                        return <Hero fields={section.fields} key={section.sys.id} />
                    case 'banner':
                        return <Banner fields={section.fields} key={section.sys.id} />
                    case 'setOfCard':
                        return <SetOfCards fields={section.fields} key={section.sys.id} />
                    case 'setOfTestimonials':
                        return <SetOfTestimonials fields={section.fields} key={section.sys.id} />
                    case 'imageAndText':
                        return <ImageAndText fields={section.fields} key={section.sys.id} />
                    case 'footer':
                        return <Footer fields={section.fields} key={section.sys.id} />
                    default:
                        return null
                }
            })}
      </main>
    )
}

export default PageRenderer