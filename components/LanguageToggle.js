import { storyblokEditable } from "@storyblok/react";

const LanguageToggle = ({ blok }) => (
  <div className="text-white" {...storyblokEditable(blok)}>
    {blok.Option1}
    {blok.language.toString()}
    {blok.Option2}
  </div>
);

export default LanguageToggle;
