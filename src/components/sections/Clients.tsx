"use client";

const CLIENTS = [
  {
    id: 1,
    name: "Sound Blaster",
    // Clean SVG logo representation
    logo: (
      <div className="flex flex-col items-center justify-center border-2 border-black px-3 py-1 text-center font-black leading-tight tracking-tighter text-black">
        <span className="text-sm uppercase tracking-widest">SOUND</span>
        <span className="text-base uppercase tracking-tighter">BLASTER</span>
      </div>
    ),
  },
  {
    id: 2,
    name: "Creative Commons",
    logo: (
      <div className="flex items-center gap-1.5 font-bold text-black">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-black text-xs font-black">
          cc
        </span>
        <span className="text-xs font-extrabold uppercase tracking-tight leading-none text-left">
          creative
          <br />
          commons
        </span>
      </div>
    ),
  },
  {
    id: 3,
    name: "Salming",
    logo: (
      <span className="text-xl font-black italic tracking-widest text-black uppercase">
        SALMING
      </span>
    ),
  },
  {
    id: 4,
    name: "Rackspace",
    logo: (
      <span className="text-xl font-bold tracking-tight text-black lowercase">
        rackspace<span className="text-xs align-super font-normal">®</span>
      </span>
    ),
  },
  {
    id: 5,
    name: "Angular",
    logo: (
      <div className="flex items-center gap-2 text-black">
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-black"
          aria-hidden="true"
        >
          <path d="M12 2L2 5.5l1.5 13.5L12 22l8.5-3L22 5.5 12 2zm0 3.2l5.3 11.8h-2.2l-1.1-2.7h-4l-1.1 2.7H6.7L12 5.2zm-1.3 7.3h2.6L12 9.5l-1.3 3z" />
        </svg>
        <span className="text-lg font-bold tracking-tight text-black">
          Angular
        </span>
      </div>
    ),
  },
];

export function Clients() {
  // Duplicate for an infinite, continuous marquee loop
  const duplicatedClients = [...CLIENTS, ...CLIENTS];

  return (
    <section
      id="clients"
      className="relative w-full overflow-hidden bg-bg-alt py-20 sm:py-24 select-none"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#e9204f]">
            Partners & Sponsors
          </span>
          <h2 className="mt-2 text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight text-white">
            Our Clients
          </h2>
          <div className="mt-3.5 h-[3px] w-12 rounded-full bg-[#e9204f]" />
        </div>
      </div>

      {/* Infinite Slow-Motion Logo Track */}
      <div className="relative mt-14 w-full overflow-hidden">
        {/* Soft edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-bg-alt to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-bg-alt to-transparent" />

        {/* Marquee Wrapper with Pause on Hover */}
        <div className="group flex w-max gap-5 hover:[animation-play-state:paused]">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center gap-5 animate-marquee">
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.id}-${index}`}
                className="flex h-24 w-52 sm:h-28 sm:w-60 shrink-0 items-center justify-center rounded-xl bg-white px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {client.logo}
              </div>
            ))}
          </div>

          {/* Track 2 (Clone for seamless loop) */}
          <div
            aria-hidden="true"
            className="flex shrink-0 items-center gap-5 animate-marquee"
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`clone-${client.id}-${index}`}
                className="flex h-24 w-52 sm:h-28 sm:w-60 shrink-0 items-center justify-center rounded-xl bg-white px-6 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Embedded CSS for smooth infinite linear translation */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}
