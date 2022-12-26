import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Routes/routes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto dark:bg-slate-900 dark:text-white">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
