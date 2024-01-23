import cn from 'classnames'

import { TypeSetOfCardFields } from "../../types/contentful"
import Heading from "./Heading"
import Card from './Card'

const cardDisplayClass = {
    'Vertical': 'flex flex-col',
    'Horizontal': 'flex justify-between'
}

const SetOfCards = ({ data }: {data: { fields: TypeSetOfCardFields }}) => {
    return (
        <section className="w-full flex justify-center">
            <div className={`w-full max-w-[${data.fields.maxWidth}px] flex flex-col items-center`}>
                {data.fields.title && (
                    <Heading size={data.fields.titleSize} className='font-bold'>{data.fields.title}</Heading>
                )}
                <div className={cn(cardDisplayClass[data.fields.cardDisplayStyle], 'w-full')}>
                    {data.fields.cards.map((card) => (
                        <Card key={card.sys.id} data={card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SetOfCards