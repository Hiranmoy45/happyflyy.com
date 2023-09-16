import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="w-full h-screen" style={{ backgroundImage: "url('https://vojislavd.com/ta-template-demo/assets/img/coming-soon.jpg')" }}>
      <div className="w-full h-screen flex flex-col items-center justify-between bg-black bg-opacity-70 py-8">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-white bg-opacity-10 px-4 py-2 rounded-xl flex items-center justify-center text-cyan-100 space-x-2 lg:space-x-4">


          </div>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl text-gray-200 tracking-wider font-bold font-serif mt-12 text-center">Coming Soon</h1>
          <div className="flex flex-col items-center space-y-4 mt-24">
            <p className="text-gray-300 uppercase text-sm">We are working hard to bring you an amazing experience.</p>

          </div>
        </div>
        <div className="w-full flex items-center justify-center">
        
        </div>
      </div>
    </div>
  )
}
