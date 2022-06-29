import React, { createContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [difficult, setDifficult] = useState('');
  const [catagory, setCatgory] = useState('');
  const [qustion, setQuistion] = useState([]);
  const [score, setScore] = useState(0);
  const [typeQuistion, setTypeQuistion] = useState('');
  const [loading, setLoading] = useState(false);
  return (
    <QuizContext.Provider
      value={{
        name,
        setName,
        difficult,
        setDifficult,
        catagory,
        setCatgory,
        qustion,
        setQuistion,
        score,
        setScore,
        loading,
        setLoading,
        typeQuistion,
        setTypeQuistion,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
