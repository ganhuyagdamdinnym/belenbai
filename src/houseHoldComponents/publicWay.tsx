type QuestionItem = {
  question: string;
  answer: string | null;
};

type CategoryItem = {
  category: string;
  questions: QuestionItem[];
};

type Props = {
  questions: CategoryItem | null;
  setQuestions: React.Dispatch<React.SetStateAction<CategoryItem[] | null>>;
};

export const PublicWay = (props: Props) => {
  const { questions, setQuestions } = props;
  const handleSelect = (questionIndex: number, value: number) => {
    if (!questions) return;

    setQuestions((prev) => {
      if (!prev) return prev;

      // find which category we are modifying
      const categoryIndex = prev.findIndex(
        (cat) => cat.category === questions.category
      );

      if (categoryIndex === -1) return prev;

      // create deep copy
      const updated = [...prev];

      updated[categoryIndex] = {
        ...updated[categoryIndex],
        questions: updated[categoryIndex].questions.map((q, i) =>
          i === questionIndex
            ? { ...q, answer: value === 0 ? "тийм" : "үгүй" }
            : q
        ),
      };
      // console.log("data", questions);
      return updated;
    });
  };

  if (!questions) return null;

  return (
    <div className="space-y-4">
      <p className="text-[22px] font-semibold">{questions.category}</p>

      {questions.questions.map((q, index) => (
        <div key={index}>
          <p className="font-normal mb-2">
            {index + 1}. {q.question}
          </p>

          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`question-${index}`}
                className="h-5 w-5 text-amber-500"
                checked={q.answer === "тийм"} // ⭐ СОНГОГДСОН ЭСЭХИЙГ ХОЛБОЖ ӨГНӨ
                onChange={() => handleSelect(index, 0)}
              />
              <span>Тийм</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name={`question-${index}`}
                className="h-5 w-5 text-amber-500"
                onChange={() => handleSelect(index, 1)}
                checked={q.answer === "үгүй"}
              />
              <span>Үгүй</span>
            </label>
          </div>
        </div>
      ))}
    </div>
  );
};
