import {words} from '../constants/index.jsx';
const AnimatedWords = () => {
  
  return (
    <div className="animatedwords mt-40 md:mt-0 flex flex-col justify-start md:items-start items-start w-full h-15 md:h-[auto]"> 
      <h1 className='text-white'>
        <div className='hero-text'>
          <span className="slide">
            <span className="wrapper">
              {words.map((word, index) => (
                <span key={index} className="flex items-center md:gap-3 gap-1 pb-2">
                    <img src={word.imgPath} alt={word.text} className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50" />
                    <span>{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </div>
      </h1>
      <div className='hidden lg:block absolute top-20 left-18 w-170 mt-4 h-2 bg-gradient-to-r from-purple-600 via-purple  '/>
      <div className='hidden md:block lg:hidden absolute top-10 left-18 w-130 mt-4 h-2 bg-gradient-to-r from-purple-600 '/>
      <div className='md:hidden absolute top-6 left-2 w-78 mt-4 h-2 bg-gradient-to-r from-purple-600 '/>
    </div>
  )
}

export default AnimatedWords
