export const getAPI = async (url) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}${url}`,
        {
          withCredentials: true
        }
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  };