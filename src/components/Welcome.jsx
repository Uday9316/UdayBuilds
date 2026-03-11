import { useRef } from 'react';

const renderText = (text, className, baseWeight =400)=>{
 return [...text].map((char, i)=>(
  <span
  key={i}
  className={className}
  style={{fontVariationSettings: `'wght' ${baseWeight}`}}
  >
  {char === " " ? "\u00A0" : char}
  </span>
 ));
};
const Welcome = () => {
  const subtitleRef = useRef(null);
  return (
  <section id="welcome">
   <p ref={subtitleRef}>
    {renderText("Hey, I'm Uday!", 'text-3xl font-georama', 100)}</p>
   <div className='small-screen'>
    <p>This app is not available on mobile devices.</p>
   </div>
  </section>
  )
}

export default Welcome