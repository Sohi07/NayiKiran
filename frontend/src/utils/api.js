import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}/api/gemini`;

export const askGemini = async (userMessage) => {
    try {
        const response = await axios.post(`${API_URL}/ask-gemini`, { userMessage });
        return response.data.reply;
    } catch (error) {
        return "Error fetching response.";
    }
};