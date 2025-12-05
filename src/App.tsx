import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col items-center gap-8">
      <div className="w-[700px] flex flex-col items-center mt-4 gap-2">
        <p className="font-bold text-[20px]">
          ГАМШГИЙН БЭЛЭН БАЙДЛАА ШАЛГАХ ХЯНАЛТЫН ХУУДАС
        </p>
        <p className="text-center">
          Төрийн болон төрийн бус байгууллага, аж ахуйн нэгж байгууллага,
          хуулийн этгээд, иргэн бүр тогтмол хугацаанд байгууллагынхаа болоод
          өөрийнхөө аюулгүй байдлын үнэлгээг доорх хялбаршуулсан хяналтын
          хуудаснуудын тусламжтайгаар хийж хэвших шаардлагатай. Ингэснээр аливаа
          гамшиг, аюулт үзэгдэл, ослоос урьдчилан сэргийлэх, учирч болзошгүй
          эрсдэлийг бууруулахад нэн тэргүүнд шаардлагатай зүйлс, авч хэрэгжүүлэх
          арга хэмжээний талаар анхан шатны мэдлэгтэй болно. Энэ нь өөрийн
          байгууллага болоод гэр бүл, өөрийгөө тохиолдож болзошгүй гамшиг осол,
          эрсдэлээс урьдчилан сэргийлэхэд туйлын чухал юм.
        </p>
      </div>
      <div className="flex gap-8">
        <Link to="/organization">
          <div
            className="w-[250px] h-[300px] bg-cover bg-center rounded-2xl p-4 flex items-end text-white font-bold text-lg drop-shadow-lg"
            style={{ backgroundImage: "url('/zurag1.png')" }}
          >
            Хуулийн этгээд, аж ахуйн нэгж, байгууллага гамшгийн бэлэн байдлаа
            шалгах хяналтын хуудас
          </div>
        </Link>
        <Link to="/household">
          <div
            className="w-[250px] h-[300px] bg-cover bg-center rounded-2xl p-4 flex items-end text-white font-bold text-lg drop-shadow-lg"
            style={{ backgroundImage: "url('/zurag2.png')" }}
          >
            Өрхийн гамшгийн бэлэн байдлаа шалгах “Аюулгүй өрх” хяналтын хуудас
          </div>
        </Link>
        <Link to="/individual">
          <div
            className="w-[250px] h-[300px] bg-cover bg-center rounded-2xl p-4 flex items-end text-white font-bold text-lg drop-shadow-lg"
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
