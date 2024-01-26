'use client'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import { TypeFooterFields } from "../../types/contentful"
import ImageWithFocalPoint from './ImageWithFocalPoint'
import PhoneIcon from './icons/PhoneIcon'
import MailIcon from './icons/MailIcon'
import ClockAltIcon from './icons/ClockAltIcon'
import LocationIcon from './icons/LocationIcon'

const Footer = ({ fields }: { fields: TypeFooterFields }) => {
    console.log(fields)
    return (
        <footer className='w-full mt-auto pt-12'>
            <div className='bg-primary-dark text-white p-6 flex flex-wrap justify-center items-center'>
                <div className='w-[480px] flex flex-col items-center text-center'>
                    <ImageWithFocalPoint fields={fields.logo.fields} />
                    <div className='mt-[18px] font-light leading-[24px]'>
                        {documentToReactComponents(fields.content)}
                    </div>
                    <div className='mt-[22px]'>
                        <em className='font-light'>
                            Follow Us:
                        </em>
                    </div>
                </div>
                {fields.navigation && (
                    <div className='w-full sm:w-[480px] flex flex-col items-center gap-[18px] mt-[45px]'>
                        <h4 className='text-[18px] font-black'>{fields.navigation.fields.title}</h4>
                        <hr className='w-full sm:w-[315px] border-b-1 border-blue-gray' />
                        <div className='text-blue-gray font-light grid grid-cols-2 mx-auto gap-x-[70px] gap-y-[6px]'>
                            {fields.navigation.fields.navigationItems.map((item) => (
                                    <Link key={item.sys.id} href={`/${item.fields.slug}`} className='hover:text-primary transition-colors'>
                                        {item.fields.label}
                                    </Link>
                            ))}
                        </div>
                    </div>
                )}
                {fields.contactInfo && (
                    <div className='w-full sm:w-[480px] flex flex-col items-center gap-[18px] mt-[45px]'>
                        {/* TODO add title to contact info */}
                        <h4 className='text-[18px] font-black'>{fields.contactInfo.fields.title || 'Contact Info'}</h4>
                        <hr className='w-full sm:w-[315px] border-b-1 border-blue-gray' />
                        <div className='flex flex-col items-center gap-[20px]'>
                            <div className='w-full flex gap-[20px] items-center'>
                                <PhoneIcon className='fill-primary stroke-primary h-[20px] w-[20px]' />
                                <p className='font-bold'>{fields.contactInfo.fields.phoneNumber}</p>
                            </div>
                            <div className='w-full flex gap-[20px] items-center'>
                                <MailIcon className='stroke-primary h-[22px] w-[22px]' />
                                <p className='font-light'>{fields.contactInfo.fields.email}</p>
                            </div>
                            <div className='w-full flex gap-[20px] items-center'>
                                <ClockAltIcon className='stroke-primary h-[22px] w-[22px]' />
                                <p className='font-light'>{fields.contactInfo.fields.hours}</p>
                            </div>
                            <div className='w-full flex gap-[20px] items-start'>
                                <LocationIcon className='fill-primary h-[20px] w-[20px]' />
                                <div>
                                    <p className='font-bold'>{fields.contactInfo.fields.address}</p>
                                    <p className='font-light'>{fields.contactInfo.fields.addressSubtext}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {fields.subscribe && (
                    <div className='w-full sm:w-[480px] flex flex-col items-center gap-[18px] mt-[45px]'>
                        <h4 className='text-[18px] font-black'>{fields.contactInfo.fields.title || 'Contact Info'}</h4>
                        <hr className='w-full sm:w-[315px] border-b-1 border-blue-gray' />
                        <div className='flex flex-col items-center gap-2'>
                            <p className='font-light'>Get latest updates and offers</p>
                            <div className='h-[47px] flex items-center'>
                                <input type="email" placeholder='E-Mail' className='h-full w-[230px] rounded-l-md px-[17px]' />
                                <button className='btn-primary h-full px-[15px] rounded-r-md'>Send</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </footer>
    )
}

export default Footer