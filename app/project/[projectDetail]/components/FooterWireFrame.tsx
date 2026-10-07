import Image, { StaticImageData } from "next/image";
import { FooterInfo } from "@/public/data/data";

interface FooterWireFrameProps {
  nysos: StaticImageData | string;
}

export const FooterWireFrame = ({ nysos }: FooterWireFrameProps) => {
  return (
    <footer className="p-4 bg-white text-[9px] space-y-4">
      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {FooterInfo.map((info) => (
          <div key={info.id}>
            <p className="font-bold mb-1">{info.title}</p>
            <ul className="space-y-0.5 text-gray-500">
              {info.links.map((link, idx) => (
                <li key={idx}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-2 flex flex-col items-center border-t border-gray-100">
        <div className="text-center">
          <span className="font-serif italic font-bold text-2xl tracking-wide text-blue-900 block">
            <Image
              src={nysos}
              width={160}
              height={40}
              alt="Logo Nysos"
              className="w-auto h-10 object-contain mx-auto"
            />
          </span>
        </div>
      </div>
    </footer>
  );
};
