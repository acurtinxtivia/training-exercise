import ClockIcon from "../icons/ClockIcon"
import LocationIcon from "../icons/LocationIcon"
import PhoneIcon from "../icons/PhoneIcon"

const ContactInfo = ({ fields }: { fields: any }) => {
    return (
        <div className="flex gap-[68px]">
            {fields.hours && (
                <div className="flex items-center gap-4">
                    <div>
                        <ClockIcon className="h-10 w-10 fill-primary"/>
                    </div>
                    <div>
                        <p className="font-bold">{fields.hours}</p>
                        <p className="font-light text-light-gray">{fields.hoursSubtext}</p>
                    </div>
                </div>
            )}
            {fields.address && (
                <div className="flex items-center gap-4">
                    <div>
                        <LocationIcon className="h-10 w-10 fill-primary"/>
                    </div>
                    <div>
                        <p className="font-bold">{fields.address}</p>
                        <p className="font-light text-light-gray">{fields.addressSubtext}</p>
                    </div>
                </div>
            )}
            {fields.phoneNumber && (
                <div className="flex items-center gap-4">
                    <div>
                        <PhoneIcon className="h-10 w-10 stroke-primary -scale-x-100"/>
                    </div>
                    <div>
                        <p className="font-bold">{fields.phoneNumber}</p>
                        <p className="font-light text-light-gray">{fields.email}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactInfo