import Head from "next/head";


import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  story = useStoryblokState(story);
  

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export async function getStaticProps() {
  let slug = "osha";
  let sbParams = {
    version: "published", // or 'published'
  };
 

  const storyblokApi = getStoryblokApi();
 
  let { data } = await storyblokApi.get(`cdn/stories/${slug}?token=${process.env.storyblokApiToken}`, sbParams);
  
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600,
  };
}
