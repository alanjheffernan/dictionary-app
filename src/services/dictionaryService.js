const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const getDictionaryWord = async (searchWord) => {
  const url = `${baseUrl}${searchWord}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      const errorResponse = await response.json() 
      throw new ApiResponseError(response, errorResponse);
    }
    return await response.json();
  } catch (error) {
    throw error;
  }
};

class ApiResponseError extends Error {
  constructor(response, data) {
    super(`API request failed with status ${response.status}`);
    this.data = data;
    this.status = response.status;
  }
}
