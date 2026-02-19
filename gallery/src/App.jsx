import axios from 'axios';
import { useEffect, useState } from 'react';
import { CircleArrowLeft } from 'lucide-react';

const App = () => {
  const [user, setUserData] = useState([]);
  const [page, setPage] = useState(1);

  const getdata = async (pageNumber = page) => {
    try {
      const resp = await axios.get(
        `https://picsum.photos/v2/list?page=${pageNumber}&limit=10`
      );
      setUserData(resp.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getdata(page);
  }, [page]);

  return (
    <div className="bg-black h-screen text-white flex flex-col items-center justify-center p-10">
    

      <div className="flex-1 flex justify-center items-center overflow-y-auto w-full">
        <div className="grid grid-cols-4 gap-4 p-4 max-w-5xl">
          {user.map((item) => (
            <div key={item.id} className="bg-gray-800 rounded-xl p-2">
              <img
                src={item.download_url}
                alt={item.author}
                loading='lazy'
                className="w-full h-48 object-cover rounded-lg"
              />
              <p className="mt-2 text-sm text-gray-300">
                Author: {item.author}
              </p>
            </div>
          ))}
        </div>
      </div>

   
      <div className="flex flex-row gap-10 mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="flex items-center gap-2 text-black font-bold px-5 py-4 bg-amber-300 rounded-full active:scale-95"
        >
          <CircleArrowLeft /> Previous
        </button>

        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="flex items-center gap-2 text-black font-bold px-5 py-4 bg-amber-300 rounded-full active:scale-95"
        >
          Next <CircleArrowLeft className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default App;