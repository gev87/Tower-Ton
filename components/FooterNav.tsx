import { boxIcon, castleIcon, coinsIcon, friendsIcon, pouchIcon } from "@/public/icons";
import FooterButton from "./buttons";

function FooterNav() {
  return (
    <nav className="relative z-1 mt-auto flex h-[80px] w-full gap-[5px] px-[16px] py-[16px]">
      <FooterButton alt="castle" icon={castleIcon} label="Tower" />
      <FooterButton alt="coins" icon={coinsIcon} label="Tasks" />
      <FooterButton alt="box" icon={boxIcon} label="Box" />
      <FooterButton alt="friends" icon={friendsIcon} label="Friends" />
      <FooterButton alt="pouch" icon={pouchIcon} label="Burse" />
    </nav>
  );
}
export default FooterNav;