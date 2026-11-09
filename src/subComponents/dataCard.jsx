import { useState } from "react";
import { cData, categories } from "../data/SwiperData";
import { MoveRight } from "lucide-react";
import CategoryModel from "../components/CategoryModel";

const DataCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="px-5 py-6">
      <h2 className="text-[#ECECEC] text-3xl mb-6">Shop By Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-125">
        <a
          href={cData[0].link}
          className="md:col-span-2 md:row-span-2 relative rounded-xl overflow-hidden group bg-cover bg-center"
          style={{ backgroundImage: `url(${cData[0].img})` }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all p-6 flex flex-col justify-end">
            <p className="font-bold text-3xl text-[#ECECEC]">{cData[0].name}</p>
            <p className="text-sm text-gray-300">{cData[0].slug}</p>
          </div>
        </a>

        <a
          href={cData[1].link}
          className="relative rounded-xl overflow-hidden group bg-cover bg-center"
          style={{ backgroundImage: `url(${cData[1].img})` }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all p-4 flex flex-col justify-end">
            <p className="font-bold text-xl text-[#ECECEC]">{cData[1].name}</p>
            <p className="text-xs text-gray-300">{cData[1].slug}</p>
          </div>
        </a>

        <a
          href={cData[2].link}
          className="relative rounded-xl overflow-hidden group bg-cover bg-center"
          style={{ backgroundImage: `url(${cData[2].img})` }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all p-4 flex flex-col justify-end">
            <p className="font-bold text-xl text-[#ECECEC]">{cData[2].name}</p>
            <p className="text-xs text-gray-300">{cData[2].slug}</p>
          </div>
        </a>
        <a
          href={cData[3].link}
          className="md:col-span-2 relative rounded-xl overflow-hidden group bg-cover bg-center"
          style={{ backgroundImage: `url(${cData[3].img})` }}
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all p-4 flex flex-col justify-end">
            <p className="font-bold text-xl text-[#ECECEC]">{cData[3].name}</p>
            <p className="text-xs text-gray-300">{cData[3].slug}</p>
          </div>
        </a>
        {cData[4] && (
          <a
            href={cData[4].link}
            className="relative rounded-xl overflow-hidden group bg-cover bg-center"
            style={{ backgroundImage: `url(${cData[4].img})` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all p-4 flex flex-col justify-end">
              <p className="font-bold text-xl text-[#ECECEC]">
                {cData[4].name}
              </p>
              <p className="text-xs text-gray-300">{cData[4].slug}</p>
            </div>
          </a>
        )}
      </div>
      <div
        className="w-full h-20 flex text-[#ECECEC] items-center justify-center gap-2 bg-[#641411] rounded-xl cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        See All Categories <MoveRight />
      </div>
      <CategoryModel
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        categories={categories}
      />
    </div>
  );
};

export default DataCard;
