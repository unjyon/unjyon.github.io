import { Resend } from "resend";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendEmail = async (formData) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "your-website@yourdomain.com", // 발신자 이메일 (Resend에서 설정한 도메인)
      to: ["unjyon.song@gmail.com"], // 수신자 이메일 (본인 이메일)
      subject: `새로운 문의: ${formData.name}님으로부터`,
      html: `
        <h2>새로운 문의가 도착했습니다</h2>
        <p><strong>이름:</strong> ${formData.name}</p>
        <p><strong>이메일:</strong> ${formData.email}</p>
        <p><strong>메시지:</strong></p>
        <p>${formData.message}</p>
      `,
    });

    if (error) {
      console.error("이메일 전송 실패:", error);
      throw new Error("이메일 전송에 실패했습니다.");
    }

    return { success: true, data };
  } catch (error) {
    console.error("이메일 전송 오류:", error);
    throw error;
  }
};
