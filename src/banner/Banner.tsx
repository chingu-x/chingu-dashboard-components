interface BannerProps {
  imageLight: JSX.Element;
  imageDark: JSX.Element;
  height: string;
  width: string;
}

function Banner({ imageLight, imageDark, height, width }: BannerProps) {
  return (
    <>
      <div
        data-hide-on-theme="dark"
        className={`${height} ${width} relative shrink-0`}
      >
        {imageLight}
      </div>
      <div
        data-hide-on-theme="light"
        className={`${height} ${width} relative shrink-0`}
      >
        {imageDark}
      </div>
    </>
  );
}

export default Banner;
