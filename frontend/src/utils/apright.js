import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_API_URL}/api/rights`;

export const askRights = async (userMessage) => {
    try {
        const response = await axios.post(`${API_URL}/ask-rights`, 
            { userMessage },
            { withCredentials: true }
        );
        return response.data.reply;
    } catch (error) {
        console.error("API Error:", error.response?.data || error.message);
        return "Error fetching response.";
    }
};