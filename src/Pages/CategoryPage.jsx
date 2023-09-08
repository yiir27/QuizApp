import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { questions, imgs} from '../data';
import { Question } from '../components/Question/Question';

const shuffleArray = (array) => {
  const newArray = array.sort(()=> Math.random() - 0.5);
  return newArray.slice(0, 5);
};

export const CategoryPage = () => {
  const {category} = useParams();

  const [imgCategory] = imgs.filter(img => img === `/src/assets/${category.toLowerCase()}.png`);  

  const [questionsFiltered, setQuestionsFiltered] = useState(
    questions.filter(question => question.category === category)
  );

  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    setQuestionsFiltered(newQuestions);
  }, []);
  console.log(imgCategory);
  return (
    <div className='container flex flex-col items-center justify-center gap-10'
         style={{ height: 'clac(100vh - 5rem' }}>
          {activeQuiz ? (
              <Question
                  filteredQuestion={questionsFiltered[indexQuestion]}
                  setIndexQuestion={setIndexQuestion}
                  indexQuestion={indexQuestion}
                  questionsFiltered={questionsFiltered}
                  setActiveQuiz={setActiveQuiz}
              />
          ) : (
              <>
                  <div className="flex justify-center items-center">
                      <h1 className='text-3xl text-teal-900 text-center font-bold'>
                          {category}
                      </h1>
                      <div className='flex justify-center items-center'>
                        <img src={imgCategory} alt={category} className='w-72'/>
                      </div>
                  </div>
                  <button className="text-white bg-gray-900 py-2 rounded-lg font-bold px-5 transition-all hover:bg-yellow-500 hover:text-gray-900"
                          onClick={() => setActiveQuiz(true)}>
                            Iniciar Quiz
                          </button>
              </>
          )}
    </div>
  );
};
