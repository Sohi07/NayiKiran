import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}/api/gemini`;

export const askGemini = async (userMessage) => {
    try {
        const response = await axios.post(`${API_URL}/ask-gemini`, 
            { userMessage },
            { withCredentials: true }
        );
        return response.data.reply;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        return "Error fetching response.";
    }
};