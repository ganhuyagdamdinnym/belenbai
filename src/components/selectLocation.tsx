type Option = {
  value: string;
  label: string;
};
type Props = {
  setSelectedAimag: React.Dispatch<React.SetStateAction<string>>;
  selectedAimag: string;
  setSelectedSum: React.Dispatch<React.SetStateAction<string>>;
  selectedSum: string;
  setSelectedBag: React.Dispatch<React.SetStateAction<string>>;
  selectedBag: string;
};
export const SelectLocation = (props: Props) => {
  const {
    setSelectedAimag,
    selectedAimag,
    setSelectedSum,
    selectedSum,
    setSelectedBag,
    selectedBag,
  } = props;
  const aimags: Option[] = [
    { value: "ub", label: "Улаанбаатар" },
    { value: "arkhangai", label: "Архангай" },
    { value: "khentii", label: "Хэнтий" },
  ];

  const sums: Record<string, Option[]> = {
    ub: [
      { value: "bayanzurkh", label: "Баянзүрх" },
      { value: "songinokhairkhan", label: "Сонгинохайрхан" },
    ],
    arkhangai: [
      { value: "tsetserleg", label: "Цэцэрлэг" },
      { value: "khangai", label: "Хангай" },
    ],
    khentii: [
      { value: "dashbalbar", label: "Дашбалбар" },
      { value: "batnorov", label: "Батноров" },
    ],
  };

  const bags: Record<string, Option[]> = {
    bayanzurkh: [
      { value: "1", label: "1-р хороо" },
      { value: "2", label: "2-р хороо" },
    ],
    songinokhairkhan: [
      { value: "3", label: "3-р хороо" },
      { value: "4", label: "4-р хороо" },
    ],
    tsetserleg: [{ value: "5", label: "5-р баг" }],
    khangai: [{ value: "6", label: "6-р баг" }],
    dashbalbar: [{ value: "7", label: "7-р баг" }],
    batnorov: [{ value: "8", label: "8-р баг" }],
  };

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex flex-col gap-1">
        <p className="text-sm sm:text-base">Аймаг/Хот</p>
        <select
          className="border-gray-300 border rounded-md max-w-[250px] p-2 text-sm sm:text-base"
          value={selectedAimag}
          onChange={(e) => {
            setSelectedAimag(e.target.value);
            setSelectedSum("");
            setSelectedBag("");
          }}
        >
          <option value="">Сонгох...</option>
          {aimags.map((a) => (
            <option key={a.value} value={a.value}>
              {a.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm sm:text-base">Сум/Дүүрэг</p>
        <select
          className={`border-gray-300 border ${
            selectedAimag == "" ? "bg-gray-300" : null
          } rounded-md p-2 max-w-[250px] text-sm sm:text-base`}
          value={selectedSum}
          onChange={(e) => {
            setSelectedSum(e.target.value);
            setSelectedBag("");
          }}
          disabled={!selectedAimag}
        >
          <option value="">Сонгох...</option>
          {selectedAimag &&
            sums[selectedAimag]?.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <p className="text-sm sm:text-base">Баг/Хороо</p>
        <select
          className={`border-gray-300 border ${
            selectedSum == "" ? "bg-gray-300" : null
          } rounded-md p-2 max-w-[250px] text-sm sm:text-base`}
          value={selectedBag}
          onChange={(e) => setSelectedBag(e.target.value)}
          disabled={!selectedSum}
        >
          <option value="">Сонгох...</option>
          {selectedSum &&
            bags[selectedSum]?.map((b) => (
              <option key={b.value} value={b.value}>
                {b.label}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};
