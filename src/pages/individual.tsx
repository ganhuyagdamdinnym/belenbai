import { SelectLocation } from "../components/selectLocation";
import { useState } from "react";
import { Form } from "../components/organizitioForm_one";

const Individual = () => {
  const [selectedAimag, setSelectedAimag] = useState<string>("");
  const [selectedSum, setSelectedSum] = useState<string>("");
  const [selectedBag, setSelectedBag] = useState<string>("");
  const [count, setCount] = useState<number>(1);

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

          {/* <div className="w-full flex flex-col">
            <p className="font-semibold text-[14px] sm:text-[18px]">
              Үйл ажиллагааны чиглэл
            </p>
            <input
              placeholder="Үйл ажиллагааны чиглэлээ бичнэ үү"
              className="w-full h-12 border border-gray-300 rounded-md p-4 text-sm sm:text-base"
            />
          </div> */}
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
                : "w-full"
            } bg-amber-500 h-full rounded-3xl transition-all duration-300`}
          />
        </div>

        {/* <div>{count === 2 ? <Form /> : null}</div> */}

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
