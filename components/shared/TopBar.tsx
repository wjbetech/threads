import React from 'react'
import Link from "next/link"
import Image from "next/image"
import logo from "@/assets/logo.png"
import { BiHome } from "react-icons/bi"
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs"
import { CiLogout } from "react-icons/ci"

const TopBar = () => {
  return (
    <nav className="topbar bg-slate-900 text-white">
      <div className="text-white text-heading1-bold align-middle">
        <Link href="/" className="flex">
          <BiHome className="my-2" />
          <p className="ml-4">Threads</p>
        </Link>
      </div>
      {/* <Link href="https://github.com/wjbetech" target="_blank" className="flex items-center gap-4">
        <Image src={logo} alt="logo" className="" height={200} width={200} />
      </Link> */}

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer mr-2">
                <button style={{fontSize: "24px", fontWeight: "bold"}}>
                  <CiLogout />
                </button>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: "py-2 px-4 text-white"
            }
          }}
        >

        </OrganizationSwitcher>

      </div>
    </nav>
  )
}

export default TopBar
