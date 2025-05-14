import Skills from "../sections/Skills";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>
          안녕하세요. 디자이너로부터 시작해서 프론트엔드 개발까지 경력을 갖고
          있는 송은정입니다.
        </h1>
        <p>프론트엔드 개발자로서 한걸음씩 성장하기 위해 노력중에 있습니다.</p>
      </section>
      <Skills />
    </div>
  );
};

export default Home;
