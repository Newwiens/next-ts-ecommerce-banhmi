import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import OrderBtn from "../ui/OrderBtn";

export default function Header() {
  return (
    <header className="p-4 flex h-auto justify-between items-center">
      <Link href="/">
        <Image
          src="/images/logo/bami-logo.png"
          alt="Bá mì Vietnam"
          width={100}
          height={100}
        />
      </Link>

      <Navbar />

      <OrderBtn />
    </header>
  );
}
