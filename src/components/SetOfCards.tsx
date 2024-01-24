import cn from 'classnames'

import { TypeSetOfCardFields } from "../../types/contentful"
import Heading from "./Heading"
import Card from './Card'

const cardDisplayClass = {
    'Vertical': 'flex flex-col',
    'Horizontal': 'md:flex-row justify-between'
}

const SetOfCards = ({ data }: {data: { fields: TypeSetOfCardFields }}) => {
    return (
        <section className="w-full flex justify-center pt-16">
            <div className={`w-full flex flex-col items-center px-8`} style={{ maxWidth: data.fields.maxWidth }}>
                {data.fields.title && (
                    <Heading size={data.fields.titleSize} className='font-bold pb-4'>{data.fields.title}</Heading>
                )}
                <div className={cn(cardDisplayClass[data.fields.cardDisplayStyle], 'w-full p-4 flex flex-col gap-12')}>
                    {data.fields.cards.map((card) => (
                        <Card key={card.sys.id} data={card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SetOfCards