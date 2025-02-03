import { useState } from "react";

function App() {
  return (
    <div className="flex gap-[300px] bg-[#0d0714] flex items-center justify-center ">
      <div className="flex items-center justify-center h-screen bg-[#0d0714] text-[#9e78cf] ">
        <div className=" py-[52.5px] px-[75.5px] rounded-2xl w-[583px] h-[758px]">
          <div className="flex justify-between mb-[59px]">
            <input
              type="text"
              placeholder="Add a new task"
              className="bg-transparent border border-[#9e78cf] rounded-[10px] px-4 py-2 w-[381px] h-[40px] text-white focus:outline-none hover:border-[#78CFB0] cursor-pointer"
            />
            <button className="bg-[#9e78cf] rounded-[10px] cursor-pointer hover:bg-[#78CFB0]">
              <img src="/src/assets/btn.create.svg" alt="" />
            </button>
          </div>
          <h3 className="mb-2 text-[white] mb-[17px]">Tasks to do - 4</h3>
          <div className="space-y-2 ">
            <div className="flex justify-between items-center bg-[#15101C] p-2 rounded-[10px] mb-[17px] hover:bg-[#2c2432] cursor-pointer">
              <span className="px-[13px] py-[19px] text-[16px]">
                To study React fundamentals
              </span>
              <div className="flex space-x-2">
                <button className="text-green-400 cursor-pointer hover:text-green-500">
                  <img src="/src/assets/chack.svg" alt="" />
                </button>
                <button className="text-red-400 cursor-pointer hover:text-red-500">
                  <img src="/src/assets/dalate.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#15101C] p-2 rounded-[10px] mb-[17px] hover:bg-[#2c2432] cursor-pointer">
              <span className="px-[13px] py-[19px] text-[16px]">
                To study React fundamentals
              </span>
              <div className="flex space-x-2">
                <button className="text-green-400 cursor-pointer hover:text-green-500">
                  <img src="/src/assets/chack.svg" alt="" />
                </button>
                <button className="text-red-400 cursor-pointer hover:text-red-500">
                  <img src="/src/assets/dalate.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#15101C] p-2 rounded-[10px] mb-[17px] hover:bg-[#2c2432] cursor-pointer">
              <span className="px-[13px] py-[19px] text-[16px] rounded-[10px]">
                To study React fundamentals
              </span>
              <div className="flex space-x-2">
                <button className="text-green-400 cursor-pointer hover:text-green-500">
                  <img src="/src/assets/chack.svg" alt="" />
                </button>
                <button className="text-red-400 cursor-pointer hover:text-red-500">
                  <img src="/src/assets/dalate.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#15101C] p-2 rounded-[10px] hover:bg-[#2c2432] cursor-pointer">
              <span className="px-[13px] py-[19px] text-[16px] ">
                To study React fundamentals
              </span>
              <div className="flex space-x-2">
                <button className="text-green-400 cursor-pointer hover:text-green-500">
                  <img src="/src/assets/chack.svg" alt="" />
                </button>
                <button className="text-red-400 cursor-pointer hover:text-red-500">
                  <img src="/src/assets/dalate.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <h3 className="mt-4 mb-2 text-[white] mb-[17px] mt-[60px]">
            Done - 1
          </h3>
          <div className="bg-[#15101C] h-[75px] rounded-[10px] text-[#78CFB0] line-through px-[21px] py-[28px] text-[16px] hover:bg-[#2c2432] cursor-pointer flex items-center">
            To study React fundamentals
          </div>
        </div>
      </div>

      {/* DIV 2 */}
      <div className="flex items-center justify-center h-screen bg-[#0d0714] text-[#9e78cf] ">
        <div className="bg-[#1d1825] py-[52.5px] px-[75.5px] rounded-2xl w-[583px] h-[758px]">
          <div className="flex justify-between mb-[59px]">
            <input
              type="text"
              placeholder="Add a new task"
              className="bg-transparent border border-[#9e78cf] rounded-[10px] px-4 py-2 w-[381px] h-[40px] text-white focus:outline-none hover:border-[#78CFB0] cursor-pointer"
            />
            <button className="bg-[#9e78cf] rounded-[10px] cursor-pointer hover:bg-[#78CFB0]">
              <img src="/src/assets/btn.create.svg" alt="" />
            </button>
          </div>
          <h3 className="mb-2 text-[white] mb-[17px]">Tasks to do - 4</h3>
          <div className="space-y-2 ">
            <div className="flex justify-between items-center bg-[#15101C] p-2 rounded-[10px] mb-[17px] hover:bg-[#2c2432] cursor-pointer">
              <span className="px-[13px] py-[19px] text-[16px]">
                To study React fundamentals
              </span>
              <div className="flex space-x-2">
                <button className="text-green-400 cursor-pointer hover:text-green-500">
                  <img src="/src/assets/chack.svg" alt="" />
                </button>
                <button className="text-red-400 cursor-pointer hover:text-red-500">
                  <img src="/src/assets/dalate.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#15101C] p-2 rounded-[10px] mb-[17px] hover:bg-[#2c2432] cursor-pointer">
              <span className="px-[13px] py-[19px] text-[16px]">
                To study React fundamentals
              </span>
              <div className="flex space-x-2">
                <button className="text-green-400 cursor-pointer hover:text-green-500">
                  <img src="/src/assets/chack.svg" alt="" />
                </button>
                <button className="text-red-400 cursor-pointer hover:text-red-500">
                  <img src="/src/assets/dalate.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#15101C] p-2 rounded-[10px] mb-[17px] hover:bg-[#2c2432] cursor-pointer">
              <span className="px-[13px] py-[19px] text-[16px] rounded-[10px]">
                To study React fundamentals
              </span>
              <div className="flex space-x-2">
                <button className="text-green-400 cursor-pointer hover:text-green-500">
                  <img src="/src/assets/chack.svg" alt="" />
                </button>
                <button className="text-red-400 cursor-pointer hover:text-red-500">
                  <img src="/src/assets/dalate.svg" alt="" />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center bg-[#15101C] p-2 rounded-[10px] hover:bg-[#2c2432] cursor-pointer">
              <span className="px-[13px] py-[19px] text-[16px] ">
                To study React fundamentals
              </span>
              <div className="flex space-x-2">
                <button className="text-green-400 cursor-pointer hover:text-green-500">
                  <img src="/src/assets/chack.svg" alt="" />
                </button>
                <button className="text-red-400 cursor-pointer hover:text-red-500">
                  <img src="/src/assets/dalate.svg" alt="" />
                </button>
              </div>
            </div>
          </div>
          <h3 className="mt-4 mb-2 text-[white] mb-[17px] mt-[60px]">
            Done - 1
          </h3>
          <div className="bg-[#15101C] h-[75px] rounded-[10px] text-[#78CFB0] line-through px-[21px] py-[28px] text-[16px] hover:bg-[#2c2432] cursor-pointer flex items-center">
            To study React fundamentals
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
