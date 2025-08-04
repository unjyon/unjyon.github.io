# Portfolio Website

프론트엔드 개발자 송은정의 포트폴리오 웹사이트입니다.

## 설치 및 실행

```bash
npm install
npm run dev
```

## 환경 변수 설정

### Resend API 키 설정 (이메일 기능)

1. [Resend](https://resend.com)에서 계정을 만들고 API 키를 발급받으세요.
2. 프로젝트 루트에 `.env` 파일을 생성하세요:

```env
VITE_RESEND_API_KEY=re_your_actual_api_key_here
```

3. API 키를 발급받은 후 `.env` 파일에 실제 API 키를 입력하세요.

**주의**: `.env` 파일은 `.gitignore`에 포함되어 있어 Git에 커밋되지 않습니다.

## 기술 스택

- React
- Vite
- GSAP (애니메이션)
- Resend (이메일 서비스)
- Styled Components

## 주요 기능

- 반응형 디자인
- GSAP 애니메이션
- 이메일 문의 기능
- 프로젝트 포트폴리오
- 기술 스택 소개
