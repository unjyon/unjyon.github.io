import Skills from "../sections/Skills";
import { useRef, useLayoutEffect } from "react";
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroText,
} from "../styles/pages/Home.styles";
import MainSvgItem from "../components/UI/MainSvgItem";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const itemRef = useRef(null);
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  useLayoutEffect(() => {
    // GSAP animation for the main item
    const itemAnimation = gsap.to(itemRef.current, {
      x: 100,
      duration: 1,
    });

    // Add inner_img SVG path animation using ref
    if (svgRef.current) {
      const innerImgPaths = svgRef.current.querySelectorAll("svg path");

      const pathAnimations = innerImgPaths.map((path) => {
        // Calculate the actual path length
        const length = path.getTotalLength();

        // Set initial styles
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0,
        });

        // Create the animation
        return gsap.to(path, {
          opacity: 1,
          strokeDashoffset: 0,
          duration: 1.5,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: ".intro",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // Cleanup function
      return () => {
        itemAnimation.kill();
        pathAnimations.forEach((animation) => animation.kill());
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <HomeContainer ref={containerRef}>
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
      <MainSvgItem ref={svgRef} />
    </HomeContainer>
  );
};

export default Home;
