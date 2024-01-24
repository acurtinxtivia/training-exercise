import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { TypeFooterFields } from "../../types/contentful"

const Footer = ({ data }: { data: { fields: TypeFooterFields } }) => {
    console.log(data)
    return (
        <footer className='w-full bg-primary-dark text-white p-6 flex justify-center mt-12'>
            <div className='w-full flex justify-center' style={{ maxWidth: data.fields.maxWidth }}>
                {documentToReactComponents(data.fields.content)}
            </div>
        </footer>
    )
}

export default Footer