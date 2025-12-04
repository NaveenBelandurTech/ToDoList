import { useState } from "react";

const Body = () => {
  const [data, setData] = useState("");
  const [list, setList] = useState([]);

  const handleCancel = (id) => {
    const result = list.filter((Data) => {
      return id !== Data.id;
    });
    setList(result);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = {
      id: Math.round(Math.random() * 10000),
      title: data,
    };
    if(data.trim() == ''){
     alert('Please add data to the list')
     return
    }
    setList([...list, formdata]);
    setData("");
  };

  return (
    <div className="flex flex-col items-center justify-center h-100 ">
      <div className="border flex flex-col gap-4 bg-white rounded-2xl  border-black w-100 h-auto p-3">
        <p className="text text-start text-2xl">To Do App</p>
        <div>
          <form>
            <input
              className="border focus-within: cursor-pointer w-82 p-1"
              value={data}
              onChange={(e) => setData(e.target.value)}
              placeholder="Add Your New ToDo"
            />
            <button
              onClick={handleSubmit}
              className="border border-2 text-white border-white bg-purple-500 p-1.5 w-10 cursor-pointer"
            >
              +
            </button>
          </form>
          <ul className="mt-4 overflow-hidden h-25">
            {list?.map((data, i) => {
              return (
                <div key={i} className="flex flex-row justify-between">
                  <li>{data.title}</li>
                  <button
                    className="border border-2 text-white border-white bg-red-700 p-1 cursor-pointer"
                    onClick={() => handleCancel(data.id)}
                  >
                    X
                  </button>
                </div>
              );
            })}
          </ul>
        </div>
        {list.length == 0 ? (
          ""
        ) : (
          <div className="flex flex-row justify-end">
            <button
              className="border border-2 text-white border-white bg-red-500 p-1 cursor-pointer  font-extraligh ttext-[1rem]"
              onClick={() => setList([])}
            >
              Clear Data
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Body;
