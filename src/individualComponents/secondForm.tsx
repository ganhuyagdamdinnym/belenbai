import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SecondForm = (props: Props) => {
  const { setIsFilled } = props;
  const data = [
    {
      question: " Та гамшгаас хамгаалах сургалтад хамрагдаж байсан уу",
    },
    {
      question: "Та гамшиг, аюулт үзэгдэл гэж юуг хэлдэгийг мэдэх үү?",
    },
    {
      question:
        "  Тухайлбал, гал түймрийн гарсан тухай мэдээллийг ямар дугаарт мэдэгдэхийг мэдэх үү?",
    },
    {
      question:
        " Та осол гэмтэлд өртсөн тохиолдолд өөртөө болон бусдад эмнэлгийн анхан шатны тусламж үзүүлж чадах уу?",
    },
    {
      question: "Та гэрээсээ гарахдаа цахилгаан хэрэгслээ шалгаж салгадаг уу?",
    },
    {
      question:
        " Би гэртээ хараа хяналтгүйгээр бага насны хүүхдээ үлдээдэггүй.",
    },
    {
      question:
        " Хөгжлийн бэрхшээлтэй болон өндөр настай хүнтэй амьдардаг бол гамшгаас хэрхэн хамгаалах арга замаа мэддэг уу?",
    },
    {
      question:
        " Таны амьдардаг орчинд хөгжлийн бэрхшээлтэй иргэдийн хэрэгцээт шаардлагыг хангасан шат, зам, гарцын дуут мэдээлэгчтэй юу?",
    },

    {
      question:
        "  Танай гэрт угаар мэдрэгч, галын дохиолол байдаг уу, ажиллаатай эсэх",
    },
    {
      question: "Та гал унтраагуул ажиллуулж чадах уу?",
    },
    {
      question: " Танай гэр бүлийн гишүүн хүн бүрд байх үүргэвчтэй юу?",
    },
    {
      question: " Өрхийн бэлэн байдлын төлөвлөгөөтэй уу?",
    },

    {
      question: "  Аюулын дараа цугларах талбай, байршлаа мэдэх үү?",
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
      <p className="text-[22px] font-semibold">Галын аюулгүй байдал</p>
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
