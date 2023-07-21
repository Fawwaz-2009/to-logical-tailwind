"use client";
import { useMemo, useState } from "react";
import transformerToPluginLogicalTailwindCss from "@/transformer/transformerToPluginLogicalTailwindCss";
import transformerToNativeLogicalTailwindCss from "@/transformer/transformerToNativeLogicalTailwindCss";
import useDebounce from "@/hooks/useDebounce";
import useRenderDiff from "@/hooks/useRenderDiff";
import CopyButton from "@/components/CopyButton";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
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
      <div className="">
        <header className="container mx-auto flex items-center justify-between">
          <h2 className="my-8 text-center text-2xl font-bold leading-7  sm:truncate sm:text-3xl sm:tracking-tight">
            To Logical Tailwind CSS
          </h2>

          <Button asChild variant={"outline"}>
            <a
              href="https://github.com/Fawwaz-2009/to-logical-tailwind"
              // className="inline-flex items-center font-medium hover:underline"
              target={"_blank"}
              rel="noreferrer"
            >
              <GitHubLogoIcon className="mr-2 h-6 w-6" />
              See in Github
            </a>
          </Button>
        </header>
        <div className="mx-auto max-w-lg">
          <p className="">
            This tool converts standard Tailwind CSS into logical format,
            compatible with{" "}
            <Button
              asChild
              variant={"link"}
              className="h-auto p-0 text-blue-600"
            >
              <a
                href="https://github.com/stevecochrane/tailwindcss-logical"
                className=""
              >
                tailwindcss-logical
              </a>
            </Button>{" "}
            and{" "}
            <Button
              asChild
              variant={"link"}
              className="h-auto p-0 text-blue-600"
            >
              <a
                href="https://tailwindcss.com/blog/tailwindcss-v3-3"
                className=""
              >
                native Tailwind (v3.3+)
              </a>
            </Button>
            {`. Paste your CSS, choose an output format, and see the converted CSS
            dynamically rendered. The differences are highlighted for easy
            comparison. Use the 'copy' button to grab your converted CSS for use
            in your projects.`}
          </p>
        </div>
        <main className="container mx-auto my-8">
          <div className="mt-14 mb-8 flex flex-col items-center justify-center gap-2">
            <div>
              <Label className="my-2 inline-block">Output Format</Label>
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
          </div>
          <div className="grid h-[40rem] grid-rows-[auto,1fr] text-lg md:grid-cols-[600px,1fr] md:grid-rows-1">
            <div className="">
              <Textarea
                className="block resize-none border-0 bg-slate-900 p-4 text-white/90 caret-pink-500 shadow-sm ring-1 ring-inset ring-gray-300 bs-full is-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 "
                value={input}
                placeholder="Paste Your Tailwind CSS Markup to be converted to logical tailwindcss"
                onChange={(event) => setInput(event.target.value)}
              />
            </div>

            <div className="relative block resize-none overflow-scroll border-0 bg-slate-50 p-4 text-black caret-pink-500 shadow-lg ring-1 ring-inset ring-gray-300 bs-full is-full placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-lg sm:leading-6 ">
              <div className="absolute right-6 top-6">
                <CopyButton text={output} />
              </div>
              <pre>{renderDiff()}</pre>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
