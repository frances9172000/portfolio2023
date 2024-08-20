import Projects from "./Projects";
import Image from "next/image";

export default function Gallery({openFullScreen, setCloseImage}) {

  const onClick = (src) => {
    openFullScreen(src)
    setCloseImage(false)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        {Projects.graphic.map((e, i, p) => {
          if (i <= (p.length / 4) * 1 - 1) {
            return (
              <Image
                className="h-auto max-w-full my-auto cursor-pointer hover:scale-125 transition-all"
                src={e.src}
                alt={e.name}
                key={i}
                onClick={function() {onClick(e.src)}}
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
                className="h-auto max-w-full my-auto cursor-pointer hover:scale-125 transition-all"
                src={e.src}
                alt={e.name}
                key={i}
                onClick={function() {onClick(e.src)}}
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
                className="h-auto max-w-full my-auto cursor-pointer hover:scale-125 transition-all"
                src={e.src}
                alt={e.name}
                key={i}
                onClick={function() {onClick(e.src)}}
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
                className="h-auto max-w-full cursor-pointer hover:scale-125 transition-all"
                src={e.src}
                alt={e.name}
                key={i}
                onClick={function() {onClick(e.src)}}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
