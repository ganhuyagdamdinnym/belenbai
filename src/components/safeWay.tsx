import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: (result: any[]) => void;
};
export const Safeway = (props: Props) => {
  const { setIsFilled, setResult } = props;
  const data = [
    {
      question:
        " Барилгын давхар бүрийн аюулгүйн гарц, гарах хаалга, чиглэл заасан тэмдэг тэмдэглэгээтэй юу?",
    },
    {
      question:
        "Аюулгүйн гарц, хаалга чөлөөтэй эсэх? /цоожилсон бол түлхүүр хариуцсан нэг эзэнтэй юу/",
    },
    {
      question: "  Болзошгүй гамшгийн үед түр цугларах аюулгүйн талбайтай юу?",
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
        category: "Аюулгүйн зам гарц, талбай",
        question: q.question,
        answer: updated[i] === 0 ? "Тийм" : "Үгүй",
      }));

      setResult(result);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-[22px] font-semibold">Аюулгүйн зам гарц, талбай</p>
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
