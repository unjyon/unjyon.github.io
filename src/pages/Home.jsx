import Skills from "../sections/Skills";
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroText,
} from "../styles/pages/Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <HeroTitle>
          안녕하세요. 디자이너로부터 시작해서 프론트엔드 개발까지 경력을 갖고
          있는 송은정입니다.
        </HeroTitle>
        <HeroText>
          프론트엔드 개발자로서 한걸음씩 성장하기 위해 노력중에 있습니다.
        </HeroText>
      </HeroSection>
      <Skills />
    </HomeContainer>
  );
};

export default Home;
