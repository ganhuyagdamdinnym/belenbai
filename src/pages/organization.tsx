import { SelectLocation } from "../components/selectLocation";
import { useState, useEffect } from "react";
import { Form } from "../components/organizitioForm_one";
import { FireSafe } from "../components/fireSafe";
import { Prepare } from "../components/prepare";
import { Safeway } from "../components/safeWay";
import Datas from "../assets/organizationQuestions.json";
import { Link } from "react-router-dom";

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
const Organization = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [currentCategory, setCurrentCategory] = useState<string>("location");
  const [selectedAimag, setSelectedAimag] = useState<string>("");
  const [selectedSum, setSelectedSum] = useState<string>("");
  const [selectedBag, setSelectedBag] = useState<string>("");
  const [BusinessType, setBusinessType] = useState<string>("");
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
      if (selectedBag !== "" && currentCategory == "location") {
        setCurrentCategory("backgroundInfo");
      } else if (
        currentCategory == "backgroundInfo" &&
        questions[0].questions.every((e) => e.answer != null)
      ) {
        setCurrentCategory("fireSafe");
      } else if (
        currentCategory == "fireSafe" &&
        questions[1].questions.every((e) => e.answer != null)
      ) {
        setCurrentCategory("prepare");
      } else if (
        currentCategory == "prepare" &&
        questions[2].questions.every((e) => e.answer != null)
      ) {
        setCurrentCategory("safeWay");
      }
    }
  };
  const sendAnswer = () => {
    if (questions !== null) {
      if (questions[3].questions.every((e) => e.answer != null)) {
        console.log("answer", questions);
        console.log("location", location);
      }
    }
  };
  useEffect(() => {
    setLocation({
      aimag: selectedAimag,
      sum: selectedSum,
      bag: selectedBag,
    });
  }, [selectedBag, selectedSum, selectedAimag]);

  useEffect(() => {
    setQuestions(Datas as CategoryItem[]);
  }, []);
  return (
    <div className="min-h-screen w-full flex flex-col items-center py-6 gap-6 px-4">
      <div className="w-full mt-[-10px]">
        <Link to="/">
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-amber-500 rounded-md"
          >
            <p className="text-white font-semibold">Буцах</p>
          </button>
        </Link>
      </div>
      <p className="font-bold text-[16px] sm:text-[24px] max-w-[900px] text-center">
        Хуулийн этгээд, аж ахуйн нэгж, байгууллага гамшгийн бэлэн байдлаа шалгах
        хяналтын хуудас
      </p>

      {currentCategory == "location" && (
        <div className="w-full max-w-[900px] flex flex-col gap-6">
          {/* Location */}
          <div className="w-full">
            <p className="font-semibold text-[14px] sm:text-[18px]">
              Байгууллагын үйл ажиллагаа явуулж буй хаягийн мэдээлэл
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

          <div className="w-full flex flex-col">
            <p className="font-semibold text-[14px] sm:text-[18px]">
              Үйл ажиллагааны чиглэл
            </p>
            <input
              value={BusinessType}
              onChange={(e) => setBusinessType(e.target.value)}
              placeholder="Үйл ажиллагааны чиглэлээ бичнэ үү"
              className="w-full h-12 border border-gray-300 rounded-md p-4 text-sm sm:text-base"
            />
          </div>
        </div>
      )}

      <div className="w-full max-w-[900px] flex flex-col gap-4">
        <div className="w-full h-4 bg-gray-300 rounded-3xl">
          <div
            className={`${
              currentCategory == "location"
                ? "w-1/5"
                : currentCategory == "backgroundInfo"
                ? "w-2/5"
                : currentCategory == "fireSafe"
                ? "w-3/5"
                : currentCategory == "prepare"
                ? "w-4/5"
                : currentCategory == "safeWay"
                ? "w-5/5"
                : "w-full"
            } bg-amber-500 h-full rounded-3xl transition-all duration-300`}
          />
        </div>
        {currentCategory == "backgroundInfo" ? (
          <div>
            {questions && (
              <Form questions={questions[0]} setQuestions={setQuestions} />
            )}
          </div>
        ) : currentCategory == "fireSafe" ? (
          <div>
            {questions && (
              <FireSafe questions={questions[1]} setQuestions={setQuestions} />
            )}
          </div>
        ) : currentCategory == "prepare" ? (
          <div>
            {questions && (
              <Prepare questions={questions[2]} setQuestions={setQuestions} />
            )}
          </div>
        ) : currentCategory == "safeWay" ? (
          <div>
            {questions && (
              <Safeway questions={questions[3]} setQuestions={setQuestions} />
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
          {currentCategory == "safeWay" ? (
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

export default Organization;
