import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center gap-8 p-4">
      <div className="max-w-[700px] flex flex-col items-center mt-4 gap-2 px-2">
        <p className="font-bold text-[18px] sm:text-[20px] text-center">
          ГАМШГИЙН БЭЛЭН БАЙДЛАА ШАЛГАХ ХЯНАЛТЫН ХУУДАС
        </p>
        <p className="text-center text-sm sm:text-base">
          Төрийн болон төрийн бус байгууллага, аж ахуйн нэгж байгууллага,
          хуулийн этгээд, иргэн бүр тогтмол хугацаанд байгууллагынхаа болоод
          өөрийнхөө аюулгүй байдлын үнэлгээг доорх хялбаршуулсан хяналтын
          хуудаснуудын тусламжтайгаар хийж хэвших шаардлагатай...
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px]">
        <Link to="/organization">
          <div
            className="opacit w-full h-[250px] sm:h-[300px] bg-cover bg-center rounded-2xl p-4 flex items-end 
                       text-white font-bold text-lg drop-shadow-lg"
            style={{ backgroundImage: "url('/zurag1.png')" }}
          >
            Хуулийн этгээд, аж ахуйн нэгж, байгууллага гамшгийн бэлэн байдлаа
            шалгах хяналтын хуудас
          </div>
        </Link>

        <Link to="/household">
          <div
            className="w-full opacity- h-[250px] sm:h-[300px] bg-cover bg-center rounded-2xl p-4 flex items-end 
                        text-white font-bold text-lg drop-shadow-lg"
            style={{ backgroundImage: "url('/zurag2.png')" }}
          >
            Өрхийн гамшгийн бэлэн байдлаа шалгах “Аюулгүй өрх” хяналтын хуудас
          </div>
        </Link>

        <Link to="/individual">
          <div
            className="w-full h-[250px] sm:h-[300px] bg-cover bg-center rounded-2xl p-4 flex items-end 
                        text-white font-bold text-lg drop-shadow-lg"
            style={{ backgroundImage: "url('/zurag4.png')" }}
          >
            Иргэний гамшгаас хамгаалах ойлголт, мэдлэгийг шалгах асуумж
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
