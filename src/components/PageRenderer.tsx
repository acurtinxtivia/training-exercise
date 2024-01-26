import type { TypePageLanding } from "../../types/contentful"
import PageHeader from "./PageHeader"
import Hero from "./Hero"
import Banner from "./Banner"
import SetOfCards from "./SetOfCards"
import SetOfTestimonials from "./SetOfTestimonials"
import ImageAndText from "./ImageAndText"
import BlogPreview from "./BlogPreview"
import BlogPost from './BlogPost'
import Footer from "./Footer"
import Carousel from "./Carousel"

const PageRenderer = ({ data }: { data: TypePageLanding }) => {
    return (
        <main className='w-full flex flex-col items-center min-h-screen'>
            {data.fields.sections.map((section: any) => {
                switch(section.sys.contentType.sys.id) {
                    case 'header':
                        return <PageHeader fields={section.fields} key={section.sys.id} />
                    // case 'heroImage':
                    //     return <Hero fields={section.fields} key={section.sys.id} />
                    case 'banner':
                        return <Banner fields={section.fields} key={section.sys.id} />
                    case 'setOfCard':
                        return <SetOfCards fields={section.fields} key={section.sys.id} />
                    case 'setOfTestimonials':
                        return <SetOfTestimonials fields={section.fields} key={section.sys.id} />
                    case 'imageAndText':
                        return <ImageAndText fields={section.fields} key={section.sys.id} />
                    case 'carousel':
                        return <Carousel fields={section.fields} key={section.sys.id} />
                    case 'blogPreview':
                        return <BlogPreview fields={section.fields} key={section.sys.id} />
                    case 'blogPost':
                        return <BlogPost fields={section.fields} key={section.sys.id} />
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