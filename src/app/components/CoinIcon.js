import * as React from 'react';

export default function CoinIcon({icon, fallback}) {
  let imgRef;
  const iconSrc =`./icons/${icon}`;
  return <img src={iconSrc}
    ref={(img) => imgRef = img}
    onError={() => imgRef.src = fallback} />
}
