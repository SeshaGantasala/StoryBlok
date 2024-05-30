import { storyblokEditable } from "@storyblok/react";
import { renderRichText } from "@storyblok/react";
import parse from 'html-react-parser'

const CourseDescription1 = ({ blok }) => (
  <div  {...storyblokEditable(blok)}>
    {console.log(blok.description)}
    <div className="text-white font-light">{parse(renderRichText(blok.description))}</ div>
    <div className="text-white font-bold">{parse(renderRichText(blok.benefits))}</ div>
  </div>
);

export default CourseDescription1;
