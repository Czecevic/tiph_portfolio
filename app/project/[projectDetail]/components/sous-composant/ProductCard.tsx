import Image from "next/image";
import { ProductCardProps } from "@/interfaces";

export const ProductCard = ({
  item,
  className = "w-5/12",
  imageClassName = "object-cover w-full rounded",
}: ProductCardProps) => (
  <div className={className}>
    <Image
      src={item.linkImg}
      alt={item.title}
      width={400}
      height={400}
      className={imageClassName}
    />
    <p className="text-xs mt-1 font-bold">{item.title}</p>
    <p className="text-[10px]">Price</p>
  </div>
);
