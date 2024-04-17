const baseUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const getDictionaryWord = async (searchWord) => {
  const url = `${baseUrl}${searchWord}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
};
