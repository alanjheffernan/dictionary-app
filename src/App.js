import { useState } from "react";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import WordResults from "./components/WordResults";
import { getDictionaryWord } from "./services/dictionaryService";
import { useFontContext } from "./contexts/FontContext";

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { font } = useFontContext();

  const handleSearch = async (searchWord) => {
    console.log("called handleSearch Method");
    setIsLoading(true);
    try {
      const result = await getDictionaryWord(searchWord);
      setData(result[0]);
      setError(null);
    } catch (e) {
      setError(e);
      console.log(e.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={`w-full p-6 sm:p-10 ${font}`}>
      <Nav />
      <SearchBar onSearch={handleSearch} />
      <WordResults data={data} isLoading={isLoading} error={error} />
    </main>
  );
}

export default App;
