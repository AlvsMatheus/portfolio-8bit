const Title = ({text, width, gradient}) => {
  return (
    <div className="flex flex-col w-full h-[auto] ps-10 md:ps-0 md:items-center md:mt-5 lg:mt-15">
        <h1 className="text-2xl md:text-2xl lg:text-5xl mb-4">{text}</h1>
        <div className={`${width} rounded-1xl h-2 bg-gradient-to-r ${gradient}`}/>
    </div>
  )
}

export default Title
