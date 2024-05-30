import { storyblokEditable } from "@storyblok/react";

const CourseTitle = ({ blok }) => (
  <h1 className="column feature" {...storyblokEditable(blok)}>
    {blok.title}
  </h1>
);

export default CourseTitle;
