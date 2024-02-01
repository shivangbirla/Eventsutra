import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-slate-500">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          {/* <Image
            src="/assets/images/logo.svg"
            alt="logo"
            width={128}
            height={38}
          /> */}
          <h3 className="text-semibold text-[24px]">EVENTS</h3>
        </Link>

        <p>2023 Events. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
