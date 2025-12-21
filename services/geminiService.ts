
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, SKILLS, PERSONAL_DETAILS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAssistantResponse = async (userMessage: string) => {
  if (!process.env.API_KEY) return "The AI assistant is currently offline as the API key is missing.";

  const systemInstruction = `
    You are a professional hiring assistant for ${PERSONAL_DETAILS.name}. 
    Your goal is to answer recruiter questions based on the following context:
    - Role: ${PERSONAL_DETAILS.role}
    - Education: ${PERSONAL_DETAILS.education}
    - Skills: ${SKILLS.map(s => `${s.name} (${s.level})`).join(', ')}
    - Projects: ${PROJECTS.map(p => `${p.title}: ${p.solution}`).join('; ')}
    
    Keep responses concise, professional, and focus on Prashantha's learning mindset and technical abilities.
    If asked about things not in the context, politely suggest contacting Prashantha directly at ${PERSONAL_DETAILS.email}.
    Always act like a senior technical recruiter who has reviewed the profile.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
        maxOutputTokens: 200,
      }
    });

    return response.text || "I'm sorry, I couldn't process that. Please contact Prashantha directly.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The assistant encountered an error. Please try again or reach out to me via email.";
  }
};
