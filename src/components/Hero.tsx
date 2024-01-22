import { TypeHeroImageFields } from "../../types/contentful";

const Hero = ({ data }: {data: { fields: TypeHeroImageFields }}) => {
    return (
        <section className={`w-full py-24 bg-[url('https:${data.fields.image.fields.image.fields.file.url}')] flex justify-center`}>
            <div className={`max-w-[${data.fields.contentMaxWidth}px]`}>
                <h2 className={`text-5xl font-bold text-[${data.fields.textColor?.value}]`}>{data.fields.headline}</h2>
            </div>
        </section>
    )
}

export default Hero
