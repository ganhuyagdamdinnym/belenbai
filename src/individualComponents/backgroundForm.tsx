type QuestionItem = {
  question: string;
  answer: string | null;
};

type CategoryItem = {
  category: string;
  questions: QuestionItem[];
};

type Props = {
  questions: CategoryItem[] | null;
  setQuestions: React.Dispatch<React.SetStateAction<CategoryItem[] | null>>;
};

export const BackgroundForm = (props: Props) => {
  const { questions, setQuestions } = props;

  if (!questions) return null;

  const updateAnswer = (
    categoryIndex: number,
    questionIndex: number,
    answer: string
  ) => {
    setQuestions((prev) => {
      if (!prev) return prev;

      const updated = [...prev];

      updated[categoryIndex] = {
        ...updated[categoryIndex],
        questions: updated[categoryIndex].questions.map((q, idx) =>
          idx === questionIndex ? { ...q, answer } : q
        ),
      };

      return updated;
    });
  };

  return (
    <div className="space-y-4">
      <div>
        <p className="font-semibold mb-2">Та хэдэн настай вэ?</p>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="age"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 0, "18 хүртэл")}
            />
            <span>18 хүртэл</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="age"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 0, "18-45")}
            />
            <span>18-45</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="age"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 0, "45-аас дээш")}
            />
            <span>45-аас дээш</span>
          </label>
        </div>
      </div>
      <div>
        <p className="font-semibold mb-2">Таны хүйс?</p>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 1, "Эрэгтэй")}
            />
            <span>Эрэгтэй</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="gender"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 1, "Эмэгтэй")}
            />
            <span>Эмэгтэй</span>
          </label>
        </div>
      </div>
      <div>
        <p className="font-semibold mb-2">Таны боловсролын түвшин?</p>
        <div className="flex flex-col gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="education"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 2, "Боловсролгүй")}
            />
            <span>Боловсролгүй</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="education"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 2, "Бага")}
            />
            <span>Бага</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="education"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 2, "Дунд")}
            />
            <span>Дунд</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="education"
              className="h-5 w-5 text-amber-500"
              onChange={() => updateAnswer(0, 2, "Дээд")}
            />
            <span>Дээд</span>
          </label>
        </div>
      </div>
    </div>
  );
};
