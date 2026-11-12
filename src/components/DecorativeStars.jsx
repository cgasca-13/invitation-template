const stars = [
  { image: "/assets/estrellas.png", className: "left-[6%] top-[3%] w-7 md:w-10" },
  { image: "/assets/estrellas 2.png", className: "right-[8%] top-[11%] w-12 md:w-16" },
  { image: "/assets/estrellas 2.png", className: "left-[18%] top-[22%] w-6 rotate-12 md:w-9" },
  { image: "/assets/estrellas.png", className: "right-[5%] top-[31%] w-6 md:w-9" },
  { image: "/assets/estrellas 2.png", className: "left-[3%] top-[43%] w-10 md:w-14" },
  { image: "/assets/estrellas.png", className: "right-[15%] top-[48%] w-8 -rotate-12 md:w-11" },
  { image: "/assets/estrellas.png", className: "right-[10%] top-[56%] w-8 md:w-12" },
  { image: "/assets/estrellas 2.png", className: "left-[8%] top-[68%] w-7 md:w-10" },
  { image: "/assets/estrellas 2.png", className: "right-[24%] top-[63%] w-6 rotate-6 md:w-9" },
  { image: "/assets/estrellas.png", className: "right-[4%] top-[79%] w-11 md:w-16" },
  { image: "/assets/estrellas.png", className: "left-[8%] top-[86%] w-8 -rotate-6 md:w-12" },
  { image: "/assets/estrellas 2.png", className: "left-[4%] top-[92%] w-9 md:w-12" },
];

export default function DecorativeStars() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-20 overflow-hidden"
    >
      {stars.map((star, index) => (
        <img
          key={`${star.image}-${index}`}
          src={star.image}
          alt=""
          className={`absolute h-auto opacity-80 ${star.className}`}
        />
      ))}
    </div>
  );
}
