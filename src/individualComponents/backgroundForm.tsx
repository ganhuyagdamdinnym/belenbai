import { useState } from "react";

type Props = {
  setIsFilled: React.Dispatch<React.SetStateAction<boolean>>;
};

export const BackgroundForm = ({ setIsFilled }: Props) => {
  const data = [
    {
      question: "Та хэдэн настай вэ?",
      answers: ["18 хүртэл", "18-45", "45-аас дээш"],
    },
    {
      question: "Таны хүйс?",
      answers: ["Эрэгтэй", "Эмэгтэй"],
    },
    {
      question: "Таны боловсролын түвшин?",
      answers: ["Боловсролгүй", "Бага", "Дунд", "Дээд"],
    },
  ];

  const [answers, setAnswers] = useState<number[]>(Array(data.length).fill(-1));

  const handleSelect = (qIndex: number, optionIndex: number) => {
    const updated = [...answers];
    updated[qIndex] = optionIndex;
    setAnswers(updated);

    const filled = updated.every((v) => v !== -1);
    setIsFilled(filled);
  };

  return (
    <div className="space-y-4">
      <p className="text-[22px] font-semibold">Галын аюулгүй байдал</p>

      {data.map((questionItem, qIndex) => (
        <div key={qIndex}>
          <p className="font-normal mb-2">
            {qIndex + 1}. {questionItem.question}
          </p>

          <div className="flex flex-col gap-2">
            {questionItem.answers.map((option, optionIndex) => (
              <label
                key={optionIndex}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name={`question-${qIndex}`}
                  checked={answers[qIndex] === optionIndex}
                  onChange={() => handleSelect(qIndex, optionIndex)}
                  className="form-radio h-5 w-5 text-amber-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
