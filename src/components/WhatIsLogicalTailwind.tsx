import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export function WhatIsLogicalTailwind() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Logical Tailwind?</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>What is Logical Tailwind?</DialogTitle>
        </DialogHeader>
        <p className="">
          Logical Tailwind is an approach that leverages{" "}
          <Button
            asChild
            variant={"link"}
            className="h-auto p-0 text-base text-blue-600"
          >
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values"
              className=""
            >
              CSS Logical Properties
            </a>
          </Button>{" "}
          to create direction-agnostic styles in your Tailwind CSS projects.
        </p>
        <p className="">
          CSS Logical Properties introduce a way to style elements based on
          their flow relative to the document, rather than physical direction
          (left, right, top, bottom). This means you can write styles that
          behave consistently across different writing modes, such as
          left-to-right (LTR), right-to-left (RTL), and top-to-bottom (TTB).
        </p>
        <p className="">
          For instance, in an LTR layout,{" "}
          <span className="font-bold">{`"padding-inline-start"`}</span> applies
          padding to the left side of an element. However, in an RTL layout, the
          same property applies padding to the right.
        </p>
        <DialogFooter>
          <Button type="button" onClick={() => setIsOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
