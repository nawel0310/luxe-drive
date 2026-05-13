export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  const basePath = "/luxe-drive";
  return `${basePath}${src}`;
}