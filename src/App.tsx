import { useEffect, useState } from "react";
import { Letter } from "./components/game";

const App = (): JSX.Element => {
  const word: string = "hello";

  const [input, setInput] = useState<string>("");
  const [guess, setGuess] = useState<Array<string>>([]);
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const [attempts, setAttempts] = useState<number>(0);

  const handleOnKeyDown = (char: string): boolean => {
    if (char === "Backspace") {
      setGuess(guess.slice(0, -1));
    }
    console.log(guess.length);
    if (guess.length === 5) {
      if (guess.join("") === word && !isWinner) {
        setIsWinner(true);
      }
      return false;
    }
    if (!/^[a-zA-Z]{1}$/.test(char)) return false;
    if (!isNaN(char as unknown as number)) return false;
    setGuess((prevGuess) => [...prevGuess, char.toLowerCase()]);
    return true;
  };

  console.log(guess);

  return (
    <div className="relative w-screen h-screen flex items-center justify-center">
      <input
        className="z-10 absolute border-2 border-black px-2 py-1 text-md mx-4 my-5 w-[600px] h-[600px] bg-transparent"
        type="text"
        maxLength={5}
        // value={guess.join("")}
        value={""}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={({ key }) => {
          handleOnKeyDown(key);
          return !/[a-z]/i.test(key);
        }}
      />
      {guess.map((char, _) => (
        <Letter char={char} key={_} />
      ))}
      {/* </div> */}
      {guess.join("") === word && <div>You Win!</div>}
    </div>
  );
};

export default App;
