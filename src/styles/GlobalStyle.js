import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");

  :root {
    /* Colors */
    --primary: #646cff;
    --primary-hover: #535bf2;
    --text: #213547;
    --background: #ffffff;
    --gray-light: #f5f5f5;
    --gray-hover: #e8e8e8;
    --border: #ddd;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
      Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
      "Malgun Gothic", sans-serif;
    line-height: 1.6;
    color: var(--text);
    background-color: var(--background);
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  input, textarea {
    font-family: inherit;
  }

  ul, ol {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* 스크롤바 스타일링 */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--gray-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-hover);
  }

  /* 텍스트 선택 스타일 */
  ::selection {
    background-color: var(--primary);
    color: white;
  }
`;
