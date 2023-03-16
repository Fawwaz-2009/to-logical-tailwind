"use client";
import { useMemo, useState } from "react";
import transformerToLogicalTailwindCss from "@/transformer";
import useDebounce from "@/hooks/useDebounce";
import useRenderDiff from "@/hooks/useRenderDiff";

export default function Home() {
  const [input, setInput] = useState("");
  const debouncedInput = useDebounce(input, 500);
  const output = useMemo(
    () => transformerToLogicalTailwindCss(debouncedInput),
    [debouncedInput]
  );
  const { renderDiff } = useRenderDiff({ oldString: input, newString: output });

  return (
    <>
      <main className="grid grid-rows-[auto,1fr] min-bs-[100dvh] ">
        <div className="bg-blue-600 shadow-lg md:flex md:items-center md:justify-between">
          <div className="flex-1 min-is-0 plb-4 pli-2">
            <h2 className="text-2xl font-bold leading-7 text-blue-50 sm:truncate sm:text-3xl sm:tracking-tight">
              To Logical Tailwind CSS
            </h2>
          </div>
        </div>

        <div className="grid grid-rows-[auto,1fr] text-lg md:grid-cols-[400px,1fr] md:grid-rows-1">
          <div className="">
            <textarea
              className="block resize-none border-0 bg-slate-900 p-4 text-white/90  caret-pink-500 shadow-sm ring-1 ring-inset ring-gray-300 bs-full is-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 sm:plb-1.5"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
          </div>

          <div className="block resize-none overflow-scroll border-0 bg-slate-50 p-4 text-black caret-pink-500 shadow-lg ring-1 ring-inset ring-gray-300 bs-full is-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 sm:plb-1.5">
            <pre>{renderDiff()}</pre>
          </div>
        </div>
      </main>
    </>
  );
}
