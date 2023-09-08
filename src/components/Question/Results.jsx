import React from 'react'

export const Results = ({
    score,
    questionsFiltered,
    onReset
}) => {
  return (
    <div className="flex flex-col justify-evenly items-center shadow-1 rounded-lg w-[600] h-[600px] gap-5">
        <h1 className='text-4xl font-bold'>Resultados</h1>
        <div>
            <span>Acertaste</span>
            <span className='font-black bg-gradient-to-tr from-purple-500 to-pink-500 bg-clip-text text-transparent text-6xl animate-pulse'>
                {((score / questionsFiltered.length) * 100).toFixed(0) }%
            </span>
            de las preguntas ({score} de {questionsFiltered.length});
        </div>
        <button className='border px-5 py-2 rounded-lg transition-all font-bold hover:bg-yellow-500 hover:text-gray-900'
                onClick={onReset}
        >
            Vamos de nuevo
        </button>
    </div>
  );
};
