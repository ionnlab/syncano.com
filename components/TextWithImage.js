import React from 'react';
import classNames  from 'classnames';

export default ({variant, theme, imageSrc, headline, textline, children}) => {
  const textWithImageClass = classNames({
    'text-with-image': true,
    'text-with-image--image-left': (variant == 'image-left'),
    'text-with-image--image-right': (variant == 'image-right'),
    'text-with-image--purple': (theme == 'purple'),
  });

  return (
    <div className={textWithImageClass}>
      <div className="inner">
        <div className="text-with-image__image">
          <div className="text-with-image__image__inner">
            <img src={imageSrc} alt={headline} />
          </div>
        </div>
        <div className="text-with-image__text">
          <h2>{headline}</h2>
          <p>{textline}</p>
          {children}
        </div>
      </div>
    </div>
  );
}
