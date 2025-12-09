import { SelectLocation } from "../components/selectLocation";
import { useState } from "react";

import { BackgroundForm } from "../individualComponents/backgroundForm";
import { SecondForm } from "../individualComponents/secondForm";

const Individual = () => {
  const [selectedAimag, setSelectedAimag] = useState<string>("");
  const [selectedSum, setSelectedSum] = useState<string>("");
  const [selectedBag, setSelectedBag] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-6 gap-6 px-4">
      <p className="font-bold text-[16px] sm:text-[24px] max-w-[900px] text-center">
        Иргэний гамшгаас хамгаалах ойлголт, мэдлэгийг шалгах асуумж
      </p>
      {count === 1 && (
        <div className="w-full max-w-[900px] flex flex-col gap-6">
          <div className="w-full">
            <p className="font-semibold text-[14px] sm:text-[18px]">
              Иргэний оршин сууж буй хаягийн мэдээлэл
            </p>
            <SelectLocation
              setSelectedAimag={setSelectedAimag}
              selectedAimag={selectedAimag}
              setSelectedSum={setSelectedSum}
              selectedSum={selectedSum}
              setSelectedBag={setSelectedBag}
              selectedBag={selectedBag}
            />
          </div>
        </div>
      )}

      <div className="w-full max-w-[900px] flex flex-col gap-4">
        <div className="w-full h-4 bg-gray-300 rounded-3xl">
          <div
            className={`${
              count === 1 ? "w-1/2" : count === 2 ? "w-2/2" : "w-full"
            } bg-amber-500 h-full rounded-3xl transition-all duration-300`}
          />
        </div>

        <div>
          {count === 1 ? (
            <BackgroundForm setIsFilled={setIsFilled} />
          ) : count === 2 ? (
            <SecondForm setIsFilled={setIsFilled} />
          ) : null}
        </div>

        <div className="w-full flex justify-between">
          {count !== 1 ? (
            <button
              onClick={() => setCount(count - 1)}
              className="px-4 py-2 bg-gray-600 rounded-md"
            >
              <p className="text-white font-semibold">Өмнөх</p>
            </button>
          ) : (
            <div></div>
          )}

          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-amber-500 rounded-md"
          >
            <p className="text-white font-semibold">Дараах</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Individual;
