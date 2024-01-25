import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { TypeFooterFields } from "../../types/contentful"

const Footer = ({ fields }: { fields: TypeFooterFields }) => {
    return (
        <footer className='w-full mt-auto pt-12'>
            <div className='w-full bg-primary-dark text-white p-6 flex justify-center'>
                <div className='w-full flex justify-center' style={{ maxWidth: fields.maxWidth }}>
                    {documentToReactComponents(fields.content)}
                </div>
            </div>
        </footer>
    )
}

export default Footer