import { SelectLocation } from "../components/selectLocation";
import { useState } from "react";
import { Form } from "../components/organizitioForm_one";
const Organization = () => {
  const [selectedAimag, setSelectedAimag] = useState<string>("");
  const [selectedSum, setSelectedSum] = useState<string>("");
  const [selectedBag, setSelectedBag] = useState<string>("");
  const [count, setCount] = useState<number>(1);
  return (
    <div className="w-screen h-screen flex flex-col items-center py-6 gap-6">
      <p className="font-bold text-[24px] w-[900px] text-center ">
        Хуулийн этгээд, аж ахуйн нэгж, байгууллага гамшгийн бэлэн байдлаа шалгах
        хяналтын хуудас
      </p>

      {count === 1 ? (
        <div>
          <div className="w-[900px]">
            <p className="font-semibold">
              Байгууллагын үйл ажиллагаа явуулж буй хаягийн мэдээлэл
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
          <div className="w-[900px] flex flex-col">
            <p className="font-semibold">Үйл ажиллагааны чиглэл</p>
            <input
              placeholder="Үйл ажиллагааны чиглэлээ бичнэ үү"
              className="w-full h-12 border-1 border-gray-300 rounded-md p-4"
            />
          </div>
        </div>
      ) : null}

      <div className="w-[900px] flex flex-col gap-4">
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
            } bg-amber-500 h-full rounded-3xl`}
          />
        </div>
        <div>
          <Form />
        </div>
        <div className="w-full flex justify-between">
          {count != 1 ? (
            <button
              onClick={() => setCount(count - 1)}
              className="px-3 py-1 bg-gray-600 rounded-md"
            >
              <p className="text-white font-semibold">Өмнөх</p>
            </button>
          ) : null}
          <button
            onClick={() => setCount(count + 1)}
            className="px-3 py-1 bg-amber-500 rounded-md"
          >
            <p className="text-white font-semibold">Дараах</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Organization;
