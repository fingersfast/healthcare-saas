"use client";

import { useState } from "react";
import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import MobileMenu from "./MobileMenu";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Prescriptions", href: "/prescriptions" },
  { name: "Medical Records", href: "/medical-records" },
  { name: "Enterprise", href: "/enterprise" },
  { name: "Mockups", href: "/mockups" },
];

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                href="/"
                className="text-2xl font-bold text-blue-600 hover:text-blue-800"
              >
                HealthCarePro
              </Link>
            </div>
            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center sm:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />

      <main className="pt-16">{children}</main>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">HealthCarePro</h3>
              <p className="text-gray-400">
                Transforming healthcare management with modern solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-white"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#doctors"
                    className="text-gray-400 hover:text-white"
                  >
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link
                    href="/prescriptions"
                    className="text-gray-400 hover:text-white"
                  >
                    Prescriptions
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-gray-400 hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mockups"
                    className="text-gray-400 hover:text-white"
                  >
                    Mockups
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>123 Healthcare Ave</li>
                <li>Medical District</li>
                <li>contact@healthcarepro.com</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} HealthCarePro. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
