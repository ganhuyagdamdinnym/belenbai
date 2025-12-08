import { SelectLocation } from "../components/selectLocation";
import { useState } from "react";

import { BackgroundKnowledge } from "../houseHoldComponents/backgroundKnowledge";
import { FireSafe } from "../houseHoldComponents/fireSafe";
import { Prepare } from "../houseHoldComponents/prepare";
import { PublicWay } from "../houseHoldComponents/publicWay";

const Household = () => {
  const [selectedAimag, setSelectedAimag] = useState<string>("");
  const [selectedSum, setSelectedSum] = useState<string>("");
  const [selectedBag, setSelectedBag] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const ClickOnNext = () => {
    if (count === 1 && selectedBag == "") {
      return;
    } else if (count == 2 && isFilled == false) {
      return;
    } else if (count == 3 && isFilled == false) {
      return;
    } else if (count == 4 && isFilled == false) {
      return;
    } else if (count == 5 && isFilled == false) {
      return;
    }
    setCount(count + 1);
    setIsFilled(false);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-6 gap-6 px-4">
      <p className="font-bold text-[16px] sm:text-[24px] max-w-[900px] text-center">
        Өрхийн гамшгийн бэлэн байдлаа шалгах “Аюулгүй өрх” хяналтын хуудас
      </p>
      {count === 1 && (
        <div className="w-full max-w-[900px] flex flex-col gap-6">
          <div className="w-full">
            <p className="font-semibold text-[14px] sm:text-[18px]">
              Өрхийн мэдээлэл
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
              count === 1
                ? "w-1/5"
                : count === 2
                ? "w-2/5"
                : count === 3
                ? "w-3/5"
                : count === 4
                ? "w-4/5"
                : count === 5
                ? "w-5/5"
                : "w-full"
            } bg-amber-500 h-full rounded-3xl transition-all duration-300`}
          />
        </div>

        <div>
          {count === 2 ? (
            <BackgroundKnowledge setIsFilled={setIsFilled} />
          ) : count === 3 ? (
            <FireSafe setIsFilled={setIsFilled} />
          ) : count === 4 ? (
            <Prepare setIsFilled={setIsFilled} />
          ) : count === 5 ? (
            <PublicWay setIsFilled={setIsFilled} />
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

          {count === 5 ? (
            <button className="px-4 py-2 bg-green-600 rounded-md">
              <p className="text-white font-semibold">Хариултыг илгээх</p>
            </button>
          ) : (
            <button
              onClick={ClickOnNext}
              className="px-4 py-2 bg-amber-500 rounded-md"
            >
              <p className="text-white font-semibold">Дараах</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Household;
