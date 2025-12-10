import { SelectLocation } from "../components/selectLocation";
import { useState, useEffect } from "react";
import { Form } from "../individualComponents/secondForm";
import Datas from "../assets/individualQuestions.json";
import { BackgroundForm } from "../individualComponents/backgroundForm";

type QuestionItem = {
  question: string;
  answer: string | null;
};

type CategoryItem = {
  category: string;
  questions: QuestionItem[];
};
type Location = {
  aimag: string;
  sum: string;
  bag: string;
};
const Individual = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>("location");
  const [selectedAimag, setSelectedAimag] = useState<string>("");
  const [selectedSum, setSelectedSum] = useState<string>("");
  const [selectedBag, setSelectedBag] = useState<string>("");
  const [questions, setQuestions] = useState<CategoryItem[] | null>(null);

  const handlePreviousCate = () => {
    if (currentCategory == "backgroundInfo") {
      setCurrentCategory("location");
    } else if (currentCategory == "fireSafe") {
      setCurrentCategory("backgroundInfo");
    } else if (currentCategory == "prepare") {
      setCurrentCategory("fireSafe");
    } else if (currentCategory == "safeWay") {
      setCurrentCategory("prepare");
    }
  };
  const handleNext = () => {
    if (questions !== null) {
      if (
        selectedBag !== "" &&
        currentCategory == "location" &&
        questions[0].questions.every((e) => e.answer != null)
      ) {
        setCurrentCategory("form");
        console.log("data", questions);
      }
    }
  };
  const sendAnswer = () => {
    const loc = {
      aimag: selectedAimag,
      sum: selectedSum,
      bag: selectedBag,
    };
    setLocation(loc);
    if (questions !== null) {
      if (questions[1].questions.every((e) => e.answer != null)) {
        console.log("answer", questions);
        console.log("lpcation", location);
      }
    }
  };
  useEffect(() => {
    setQuestions(Datas as CategoryItem[]);
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-6 gap-6 px-4">
      <p className="font-bold text-[16px] sm:text-[24px] max-w-[900px] text-center">
        Иргэний гамшгаас хамгаалах ойлголт, мэдлэгийг шалгах асуумж
      </p>
      {currentCategory == "location" && (
        <div className="w-full max-w-[900px] flex flex-col gap-6">
          <div className="w-full">
            <p className="font-semibold text-[14px] sm:text-[18px]">
              Иргэний оршин сууж буй хаягийн мэдээлэл
            </p>
            <SelectLocation
              setSelectedAimag={setSelectedAimag}
              selectedAimag={selectedAimag}
              setSelectedSum={setSelectedSum}
              selectedSum={selectedSum}
              setSelectedBag={setSelectedBag}
              selectedBag={selectedBag}
            />
          </div>
        </div>
      )}
      <div className="w-full max-w-[900px] flex flex-col gap-4">
        <div className="w-full h-4 bg-gray-300 rounded-3xl">
          <div
            className={`${
              currentCategory == "location"
                ? "w-1/2"
                : currentCategory == "form"
                ? "w-2/2"
                : "w-full"
            } bg-amber-500 h-full rounded-3xl transition-all duration-300`}
          />
        </div>
        {currentCategory == "location" ? (
          <div>
            {questions && (
              <BackgroundForm
                questions={questions}
                setQuestions={setQuestions}
              />
            )}
          </div>
        ) : currentCategory == "form" ? (
          <div>
            {questions && (
              <Form questions={questions[1]} setQuestions={setQuestions} />
            )}
          </div>
        ) : null}

        <div className="w-full flex justify-between">
          {currentCategory !== "location" ? (
            <button
              onClick={handlePreviousCate}
              className="px-4 py-2 bg-gray-600 rounded-md"
            >
              <p className="text-white font-semibold">Өмнөх</p>
            </button>
          ) : (
            <div></div>
          )}
          {currentCategory == "form" ? (
            <button
              onClick={sendAnswer}
              className="px-4 py-2 bg-green-600 rounded-md"
            >
              <p className="text-white font-semibold">Хариултыг илгээх</p>
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-amber-500 rounded-md"
            >
              <p className="text-white font-semibold">Дараах</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Individual;
