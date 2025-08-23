import { useState, useEffect } from 'react'
import { ghosts } from '../constants'

const ProgressBar = () => {
  const [ghostPos, setGhostPos] = useState(0) // porcentagem 0–100 na barra

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.scrollHeight - window.innerHeight

      // Porcentagem real de scroll na página
      const scrollPercent = scrollTop / docHeight

      // Limita o movimento só entre 25% e 75%
      const min = 0.25
      const max = 0.75

      let progressInRange = (scrollPercent - min) / (max - min)
      progressInRange = Math.max(0, Math.min(1, progressInRange))

      setGhostPos(progressInRange * 100) // transforma em 0% a 100% da barra
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='hidden relative lg:flex flex-col gap-2 h-20 w-full mb-5'>
      <div className='flex flex-col gap-1 absolute' style={{ left: `${ghostPos}%`, transition: 'left 0.1s linear' }}>
        <p className='text-white'>You</p>
        <img src={ghosts[0].vine} alt="vine ghost" className='h-10 w-10' />
      </div>

      <div className='relative h-5 w-full'>
        <div className="flex justify-between bg-indigo-800 w-full h-2 rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <div key={i} className='h-2 w-1 bg-white/50'/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgressBar
