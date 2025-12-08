import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
export const BackgroundKnowledge = (props: Props) => {
  const { setIsFilled } = props;
  const data = [
    {
      question:
        "Танай гэр бүлийнхэн оршин сууж буй газартаа тохиолдож болзошгүй гамшиг, аюулт үзэгдэл, ослын тухай мэдэх үү?",
    },
    {
      question:
        " Мэргэжлийн байгууллагаас сэрэмжлүүлж буй гамшиг, аюулт үзэгдэл, ослын тухай мэдээ мэдээллийг ойлгож, хүлээн авдаг уу?",
    },
    {
      question:
        "  Аливаа гамшиг, тухайлбал гал түймэр, үер, газар хөдлөлт, хүчтэй салхи шуурга, аянга, халдварт өвчний өмнө, үед, дараа юу хийх тухай танай гэр бүлийн ойлголт мэдлэг хангалттай сайн уу?",
    },
    {
      question:
        " Гал түймэр, бусад гамшиг, аюулт үзэгдэл, осол тохиолдсон үед яаралтай дуудлага өгөх утасны дугаарыг мэдэх үү?",
    },
    {
      question:
        "  Гал түймэр, газар хөдлөлт зэрэг гамшгийн үед гэр, байшингаас яаралтай гарах аюулгүйн гарц, замаа мэдэх үү?",
    },
  ];

  const [answers, setAnswers] = useState<number[]>(Array(data.length).fill(-1));

  const handleSelect = (qIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = value;
    setAnswers(newAnswers);

    const filled = newAnswers.every((a) => a !== -1);
    setIsFilled(filled);
  };

  return (
    <div className="space-y-4">
      <p className="text-[22px] font-semibold">
        Гэр бүлийн гишүүдийн ерөнхий мэдлэг ойлголт
      </p>
      {data.map((e, index) => (
        <div key={index} className="">
          <p className="font-normal mb-2">
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
