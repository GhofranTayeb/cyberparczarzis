//import React from 'react';
/*const Imageanimated = () => {
  return (
    <div>
      <img src="logo1.png" alt="Description de l'image" />
    </div>
  );
};
export default Imageanimated;*/
import React from 'react';
import { useTrail, animated } from 'react-spring';
const Imageanimated = () => {
  const images = [
    { id: 1, src: 'logo1.png', alt: 'Image 1' },
    { id: 2, src: 'logo2.png', alt: 'Image 2' },
    // Ajoutez autant d'objets que nécessaire pour chaque image
  ];
 const trail = useTrail(images.length, {
    from: { transform: 'translateX(-100px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
  });
return (
    <div>
      {trail.map((props, index) => (
        <animated.img
          key={images[index].id}
          style={props}
          src={images[index].src}
          alt={images[index].alt}
        />
      ))}
    </div>
  );
};
export default Imageanimated;
