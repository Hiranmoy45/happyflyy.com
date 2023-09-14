import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gray-100">
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src="https://i.ibb.co/8cXWdyf/destination.png" alt="Logo" className="mb-8 h-40 w-52"/>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">Site is under maintenance</h1>
      <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">We are working hard to improve the user experience. Stay tuned!</p>
      <div className="flex space-x-4">
        <Link href="#" className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded">Contact Us</Link>
        <Link href="#" className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded">Reload</Link>
      </div>
    </div>
  </main>
  )
}
