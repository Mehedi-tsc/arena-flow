'use client'
import { useState } from "react";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import ProfileDropdown from "./ProfileDropdown";
import { authClient } from "@/lib/auth-client";
import { usePathname } from "next/navigation";


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = authClient.useSession()
  const user = session?.user
  const pathName = usePathname()
  
  const links = <>
    <li className={`${pathName === "/" && 'font-bold'}`}>
      <Link href="/" >Home</Link>
    </li>
    <li className={`${pathName === "/all-facilities" && 'font-bold'}`}>
      <Link href="/all-facilities">
        All Facilities
      </Link>
    </li>
    <li className={`${!user && 'hidden'} ${pathName === "/my-bookings" && 'font-bold'}`}>
      <Link href="/my-bookings">My Bookings</Link>
    </li>
    <li className={`${!user && 'hidden'} ${pathName === "/add-facility" && 'font-bold'} `}>
      <Link href="/add-facility">Add Facility </Link>
    </li>
    <li className={`${!user && 'hidden'} ${pathName === "/manage-facilities" && 'font-bold'}`}>
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

          {
            !user ? <Link href="/login"><Button>Login</Button></Link> : <ProfileDropdown />
          }

        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            {links}
            <li className="mt-4 flex flex-col gap-2 border-t border-separator pt-4">
              {
                !user?<Link href="/login" className="block py-2">
                Login
              </Link>:<ProfileDropdown/>
              }

            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}