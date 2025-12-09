import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: (result: any[]) => void;
};
export const FireSafe = (props: Props) => {
  const { setIsFilled, setResult } = props;
  const data = [
    {
      question: "Цахилгааны монтаж болон цахилгаан хэрэгсэл гэмтэлгүй юу?",
    },
    {
      question: " Галын аюулын дохиоллын систем хэвийн ажиллагаатай юу?",
    },
    {
      question:
        " Гал унтраагуурын ашиглах хугацаа, хадгалалтын байдалд шалгалт хийсэн тэмдэглэлтэй юу?",
    },
    {
      question:
        " Гал түймрийн аюулын үед ашиглах багаж хэрэгсэл нь бэлэн үү? /галын сарай бүрэн үү?/",
    },
    {
      question:
        " Шингэрүүлсэн хий /газ/ ашигладаг бол мэргэжлийн байгууллагаар холболт, угсралтыг хийлгэдэг үү?",
    },
  ];

  const [answers, setAnswers] = useState<number[]>(Array(data.length).fill(-1));

  const handleSelect = (index: number, value: number) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);

    const filled = updated.every((v) => v !== -1);
    setIsFilled(filled);

    if (filled) {
      const result = data.map((q, i) => ({
        category: "Галын аюулгүй байдал",
        question: q.question,
        answer: updated[i] === 0 ? "Тийм" : "Үгүй",
      }));

      setResult(result);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-[22px] font-semibold">Галын аюулгүй байдал</p>
      {data.map((e, index) => (
        <div key={index} className="">
          <p className="font-semibold mb-2">
            {index + 1}.{e.question}
          </p>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`question-${index}`}
                checked={answers[index] === 0}
                onChange={() => handleSelect(index, 0)}
                className="form-radio h-5 w-5 text-amber-500"
              />
              <span>Тийм</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`question-${index}`}
                checked={answers[index] === 1}
                onChange={() => handleSelect(index, 1)}
                className="form-radio h-5 w-5 text-amber-500"
              />
              <span>Үгүй</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
