"use client";
import { useMemo, useState } from "react";
import transformerToPluginLogicalTailwindCss from "@/transformer/transformerToPluginLogicalTailwindCss";
import transformerToNativeLogicalTailwindCss from "@/transformer/transformerToNativeLogicalTailwindCss";
import useDebounce from "@/hooks/useDebounce";
import useRenderDiff from "@/hooks/useRenderDiff";
import CopyButton from "@/components/CopyButton";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
export default function Home() {
  const [input, setInput] = useState("");
  const [outputFormat, setOutputFormat] = useState<
    "LOGICAL_PLUGIN" | "NATIVE_TAILWIND"
  >("LOGICAL_PLUGIN");
  const debouncedInput = useDebounce(input, 500);
  const output = useMemo(
    () =>
      outputFormat === "LOGICAL_PLUGIN"
        ? transformerToPluginLogicalTailwindCss(debouncedInput)
        : transformerToNativeLogicalTailwindCss(debouncedInput),
    [debouncedInput, outputFormat]
  );
  const { renderDiff } = useRenderDiff({ oldString: input, newString: output });

  return (
    <>
      <main className="grid grid-rows-[auto,1fr] min-bs-[100dvh] ">
        <div className="shadow-lg md:flex md:items-center md:justify-between">
          <div className="flex-1 flex-wrap justify-between min-is-0 plb-4 pli-2 sm:flex ">
            <h2 className="text-2xl font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight">
              To Logical Tailwind CSS
            </h2>
            <div className="flex items-center gap-8 mie-4 mbs-8 sm:mbs-0">
              <div className="flex items-center gap-2">
                <Label className="hidden lg:inline">Output Format</Label>
                <Select
                  name="outputFormat"
                  value={outputFormat}
                  onValueChange={(val) =>
                    setOutputFormat(val as "LOGICAL_PLUGIN" | "NATIVE_TAILWIND")
                  }
                >
                  <SelectTrigger className="w-52">
                    <SelectValue />
                    <SelectContent>
                      <SelectItem value="LOGICAL_PLUGIN">
                        tailwindcss-logical
                      </SelectItem>
                      <SelectItem value="NATIVE_TAILWIND">
                        Native Tailwind (v3.3 +)
                      </SelectItem>
                    </SelectContent>
                  </SelectTrigger>
                </Select>
              </div>

              <Button asChild variant={"ghost"}>
                <a
                  href="https://github.com/Fawwaz-2009/to-logical-tailwind"
                  // className="inline-flex items-center font-medium hover:underline"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  See in Github
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-rows-[auto,1fr] text-lg md:grid-cols-[600px,1fr] md:grid-rows-1">
          <div className="">
            <Textarea
              className="block resize-none border-0 bg-slate-900 p-4 text-white/90 caret-pink-500 shadow-sm ring-1 ring-inset ring-gray-300 bs-full is-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 sm:plb-1.5"
              value={input}
              placeholder="Paste Your Tailwind CSS Markup to be converted to logical tailwindcss"
              onChange={(event) => setInput(event.target.value)}
            />
          </div>

          <div className="relative block resize-none overflow-scroll border-0 bg-slate-50 p-4 text-black caret-pink-500 shadow-lg ring-1 ring-inset ring-gray-300 bs-full is-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 sm:plb-1.5">
            <div className="absolute right-6 top-6">
              <CopyButton text={output} />
            </div>
            <pre>{renderDiff()}</pre>
          </div>
        </div>
      </main>
    </>
  );
}
