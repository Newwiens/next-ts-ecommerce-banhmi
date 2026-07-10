import Image from "next/image";

export default function Hero() {
  return (
    <section className="z-20 relative isolate min-h-[430px] w-full overflow-hidden">
      <Image
        src="/images/banner/sg-banner.png"
        alt="Saigon skyline banner"
        width={1800}
        height={800}
        className="object-cover object-center"
      />

      <div className="z-10 absolute inset-0 ">
        <h1 className="text-3xl font-black uppercase text-red-500">Banh Mi</h1>
        <p className="text-sm font-semibold uppercase">Vietnam</p>
      </div>

      <div className="absolute bottom-0 left-0 z-10 h-[260px] w-[340px]">
        <Image
          src="/images/stock/Banhmi-stone.png"
          alt="hero banhmi"
          width={1450}
          height={700}
          className="object-contain object-right-bottom drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
