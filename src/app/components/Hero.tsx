import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <section
      className="relative h-screen w-full flex overflow-hidden"
      id="home"
    >
      <div className="absolute inset-0 bg-[url('/grain.svg')] bg-center bg-no-repeat bg-cover animate-slowpulse -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black -z-20"></div>
      <div className="container flex flex-col items-center justify-center h-full z-0">
        <h1 className="text-6xl text-white font-bold">Hi, I&apos;m Kyle</h1>
        <h2 className="text-2xl text-white font-light">
          I&apos;m a software engineer
        </h2>
        <HeroButton />
      </div>
    </section>
  );
}
