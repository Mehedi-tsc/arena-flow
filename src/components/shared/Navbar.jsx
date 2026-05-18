'use client'
import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = <>
    <li>
      <Link href="/">Home</Link>
    </li>
    <li>
      <Link href="/all-facilities">
        All Facilities
      </Link>
    </li>
    <li>
      <Link href="/my-bookings">My Bookings</Link>
    </li>
    <li>
      <Link href="/add-facility">Add Facility </Link>
    </li>
    <li>
      <Link href="/manage-facilities">Manage My Facilities</Link>
    </li>
  </>

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 max-w-7xl items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="">
            <Image
              className=""
              src='/logo-nav-3.png'
              alt="Nav-logo"
              width={200}
              height={80}
            />

          </div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          {links}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <Link href="#">Login</Link>
          <Button>Sign Up</Button>
          <ProfileDropdown/>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              <Link href="#" className="block py-2">
                Login
              </Link>
              <Button className="w-full">Sign Up</Button>
              <ProfileDropdown/>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}