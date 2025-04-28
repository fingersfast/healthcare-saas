"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

interface MobileMenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Menu
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="mt-6 space-y-6">
                  <Link
                    href="/dashboard"
                    className="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    href="/prescriptions"
                    className="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Prescriptions
                  </Link>
                  <Link
                    href="/medical-records"
                    className="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Medical Records
                  </Link>
                  <Link
                    href="/enterprise"
                    className="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Enterprise
                  </Link>
                  <Link
                    href="/mockups"
                    className="block w-full rounded-lg px-4 py-2 text-left text-sm font-medium text-gray-900 hover:bg-gray-100"
                    onClick={() => setOpen(false)}
                  >
                    Mockups
                  </Link>
                  <div className="pt-4">
                    <Link
                      href="#contact"
                      className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                      onClick={() => setOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
