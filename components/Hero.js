import { storyblokEditable, StoryblokComponent } from "@storyblok/react";


const Hero = ({ blok }) => (
    <div
    {...storyblokEditable(blok)}
    className={`${blok.layout === 'constrained' ? 'container mx-auto' : ''} min-h-[500px] relative flex items-end justify-center my-6 rounded-[5px] overflow-hidden`}
  >
    <div
      className="relative z-10 w-full text-center bg-gradient-to-t from-black/70 via-black/50 to-transparent py-6"
    >
      <h1 className="text-6xl text-white font-bold mb-3">
        {blok.headline}
      </h1>
      <h2 className="text-4xl text-white font-light">
        {blok.subheadline}
      </h2>
      
       <StoryblokComponent className="text-white" blok={blok.language[0]} key={blok.language[0]._uid}/>
      <div>{blok.description.flatMap((nestedBlok) => {
      
      return <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    })}</div>
    
    </div>
    <img
      src={blok.background_image.filename}
      alt={blok.background_image.alt}
      className="absolute top-0 left-0 z-0 w-full h-full object-cover"
    />
  </div>
);

export default Hero;

