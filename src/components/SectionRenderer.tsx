import type {
  TypeBannerFields,
  TypeBlogListFields,
  TypeCarouselFields,
  TypeFooterFields,
  TypeHeaderFields,
  TypeHeroImageFields,
  TypeImageAndTextFields,
  TypePageLandingFields,
  TypeSetOfCardFields,
  TypeSetOfTestimonialsFields,
} from "../../types/contentful-types";
import PageHeader from "./PageHeader";
import Hero from "./Hero";
import Banner from "./Banner";
import SetOfCards from "./SetOfCards";
import SetOfTestimonials from "./SetOfTestimonials";
import ImageAndText from "./ImageAndText";
import BlogList from "./BlogList/BlogList";
import Footer from "./Footer";
import Carousel from "./Carousel";
import Kameleoon from "./Kameleoon";

interface SectionRendererProps {
  section: TypePageLandingFields["sections"][number];
}

const SectionRenderer = ({ section }: SectionRendererProps) => {
  switch (section.sys.contentType.sys.id) {
    case "header":
      const headerFields = section.fields as TypeHeaderFields;
      return <PageHeader fields={headerFields} key={section.sys.id} />;
    case "heroImage":
      const heroFields = section.fields as TypeHeroImageFields;
      return <Hero fields={heroFields} key={section.sys.id} />;
    case "banner":
      const bannerFields = section.fields as TypeBannerFields;
      return <Banner fields={bannerFields} key={section.sys.id} />;
    case "setOfCard":
      const setOfCardsFields = section.fields as TypeSetOfCardFields;
      return <SetOfCards fields={setOfCardsFields} key={section.sys.id} />;
    case "setOfTestimonials":
      const setOfTestimonialsFields =
        section.fields as TypeSetOfTestimonialsFields;
      return (
        <SetOfTestimonials
          fields={setOfTestimonialsFields}
          key={section.sys.id}
        />
      );
    case "imageAndText":
      const imageAndTextFields = section.fields as TypeImageAndTextFields;
      return <ImageAndText fields={imageAndTextFields} key={section.sys.id} />;
    case "carousel":
      const carouselFields = section.fields as TypeCarouselFields;
      return <Carousel fields={carouselFields} key={section.sys.id} />;
    case "blogList":
      const blogListFields = section.fields as TypeBlogListFields;
      return <BlogList fields={blogListFields} key={section.sys.id} />;
    // case "kameleoonVariationContainer":
    //   return <Kameleoon section={section} key={section.sys.id} />;
    case "footer":
      const footerFields = section.fields as TypeFooterFields;
      return <Footer fields={footerFields} key={section.sys.id} />;
    default:
      return null;
  }
};

export default SectionRenderer;
