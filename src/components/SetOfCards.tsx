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
                    <Heading 
                        size={fields.titleSize} 
                        className='font-black pb-[26px] text-[28px] leading-[34px] md:text-[36px] md:leading-[43.px] lg:text-[46px] lg:leading-[55px]'
                    >
                        {fields.title}
                    </Heading>
                )}
                <hr className='w-[50px] lg:w-[68px] h-[4px] bg-primary mb-[40px] md:mb-[60px]' />
                <div className={cn(cardDisplayClass[fields.cardDisplayStyle], 'w-full sm:w-[480px] md:w-[750px] lg:w-[970px] xl:w-full flex flex-col gap-[30px] sm:px-4 xl:px-0')}>
                    {fields.cards.map((card) => (
                        <Card key={card.sys.id} data={card} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SetOfCards