"use client"
import { usePathname } from "next/navigation";

import Link from 'next/link'
import React from 'react'

function CreateCompNav() {
	const pathname = usePathname();
	  const isActive = pathname === "/pitchsubmission";
// console.log(pathname, "pathname")
  return (
	<Link href="/pitchsubmission" className={`${isActive ? "text-[#EF4444]" : "text-black"} hover:text-[#EF4444]`}>
          Create	</Link>
  )
}

export default CreateCompNav