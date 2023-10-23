import Image, { ImageProps } from "next/image";

export const PromoBanner = ({ src, alt }: ImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={0}
      height={0}
      sizes="100vw"
      className="w-full h-auto px-5"
    />
  );
};
