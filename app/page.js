export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div className="flex flex-col items-center">
        <div className="title items-center">
          <h1 className="capitalize font-sans text-9xl font-semibold">Climate app</h1>

          <p className="italic text-center text-2xl pt-6">Just select the city, and see the Climate</p>

          <div className="pt-4 flex justify-center items-center">
            <input
              type="text"
              placeholder="city"
              className="py-2 rounded-md border border-gray-300 bg-black"
            />
          </div>
  
        </div>
      </div>
    </main>
  );
}
