import { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/image';



const PhotoGallery = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  // "좌측 컬럼"에 들어갈 이미지 목록
  const leftImages = images.slice(0, visibleCount).filter((_, i) => i % 2 === 0);
  // "우측 컬럼"에 들어갈 이미지 목록
  const rightImages = images.slice(0, visibleCount).filter((_, i) => i % 2 === 1);

  // react-spring 트랜지션: 좌측/우측 각각 적용
  const leftTransitions = useTransition(leftImages, {
    from: { opacity: 0, transform: 'translateY(10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
    config: { duration: 300 },
    keys: (image) => image.source + '_left',
  });

  const rightTransitions = useTransition(rightImages, {
    from: { opacity: 0, transform: 'translateY(10px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(-10px)' },
    config: { duration: 300 },
    keys: (image) => image.source + '_right',
  });

  const loadMoreImages = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div>
      <Gallery>
        <div style={{ display: 'flex', gap: '4px' }}>
          {/* 왼쪽 컬럼 */}
          <div style={{ flex: 1 }}>
            {leftTransitions((style, image) => (
              <animated.div key={image.source} style={{ ...style, marginBottom: 4 }}>
                <Item
                  cropped
                  original={image.source}
                  thumbnail={image.source}
                  width={image.width}
                  height={image.height}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                      src={image.source}
                      alt={image.alt}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        display: 'block',
                      }}
                    />
                  )}
                </Item>
              </animated.div>
            ))}
          </div>

          {/* 오른쪽 컬럼 */}
          <div style={{ flex: 1 }}>
            {rightTransitions((style, image) => (
              <animated.div key={image.source} style={{ ...style, marginBottom: 4 }}>
                <Item
                  cropped
                  original={image.source}
                  thumbnail={image.source}
                  width={image.width}
                  height={image.height}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      onClick={open}
                      src={image.source}
                      alt={image.alt}
                      style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'cover',
                        cursor: 'pointer',
                        display: 'block',
                      }}
                    />
                  )}
                </Item>
              </animated.div>
            ))}
          </div>
        </div>
      </Gallery>

      {/* 더보기 버튼 */}
      {visibleCount < images.length && (
        <button
          onClick={loadMoreImages}
          style={{
            marginTop: '16px',
            padding: '8px 16px',
            fontSize: '12px',
            borderRadius: '4px',
            border: '1px solid #dfdfdf',
            background: '#fff',
            cursor: 'pointer',
            width: '100%',
          }}
        >
         VIEW MORE
        </button>
      )}
    </div>
  );
};

export default PhotoGallery;
