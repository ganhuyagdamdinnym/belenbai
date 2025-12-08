import { useState } from "react";
type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
};
export const FireSafe = (props: Props) => {
  const { setIsFilled } = props;
  const data = [
    {
      question:
        " Гэртээ нэг залгуураас 2-оос илүү олон цахилгаан хэрэгсэл хамт залгахгүй байж цахилгааны хэт ачааллаас сэргийлдэг үү?",
    },
    {
      question:
        "Танай гэрт гэмтсэн, шалбарсан, зарим хэсэг нь хайлсан уртасгагч залгуур, унтраалга, бусад гэмтэлтэй цахилгаан тоног төхөөрөмж байхгүй юу?",
    },
    {
      question:
        " Танайд гал түймрийн утаа мэдрэх төхөөрөмж, галын дохиолол бий юу?",
    },
    {
      question:
        "  Танай угаарын хийн мэдрэгч хэвийн ажиллаж байгаа (Хувийн орон сууц, гэрт амьдардаг бол)",
    },
    {
      question:
        "Гал асаах, зул өргөх, арц хүж уугиулах, лаа асаах, үнсээ асгах зэрэг тохиолдолд гал алдахаас үргэлж сэргийлдэг.",
    },
    {
      question:
        "   Цахилгаан зуух, хийн зуух, хийн халаалт зэргийг хэрэглэхдээ аюулгүй байх нөхцөлийг гэр бүлдээ зааж тайлбарлаж өгдөг үү?",
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
