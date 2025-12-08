import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Prepare = (props: Props) => {
  const { setIsFilled } = props;
  const data = [
    {
      question:
        "Газар хөдлөлт, бусад гамшиг, аюулт үзэгдэл, ослын дараа гэрийнхэнтэйгээ холбоо барих боломжгүй үед хаана цуглахаа ярилцсан уу?",
    },
    {
      question:
        "  Газар хөдлөлтийн үед өрөөний аль хэсэг хамгийн аюул багатай болохыг олж мэдсэн үү?",
    },
    {
      question:
        "  Газар хөдлөлтийн чичирхийллийн үед унахаас сэргийлж гэрийн тавилга, хэрэгслийг тогтвортой байлгаж, бэхэлсэн үү?",
    },
    {
      question:
        "  Гэр бүлийн бүх гишүүдийн аюулгүй байдал, өндөр настан, өвчтэй, хөгжлийн бэрхшээлтэй хүн, бага насны хүүхдээ гамшгийн үед хэрхэн аюулгүй байрлалд шилжүүлэх, асрамжлах, хэрэгцээт эм тариа, асаргааны хэрэгсэл бэлэн байлгах тухай ярилцсан уу?",
    },
    {
      question:
        " Гэнэтийн аюулт үзэгдэл, ослын үед хэрэглэх гэр бүлийн багц/хүн нэг бүрийн үүргэвчинд байх зүйл бэлэн байгаа юу?",
    },
    {
      question:
        "   Гэнэтийн гамшиг, аюул үзэгдэл, ослын үед хэрэглэх тодорхой хэмжээний мөнгөн хуримтлалтай юу?",
    },
    {
      question:
        " Хамтдаа ярилцаж гаргасан өрхийн гамшгаас хамгаалах бэлэн байдлын төлөвлөгөөтэй юу?",
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
      <p className="text-[22px] font-semibold">Бэлтгэл, бэлэн байдал</p>
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
