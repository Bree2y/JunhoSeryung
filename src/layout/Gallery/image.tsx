const imageFiles = import.meta.glob('/src/assets/images/*.png', { eager: true });

const images = Object.keys(imageFiles)
  .filter((path) => path.match(/\d+\d\.png$/)) // 파일명 끝에 "00숫자.png" 패턴만 포함
  .map((path, index) => ({
    alt: `image${String(index + 1).padStart(2, '0')}`,
    source: (imageFiles[path] as { default: string }).default, // 경로 가져오기
    width: 640,
    height: 960,
  }));

export default images;
