import { useState } from "react";

export const Form = () => {
  const data = [
    { question: "sAUIYYIPAdsu" },
    { question: "sAUIYYIPAdsu" },
    { question: "sAUIYYIPAdsu" },
  ];

  // Хэрвээ хүсвэл сонголтыг хадгалах state
  const [answers, setAnswers] = useState<number[]>(Array(data.length).fill(-1));
  // -1 = ямар ч сонголт байхгүй, 0 = "tiim", 1 = "ugui"

  const handleSelect = (qIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="space-y-4">
      {data.map((e, index) => (
        <div key={index} className="">
          <p className="font-semibold mb-2">{e.question}</p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`question-${index}`}
                checked={answers[index] === 0}
                onChange={() => handleSelect(index, 0)}
                className="form-radio h-5 w-5 text-amber-500"
              />
              <span>tiim</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`question-${index}`}
                checked={answers[index] === 1}
                onChange={() => handleSelect(index, 1)}
                className="form-radio h-5 w-5 text-amber-500"
              />
              <span>ugui</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
