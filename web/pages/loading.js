

export default function Loading() {
    return(
    // You can add any UI inside Loading, including a Skeleton.
  <div className="flex bg-amber-50 space-x-4 justify-center items-center w-full h-screen">
    <div
      className="w-16 h-16 bg-[#fcd34d] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite]"
      style={{ animationDelay: "0.6s" }}
    ></div>
    <div
      className="w-16 h-16 bg-[#60a5fa] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-100"
      style={{ animationDelay: "0.4s" }}
    ></div>
    <div
      className="w-16 h-16 bg-[#f472b6] border-4 border-black rounded-full shadow-[4px_4px_0px_0px_black] animate-[ping_1.5s_ease-in-out_infinite] delay-200"
      style={{ animationDelay: "0.2s" }}
    ></div>
  </div>

    )
  }