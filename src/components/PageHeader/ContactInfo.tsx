import cn from 'classnames'

import ClockIcon from "../icons/ClockIcon"
import LocationIcon from "../icons/LocationIcon"
import PhoneIcon from "../icons/PhoneIcon"
import type { TypeContactInfoFields } from '../../../types/contentful-types'

const ContactInfo = ({ fields }: { fields: TypeContactInfoFields }) => {
    const containerClass = "flex flex-col md:flex-row items-center text-center md:text-left gap-[14px]"
    const iconClass = "h-[32px] w-[32px]"
    const textClass = "font-bold"
    const subtextClass = "font-light text-light-gray"
    
    return (
        <div className="flex gap-[25px] lg:gap-[68px] flex-wrap justify-center px-[30px]">
            {fields.hours && (
                <div className={containerClass}>
                    <div>
                        <ClockIcon className={cn("fill-primary", iconClass)} />
                    </div>
                    <div>
                        <p className={textClass}>{fields.hours}</p>
                        <p className={subtextClass}>{fields.hoursSubtext}</p>
                    </div>
                </div>
            )}
            {fields.address && (
                <div className={containerClass}>
                    <div>
                        <LocationIcon className={cn("fill-primary", iconClass)} />
                    </div>
                    <div>
                        <p className={textClass}>{fields.address}</p>
                        <p className={subtextClass}>{fields.addressSubtext}</p>
                    </div>
                </div>
            )}
            {fields.phoneNumber && (
                <div className={containerClass}>
                    <div>
                        <PhoneIcon className={cn("stroke-primary -scale-x-100", iconClass)} />
                    </div>
                    <div>
                        <p className={textClass}>{fields.phoneNumber}</p>
                        <p className={subtextClass}>{fields.email}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactInfo