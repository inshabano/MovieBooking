const { axiosInstance } = require("./axiosinstance");

const API_BASE_URL = 'https://cinetixbackend.onrender.com';
export const getShowData = async (movieId, date) => {
  try {
    const response = await axiosInstance.get(
      `${API_BASE_URL}/shows/movies/${movieId}?date=${date}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching show data:", error);

    return {
      success: false,
      data: [],
      message: error.response?.data?.message || "Failed to fetch show data.",
    };
  }
};

export const getTheatresAndShowtimes = async (movieId, date) => {
  try {
    const response = await axiosInstance.get(
      `${API_BASE_URL}/shows/movies/${movieId}?date=${date}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching theatres and showtimes:", error);
    return {
      success: false,
      data: [],
      message:
        error.response?.data?.message ||
        "Failed to fetch theatres and showtimes.",
    };
  }
};

export const getShowDetails = async (showid) => {
  try {
    const response = await axiosInstance.get(
      `${API_BASE_URL}/shows/${showid}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in fetching shows details", error);
    return {
      success: false,
      data: [],
      message:
        error.response?.data?.message || "Failed to fetch show deatails.",
    };
  }
};
