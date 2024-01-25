import cn from 'classnames'

import { TypeSetOfCardFields } from "../../types/contentful"
import Heading from "./Heading"
import Card from './Card'

const cardDisplayClass = {
    'Vertical': 'flex flex-col',
    'Horizontal': 'md:flex-row justify-between'
}

const SetOfCards = ({ fields }: { fields: TypeSetOfCardFields }) => {
    return (
        <section className="w-full flex justify-center pt-[68px]">
            <div className={`w-full flex flex-col items-center px-4`} style={{ maxWidth: fields.maxWidth }}>
                {fields.title && (
                    <Heading size={fields.titleSize} className='font-black pb-16'>{fields.title}</Heading>
                )}
                <div className={cn(cardDisplayClass[fields.cardDisplayStyle], 'w-full p-4 flex flex-col gap-12')}>
                    {fields.cards.map((card) => (
                        <Card key={card.sys.id} data={card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SetOfCards