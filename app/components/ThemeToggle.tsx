// "use client";

// import { useState } from "react";
// import { Sun, Moon } from "lucide-react";
// import clsx from "clsx";

// export const ThemeToggle = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setIsDarkMode((prev) => !prev);
//     // Insert theme switching logic here
//   };

//   return (
//     <button
//       onClick={toggleTheme}
//       className={clsx(
//         "w-14 h-8 rounded-full p-1 flex items-center transition-colors duration-300 cursor-pointer",
//         isDarkMode ? "bg-black" : "bg-[#96bb7c]"
//       )}
//     >
//       <span
//         className={clsx(
//           "bg-white w-6 h-6 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300",
//           isDarkMode ? "translate-x-6" : "translate-x-0"
//         )}
//       >
//         {isDarkMode ? (
//           <Moon className="w-4 h-4 text-black" />
//         ) : (
//           <Sun className="w-4 h-4 text-[#96bb7c]" />
//         )}
//       </span>
//     </button>
//   );
// };


"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
