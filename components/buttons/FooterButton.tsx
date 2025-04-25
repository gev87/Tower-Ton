import Image, { type StaticImageData } from "next/image";

interface FooterButtonProps {
  icon: StaticImageData;
  alt: string;
  label: string;
}

function FooterButton({ icon, alt, label }: FooterButtonProps) {
  return (
    <button className="flex h-full w-full cursor-pointer flex-col items-center justify-between rounded-[4px] bg-[#3E4B4F] py-[5px] text-[#B6E0ED]">
      <Image
        src={icon}
        alt={alt}
        width={icon.width}
        height={icon.height}
        priority
      />
      <div className="text-[10px] leading-[120%]">{label}</div>
    </button>
  );
}

export default FooterButton;
