import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import CourseTitle from "../components/CourseTitle";
import CourseDescription1 from "../components/CourseDescription";
import LanguageToggle from "../components/LanguageToggle";
import Hero from "../components/Hero";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  CourseTitle: CourseTitle,
  LanguageToggle: LanguageToggle,
  CourseDescription: CourseDescription1,
  Hero: Hero, 
  OshaHome: Page,
};

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
