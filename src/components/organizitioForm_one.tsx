import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: (result: any[]) => void;
  initialAnswers?: number[];
};
export const Form = (props: Props) => {
  const { setIsFilled, setResult, initialAnswers } = props;
  const data = [
    {
      question: "Ажилчдаа тогтмол гамшгаас хамгаалах сургалтад хамруулдаг уу?",
    },
    {
      question:
        "Ажилчид нь эмнэлгийн анхны тусламж үзүүлэх мэдлэг, чадвартай юу?",
    },
    { question: "Танай байгууллагын ажилчид гал унтраагуур ашиглаж чадах уу?" },
    {
      question:
        " Газ ашигладаг уу? Тийм бол алдагдсан тохиолдолд хийг хаах, унтраах арга хэмжээ авч чадах уу?",
    },
    {
      question:
        "Гамшгийн аюулын дуут дохио дуугарахад юу хийх ёстойг мэдэх үү?",
    },
    {
      question:
        "Танай байгууллага гамшгийн эрсдэлийн үнэлгээ хийлгэж байсан уу?",
    },
    {
      question:
        " Гамшгаас хамгаалах тухай хуульд зааснаар байгууллагын төсвийн 1 хувийг гамшгаас урьдчилан сэргийлэх үйл ажиллагаанд зарцуулах ёстой. Танай байгууллага тус заалтыг хэрэгжүүлж ажилладаг уу?",
    },
  ];

  const [answers, setAnswers] = useState<number[]>(
    initialAnswers ?? Array(data.length).fill(-1)
  );

  const handleSelect = (index: number, value: number) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);

    const filled = updated.every((v) => v !== -1);
    setIsFilled(filled);

    if (filled) {
      const result = data.map((q, i) => ({
        category: "Ерөнхий мэдлэг",
        question: q.question,
        answer: updated[i] === 0 ? "Тийм" : "Үгүй",
      }));

      setResult(result);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-[22px] font-semibold">
        Ерөнхий мэдлэг ойлголт, чадвар
      </p>
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
