import { useEffect, useState } from 'react'

function App() {
  const today = new Date().toISOString().split('T')[0]
  const [pushups, setPushups] = useState(0)
  const [situps, setSitups] = useState(0)
  const [kilometers, setKilometers] = useState(0)

  useEffect(() => {
    const savedData = localStorage.getItem(today)
    console.log(today)
    console.log(savedData)
    if (savedData) {
      const { pushups: p, situps: s, kilometers: k } = JSON.parse(savedData)
      setPushups(p)
      setSitups(s)
      setKilometers(k)
    }
  }, [])

  useEffect(() => {
    if (pushups || situps || kilometers) {
      localStorage.setItem(today, JSON.stringify({ pushups, situps, kilometers }))
    }
  }, [pushups, situps, kilometers])

  return (
    <>
    <header className='w-full p-4 bg-yellow-400 text-red-600 font-stretch-ultra-condensed'>
      <img src="/logo.svg" alt="ONE PUNCH-MAN" className='h-10 text-red-600' />
    </header>
    <main className="container flex flex-col py-10 gap-10">
      <div className="flex gap-4 justify-center">
        <div className='flex flex-col gap-2'>
          <button onClick={() => setPushups(pushups + 10)}>{pushups} Pushups</button>
          <button onClick={() => setPushups(0)}>reset</button>
        </div>
        <div className='flex flex-col gap-2'>
          <button onClick={() => setSitups(situps + 10)}>{situps} Situps</button>
          <button onClick={() => setSitups(0)}>reset</button>
        </div>
        <div className='flex flex-col gap-2'>
          <button onClick={() => setKilometers(kilometers + 1)}>{kilometers} Kilometers</button>
          <button onClick={() => setKilometers(0)}>reset</button>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
