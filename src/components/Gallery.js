import Projects from "./Projects";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        {Projects.graphic.map((e, i, p) => {
          if (i <= (p.length / 4) * 1 - 1) {
            return (
              <Image
                className="h-auto max-w-full my-auto"
                src={e.src}
                alt={e.name}
                key={i}
              />
            );
          }
        })}
      </div>
      <div className="grid gap-4">
        {Projects.graphic.map((e, i, p) => {
          if (i <= (p.length / 4) * 2 - 1 && i > (p.length / 4) * 1 - 1) {
            return (
              <Image
                className="h-auto max-w-full my-auto"
                src={e.src}
                alt={e.name}
                key={i}
              />
            );
          }
        })}
      </div>
      <div className="grid gap-4">
        {Projects.graphic.map((e, i, p) => {
          if (i <= (p.length / 4) * 3 - 1 && i > (p.length / 4) * 2 - 1) {
            return (
              <Image
                className="h-auto max-w-full my-auto"
                src={e.src}
                alt={e.name}
                key={i}
              />
            );
          }
        })}
      </div>
      <div className="grid gap-4">
        {Projects.graphic.map((e, i, p) => {
          if (i <= (p.length / 4) * 4 - 1 && i > (p.length / 4) * 3 - 1) {
            return (
              <Image
                className="h-auto max-w-full"
                src={e.src}
                alt={e.name}
                key={i}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
