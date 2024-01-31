import ImageWithFocalPoint from "./ImageWithFocalPoint"
import Heading from "./Heading"

const BlogPostHeader = ({ fields, createdAt }: { fields: any, createdAt: string }) => {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="flex-shrink-0 ">
                <ImageWithFocalPoint fields={fields.featuredImage.fields} className="w-full aspect-[2.11/1] h-auto object-cover rounded-sm"/>
            </div>
            <div className="flex flex-col mt-[22px]">
                <Heading size='h3' className="font-black text-[22px] leading-[26px] lg:text-[26px] lg:leading-[31px] xl:text-[30px] xl:leading-[38px]">{fields.title}</Heading>
                <div className="flex flex-col md:flex-row items-start md:items-center text-light-gray leading-[24px] gap-[3px] lg:gap-[22px] mt-[8px]">
                    <p className=""><span className="font-bold text-black">Date:</span> {new Date(createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</p>
                    <div className="h-[18px] border-l hidden md:block"></div>
                    <p className=""><span className="font-bold text-black">Category:</span> {fields.blogTopic.fields.label}</p>
                </div>
                <hr className="mt-[18px]" />
            </div>
        </div>
    )
}

export default BlogPostHeader