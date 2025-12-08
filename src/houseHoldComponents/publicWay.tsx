import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
export const PublicWay = (props: Props) => {
  const { setIsFilled } = props;
  const data = [
    {
      question:
        " Танай хашаа, орон сууцны гадна талд галын тусгай зориулалтын автомашин чөлөөтэй нэвтрэх зам, зай талбайтай юу?",
    },
    {
      question:
        "  Та бүхэн гэрийн ойр байрлах Иргэдийн түр цугларах аюулгүй талбайн байрлалыг мэдэх үү? Очиж шалгасан уу?.",
    },
    {
      question:
        "  Хөрш айл, баг, хороо, Сууц өмчлөгчийн холбоотойгоо гал түймэр, үер, хүчтэй салхи шуурга, халдварт өвчин, газар хөдлөлт, химийн бодисын осол, дэлбэрэлт зэрэг олон төрлийн гамшгаас урьдчилан сэргийлэхэд санаачилга гарган хамтран ажилладаг уу?",
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
