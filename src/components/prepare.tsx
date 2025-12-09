import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
  setResult: (result: any[]) => void;
};
export const Prepare = (props: Props) => {
  const { setIsFilled, setResult } = props;
  const data = [
    {
      question:
        "Болзошгүй гамшгийн үед бие биедээ зарлан мэдээлэл хүргэх схем, утасны дугаарын жагсаалттай юу?",
    },
    {
      question:
        " Үер, усны аюулын үед ашиглах шуудайлсан элс, хайрга дайргын нөөц бүрдүүлсэн үү?",
    },
    {
      question:
        " Болзошгүй гамшиг, осол тохиолдсон үед холбоо барих утасны дугаар, хаяг байршлаа мэдэх үү?",
    },
    {
      question: " Болзошгүй гамшгийн үед ашиглах хүн нэг бүрийн үүргэвчтэй юу?",
    },
    {
      question:
        " Газар хөдлөлтийн аюулаас урьдчилсан сэргийлэх чиглэлээр гэр орон, ажлын байрны тавилга, эд хогшлыг байрлуулах, бэхлэх арга хэмжээг авсан уу?",
    },
    {
      question:
        " Гэнэтийн гамшиг, аюулт үзэгдэл, ослын үед хэрэглэх санхүүгийн нөөцтэй юу?",
    },
    {
      question:
        "Гамшгийн эрсдэлийн үнэлгээний мэдээлэлд суурилсан гамшгаас хамгаалах төлөвлөгөөтэй юу?",
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
        category: "Бэлтгэл, бэлэн байдал",
        question: q.question,
        answer: updated[i] === 0 ? "Тийм" : "Үгүй",
      }));

      setResult(result);
    }
  };

  return (
    <div className="space-y-4">
      <p className="text-[22px] font-semibold">Бэлтгэл, бэлэн байдал</p>
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
