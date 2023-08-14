export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center">
        <div class="title">
          <h1 class="font-sans text-7xl">Climate app</h1>
          <p className="italic">Just select the city, and see the Climate</p>
        </div>
          
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Start
        </button>

      </div>
    </main>
  )
}
