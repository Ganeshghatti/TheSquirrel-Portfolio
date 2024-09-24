import gsap from "gsap";

export default function Hero() {
  return (
    <div className="w-screen">
      <section className="h-screen flex items-center justify-center" id="sec1">
        <h1 className="text-4xl font-bold">Welcome to Squirrel World</h1>
      </section>
      <section className="h-screen flex items-center justify-center" id="sec2">
        <h1 className="text-4xl font-bold">Explore the Forest</h1>
      </section>
      <section className="h-screen flex items-center justify-center" id="sec3">
        <h1 className="text-4xl font-bold">Meet the Squirrel</h1>
      </section>
      <section className="h-screen flex items-center justify-center" id="sec4">
        <h1 className="text-4xl font-bold">Adventure Awaits</h1>
      </section>
    </div>
  );
}
