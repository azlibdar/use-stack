import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStack } from "react-customs";

function Content() {
  const { stack, push, pop, peek, clear, isFull, isEmpty, size } = useStack([], { maxSize: 10 });

  const addToStack = () => {
    push(Math.floor(Math.random() * 1000));
  };

  const removeFromStack = () => {
    const removedItem = pop();

    toast(`Removed Item: ${removedItem}`, {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const peekStack = () => {
    toast(`Peek Item: ${peek()}`, {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const clearStack = () => {
    clear();

    toast("Stack Cleared!", {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const isStackFull = () => {
    const message = isFull ? "Yep, it's full" : "Not yet!";

    toast(message, {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  const isStackEmpty = () => {
    const message = isEmpty ? "Yep, it's empty" : `Nope!`;

    toast(message, {
      position: "bottom-center",
      theme: "dark",
      autoClose: 3000,
    });
  };

  return (
    <main className="w-full p-4 md:p-6 flex justify-center">
      <ToastContainer />
      <div className="w-full max-w-[800px] bg-zinc-950 text-zinc-50 rounded-lg p-6">
        <div className="my-6 flex flex-col gap-12">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button onClick={addToStack} className="btn btn-1">
              Push
            </button>
            <button onClick={removeFromStack} className="btn btn-2">
              Pop
            </button>
            <button onClick={peekStack} className="btn btn-3">
              Peek
            </button>
            <button onClick={clearStack} className="btn btn-4">
              Clear
            </button>
            <button onClick={isStackFull} className="btn btn-5">
              isFull
            </button>
            <button onClick={isStackEmpty} className="btn btn-6">
              isEmpty
            </button>
          </div>
          <div className="w-full">
            <div className="w-full flex justify-center items-center">
              <span className="text-center px-2 py-1 text-sm font-mono bg-zinc-800 font-semibold text-zinc-400 rounded-md">
                Stack size: {size}
              </span>
            </div>
            {stack.length !== 0 && (
              <ul className="w-full flex flex-col gap-2 mt-6">
                {stack.map((item, index) => (
                  <li key={index} className="w-full p-4 bg-zinc-900 rounded-lg text-zinc-400 font-medium">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Content;
