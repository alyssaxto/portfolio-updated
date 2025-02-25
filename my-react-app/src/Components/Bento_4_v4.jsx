import { cn } from '../lib/cn';  // Ensure correct import

export const Cell = ({ src }) => {
  return (
    <div className="size-full rounded-lg overflow-hidden bg-zinc-200 dark:bg-zinc-900">
      <img
        src={src}
        alt="Bento Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const cells = [
  { id: 1, src: "../src/assets/bp/1.jpg" },
  { id: 2, src: "../src/assets/bp/2.jpg" },
  { id: 3, src: "../src/assets/bp/3.jpg" },
  { id: 4, src: "../src/assets/bp/4.jpg" }
];

//======================================
export const Bento_4_v4 = () => {
  return (
    <div className="grid md:grid-cols-6 gap-2 p-4">
      {/* Big box (Top Left) */}
      <div className="md:col-span-4 md:row-span-2 h-[300px] md:h-[400px]">
        <Cell src={cells[0].src} />
      </div>
      {/* Small box (Top Right) */}
      <div className="md:col-span-2 h-[140px] md:h-[200px]">
        <Cell src={cells[1].src} />
      </div>
      {/* Small box (Middle Right) */}
      <div className="md:col-span-2 h-[140px] md:h-[200px]">
        <Cell src={cells[2].src} />
      </div>
      {/* Full-width box (Bottom) */}
      <div className="md:col-span-6 h-[180px] md:h-[250px]">
        <Cell src={cells[3].src} />
      </div>
    </div>
  );
};
