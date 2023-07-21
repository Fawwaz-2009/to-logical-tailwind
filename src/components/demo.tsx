import { dir } from "console";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Switch } from "./ui/switch";

const Demo: React.FC = ({}) => {
  const [dir, setDir] = useState<"ltr" | "rtl">("ltr");
  const [logicalTailwind, setLogicalTailwind] = useState(false);
  return (
    <div className="pb-6">
      <h2 id="demo" className="text-center text-4xl">See it in action</h2>
      <p className="my-6 text-center">
        The Markup for the Demo below is a block form{" "}
        <span className="font-bold">Flowbite</span>, which you can find{" "}
        <Button
          asChild
          variant={"link"}
          className="h-auto p-0 text-base text-blue-600"
        >
          <a
            href="https://flowbite.com/blocks/application/advanced-tables/"
            className=""
          >
            here
          </a>
        </Button>
        .
      </p>
      <div className="my-8 flex flex-col items-center justify-center sm:flex-row sm:gap-8">
        <div className="">
          <Label>Direction</Label>
          <Select
            value={dir}
            onValueChange={(str) => setDir(str as "ltr" | "rtl")}
          >
            <SelectTrigger className="w-52">
              <SelectValue />
              <SelectContent>
                <SelectItem value="ltr">LTR</SelectItem>
                <SelectItem value="rtl">RTL</SelectItem>
              </SelectContent>
            </SelectTrigger>
          </Select>
        </div>
        <div className="flex items-center space-x-2 pt-6">
          <Switch
            id="logicalTailwind"
            checked={logicalTailwind}
            onCheckedChange={setLogicalTailwind}
          />
          <Label htmlFor="logicalTailwind">With Logical Tailwind</Label>
        </div>
      </div>
      <Card className="mx-auto max-w-6xl " dir={dir}>
        {logicalTailwind ? <WithLogicalTailwind /> : <Original />}
      </Card>
    </div>
  );
};

export default Demo;

function Original() {
  return (
    <section className="bg-gray-50 p-3 dark:bg-gray-900 sm:p-5">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between space-y-3 p-4 md:flex-row md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex w-full shrink-0 flex-col items-stretch justify-end space-y-2 md:w-auto md:flex-row md:items-center md:space-y-0 md:space-x-3">
              <button
                type="button"
                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4"
              >
                <svg
                  className="mr-2 h-3.5 w-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add product
              </button>
              <div className="flex w-full items-center space-x-3 md:w-auto">
                <button
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  type="button"
                >
                  <svg
                    className="-ml-1 mr-1.5 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                  Actions
                </button>
                <div
                  id="actionsDropdown"
                  className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    className="py-1 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="actionsDropdownButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mass Edit
                      </a>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a
                      href="#"
                      className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete all
                    </a>
                  </div>
                </div>
                <button
                  id="filterDropdownButton"
                  data-dropdown-toggle="filterDropdown"
                  className="hover:text-primary-700 flex w-full items-center justify-center rounded-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:w-auto"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="mr-2 h-4 w-4 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Filter
                  <svg
                    className="-mr-1 ml-1.5 h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
                <div
                  id="filterDropdown"
                  className="z-10 hidden w-48 rounded-lg bg-white p-3 shadow dark:bg-gray-700"
                >
                  <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                    Choose brand
                  </h6>
                  <ul
                    className="space-y-2 text-sm"
                    aria-labelledby="filterDropdownButton"
                  >
                    <li className="flex items-center">
                      <input
                        id="apple"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="apple"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Apple (56)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="fitbit"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="fitbit"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Microsoft (16)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="razor"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="razor"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Razor (49)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="nikon"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="nikon"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        Nikon (12)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="benq"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="benq"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                      >
                        BenQ (74)
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Brand
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Description
                  </th>
                  <th scope="col" className="px-4 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-4 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td className="px-4 py-3">PC</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">300</td>
                  <td className="px-4 py-3">$2999</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-imac-27-dropdown-button"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-27-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-imac-27-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Apple iMac 20&#34;
                  </th>
                  <td className="px-4 py-3">PC</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">200</td>
                  <td className="px-4 py-3">$1499</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-imac-20-dropdown-button"
                      data-dropdown-toggle="apple-imac-20-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-20-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-imac-20-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Apple iPhone 14
                  </th>
                  <td className="px-4 py-3">Phone</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">1237</td>
                  <td className="px-4 py-3">$999</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-iphone-14-dropdown-button"
                      data-dropdown-toggle="apple-iphone-14-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-iphone-14-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-iphone-14-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Apple iPad Air
                  </th>
                  <td className="px-4 py-3">Tablet</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">4578</td>
                  <td className="px-4 py-3">$1199</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-ipad-air-dropdown-button"
                      data-dropdown-toggle="apple-ipad-air-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-ipad-air-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-ipad-air-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Xbox Series S
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3">Microsoft</td>
                  <td className="px-4 py-3">56</td>
                  <td className="px-4 py-3">$299</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="xbox-series-s-dropdown-button"
                      data-dropdown-toggle="xbox-series-s-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="xbox-series-s-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="xbox-series-s-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    PlayStation 5
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3">Sony</td>
                  <td className="px-4 py-3">78</td>
                  <td className="px-4 py-3">$799</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="playstation-5-dropdown-button"
                      data-dropdown-toggle="playstation-5-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="playstation-5-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="playstation-5-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Xbox Series X
                  </th>
                  <td className="px-4 py-3">Gaming/Console</td>
                  <td className="px-4 py-3">Microsoft</td>
                  <td className="px-4 py-3">200</td>
                  <td className="px-4 py-3">$699</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="xbox-series-x-dropdown-button"
                      data-dropdown-toggle="xbox-series-x-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="xbox-series-x-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="xbox-series-x-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Apple Watch SE
                  </th>
                  <td className="px-4 py-3">Watch</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">657</td>
                  <td className="px-4 py-3">$399</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="apple-watch-se-dropdown-button"
                      data-dropdown-toggle="apple-watch-se-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-watch-se-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="apple-watch-se-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    NIKON D850
                  </th>
                  <td className="px-4 py-3">Photo</td>
                  <td className="px-4 py-3">Nikon</td>
                  <td className="px-4 py-3">465</td>
                  <td className="px-4 py-3">$599</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="nikon-d850-dropdown-button"
                      data-dropdown-toggle="nikon-d850-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="nikon-d850-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="nikon-d850-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap px-4 py-3 font-medium text-gray-900 dark:text-white"
                  >
                    Monitor BenQ EX2710Q
                  </th>
                  <td className="px-4 py-3">TV/Monitor</td>
                  <td className="px-4 py-3">BenQ</td>
                  <td className="px-4 py-3">354</td>
                  <td className="px-4 py-3">$499</td>
                  <td className="flex items-center justify-end px-4 py-3">
                    <button
                      id="benq-ex2710q-dropdown-button"
                      data-dropdown-toggle="benq-ex2710q-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 w-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="benq-ex2710q-dropdown"
                      className="z-10 hidden w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="py-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="benq-ex2710q-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="py-1">
                        <a
                          href="#"
                          className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col items-start justify-between space-y-3 p-4 md:flex-row md:items-center md:space-y-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10{" "}
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}
                1000{" "}
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-x-px">
              <li>
                <a
                  href="#"
                  className="ml-0 flex h-full items-center justify-center rounded-l-lg border border-gray-300 bg-white py-1.5 px-3 text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center border border-gray-300 bg-white py-2 px-3 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center border border-gray-300 bg-white py-2 px-3 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 z-10 flex items-center justify-center border py-2 px-3 text-sm leading-tight dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center border border-gray-300 bg-white py-2 px-3 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center border border-gray-300 bg-white py-2 px-3 text-sm leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-full items-center justify-center rounded-r-lg border border-gray-300 bg-white py-1.5 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}

function WithLogicalTailwind() {
  return (
    <section className="bg-gray-50 p-3 dark:bg-gray-900 sm:p-5">
      <div className="max-is-screen-xl mli-auto pli-4 lg:pli-12">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div className="flex flex-col items-center justify-between p-4 space-b-3 md:flex-row md:space-b-0 md:space-i-4">
            <div className="is-full md:is-1/2">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative is-full">
                  <div className="pointer-events-none absolute flex items-center pis-3 inset-block-0 inline-start-0">
                    <svg
                      aria-hidden="true"
                      className="h-5 text-gray-500 is-5 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block rounded-lg border border-gray-300 bg-gray-50 p-2 text-sm text-gray-900 is-full pis-10 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex shrink-0 flex-col items-stretch justify-end is-full space-b-2 md:flex-row md:items-center md:is-auto md:space-b-0 md:space-i-3">
              <button
                type="button"
                className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex items-center justify-center rounded-lg text-sm font-medium text-white pli-4 plb-2 focus:outline-none focus:ring-4"
              >
                <svg
                  className="h-3.5 is-3.5 mie-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add product
              </button>
              <div className="flex items-center is-full space-i-3 md:is-auto">
                <button
                  id="actionsDropdownButton"
                  data-dropdown-toggle="actionsDropdown"
                  className="hover:text-primary-700 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 is-full plb-2 pli-4 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:is-auto"
                  type="button"
                >
                  <svg
                    className="h-5 is-5 -mis-1 mie-1.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                  Actions
                </button>
                <div
                  id="actionsDropdown"
                  className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                >
                  <ul
                    className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                    aria-labelledby="actionsDropdownButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mass Edit
                      </a>
                    </li>
                  </ul>
                  <div className="plb-1">
                    <a
                      href="#"
                      className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Delete all
                    </a>
                  </div>
                </div>
                <button
                  id="filterDropdownButton"
                  data-dropdown-toggle="filterDropdown"
                  className="hover:text-primary-700 flex items-center justify-center rounded-lg border border-gray-200 bg-white text-sm font-medium text-gray-900 is-full plb-2 pli-4 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700 md:is-auto"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="h-4 text-gray-400 is-4 mie-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Filter
                  <svg
                    className="h-5 is-5 -mie-1 mis-1.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                  </svg>
                </button>
                <div
                  id="filterDropdown"
                  className="z-10 hidden rounded-lg bg-white p-3 shadow is-48 dark:bg-gray-700"
                >
                  <h6 className="text-sm font-medium text-gray-900 mbe-3 dark:text-white">
                    Choose brand
                  </h6>
                  <ul
                    className="text-sm space-b-2"
                    aria-labelledby="filterDropdownButton"
                  >
                    <li className="flex items-center">
                      <input
                        id="apple"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 rounded border-gray-300 bg-gray-100 is-4 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="apple"
                        className="text-sm font-medium text-gray-900 mis-2 dark:text-gray-100"
                      >
                        Apple (56)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="fitbit"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 rounded border-gray-300 bg-gray-100 is-4 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="fitbit"
                        className="text-sm font-medium text-gray-900 mis-2 dark:text-gray-100"
                      >
                        Microsoft (16)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="razor"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 rounded border-gray-300 bg-gray-100 is-4 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="razor"
                        className="text-sm font-medium text-gray-900 mis-2 dark:text-gray-100"
                      >
                        Razor (49)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="nikon"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 rounded border-gray-300 bg-gray-100 is-4 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="nikon"
                        className="text-sm font-medium text-gray-900 mis-2 dark:text-gray-100"
                      >
                        Nikon (12)
                      </label>
                    </li>
                    <li className="flex items-center">
                      <input
                        id="benq"
                        type="checkbox"
                        value=""
                        className="text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 h-4 rounded border-gray-300 bg-gray-100 is-4 focus:ring-2 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700"
                      />
                      <label
                        htmlFor="benq"
                        className="text-sm font-medium text-gray-900 mis-2 dark:text-gray-100"
                      >
                        BenQ (74)
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="text-sm text-gray-500 text-start is-full dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="pli-4 plb-3">
                    Product name
                  </th>
                  <th scope="col" className="pli-4 plb-3">
                    Category
                  </th>
                  <th scope="col" className="pli-4 plb-3">
                    Brand
                  </th>
                  <th scope="col" className="pli-4 plb-3">
                    Description
                  </th>
                  <th scope="col" className="pli-4 plb-3">
                    Price
                  </th>
                  <th scope="col" className="pli-4 plb-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    Apple iMac 27&#34;
                  </th>
                  <td className="pli-4 plb-3">PC</td>
                  <td className="pli-4 plb-3">Apple</td>
                  <td className="pli-4 plb-3">300</td>
                  <td className="pli-4 plb-3">$2999</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="apple-imac-27-dropdown-button"
                      data-dropdown-toggle="apple-imac-27-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-27-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="apple-imac-27-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    Apple iMac 20&#34;
                  </th>
                  <td className="pli-4 plb-3">PC</td>
                  <td className="pli-4 plb-3">Apple</td>
                  <td className="pli-4 plb-3">200</td>
                  <td className="pli-4 plb-3">$1499</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="apple-imac-20-dropdown-button"
                      data-dropdown-toggle="apple-imac-20-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-imac-20-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="apple-imac-20-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    Apple iPhone 14
                  </th>
                  <td className="pli-4 plb-3">Phone</td>
                  <td className="pli-4 plb-3">Apple</td>
                  <td className="pli-4 plb-3">1237</td>
                  <td className="pli-4 plb-3">$999</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="apple-iphone-14-dropdown-button"
                      data-dropdown-toggle="apple-iphone-14-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-iphone-14-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="apple-iphone-14-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    Apple iPad Air
                  </th>
                  <td className="pli-4 plb-3">Tablet</td>
                  <td className="pli-4 plb-3">Apple</td>
                  <td className="pli-4 plb-3">4578</td>
                  <td className="pli-4 plb-3">$1199</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="apple-ipad-air-dropdown-button"
                      data-dropdown-toggle="apple-ipad-air-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-ipad-air-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="apple-ipad-air-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    Xbox Series S
                  </th>
                  <td className="pli-4 plb-3">Gaming/Console</td>
                  <td className="pli-4 plb-3">Microsoft</td>
                  <td className="pli-4 plb-3">56</td>
                  <td className="pli-4 plb-3">$299</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="xbox-series-s-dropdown-button"
                      data-dropdown-toggle="xbox-series-s-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="xbox-series-s-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="xbox-series-s-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    PlayStation 5
                  </th>
                  <td className="pli-4 plb-3">Gaming/Console</td>
                  <td className="pli-4 plb-3">Sony</td>
                  <td className="pli-4 plb-3">78</td>
                  <td className="pli-4 plb-3">$799</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="playstation-5-dropdown-button"
                      data-dropdown-toggle="playstation-5-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="playstation-5-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="playstation-5-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    Xbox Series X
                  </th>
                  <td className="pli-4 plb-3">Gaming/Console</td>
                  <td className="pli-4 plb-3">Microsoft</td>
                  <td className="pli-4 plb-3">200</td>
                  <td className="pli-4 plb-3">$699</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="xbox-series-x-dropdown-button"
                      data-dropdown-toggle="xbox-series-x-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="xbox-series-x-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="xbox-series-x-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    Apple Watch SE
                  </th>
                  <td className="pli-4 plb-3">Watch</td>
                  <td className="pli-4 plb-3">Apple</td>
                  <td className="pli-4 plb-3">657</td>
                  <td className="pli-4 plb-3">$399</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="apple-watch-se-dropdown-button"
                      data-dropdown-toggle="apple-watch-se-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="apple-watch-se-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="apple-watch-se-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    NIKON D850
                  </th>
                  <td className="pli-4 plb-3">Photo</td>
                  <td className="pli-4 plb-3">Nikon</td>
                  <td className="pli-4 plb-3">465</td>
                  <td className="pli-4 plb-3">$599</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="nikon-d850-dropdown-button"
                      data-dropdown-toggle="nikon-d850-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="nikon-d850-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="nikon-d850-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th
                    scope="row"
                    className="whitespace-nowrap font-medium text-gray-900 pli-4 plb-3 dark:text-white"
                  >
                    Monitor BenQ EX2710Q
                  </th>
                  <td className="pli-4 plb-3">TV/Monitor</td>
                  <td className="pli-4 plb-3">BenQ</td>
                  <td className="pli-4 plb-3">354</td>
                  <td className="pli-4 plb-3">$499</td>
                  <td className="flex items-center justify-end pli-4 plb-3">
                    <button
                      id="benq-ex2710q-dropdown-button"
                      data-dropdown-toggle="benq-ex2710q-dropdown"
                      className="inline-flex items-center rounded-lg p-0.5 text-center text-sm font-medium text-gray-500 hover:text-gray-800 focus:outline-none dark:text-gray-400 dark:hover:text-gray-100"
                      type="button"
                    >
                      <svg
                        className="h-5 is-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                      </svg>
                    </button>
                    <div
                      id="benq-ex2710q-dropdown"
                      className="z-10 hidden divide-y divide-gray-100 rounded bg-white shadow is-44 dark:divide-gray-600 dark:bg-gray-700"
                    >
                      <ul
                        className="text-sm text-gray-700 plb-1 dark:text-gray-200"
                        aria-labelledby="benq-ex2710q-dropdown-button"
                      >
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Show
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block plb-2 pli-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Edit
                          </a>
                        </li>
                      </ul>
                      <div className="plb-1">
                        <a
                          href="#"
                          className="block text-sm text-gray-700 plb-2 pli-4 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <nav
            className="flex flex-col items-start justify-between p-4 space-b-3 md:flex-row md:items-center md:space-b-0"
            aria-label="Table navigation"
          >
            <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                1-10{" "}
              </span>
              of
              <span className="font-semibold text-gray-900 dark:text-white">
                {" "}
                1000{" "}
              </span>
            </span>
            <ul className="inline-flex items-stretch -space-i-px">
              <li>
                <a
                  href="#"
                  className="flex h-full items-center justify-center border border-gray-300 bg-white text-gray-500 mis-0 plb-1.5 pli-3 rounded-is-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 is-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center border border-gray-300 bg-white text-sm leading-tight text-gray-500 plb-2 pli-3 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center border border-gray-300 bg-white text-sm leading-tight text-gray-500 plb-2 pli-3 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 z-10 flex items-center justify-center border text-sm leading-tight plb-2 pli-3 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center border border-gray-300 bg-white text-sm leading-tight text-gray-500 plb-2 pli-3 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center border border-gray-300 bg-white text-sm leading-tight text-gray-500 plb-2 pli-3 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-full items-center justify-center border border-gray-300 bg-white leading-tight text-gray-500 plb-1.5 pli-3 rounded-ie-lg hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 is-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
