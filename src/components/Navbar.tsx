// import React from 'react'
'use client';
//directly we cannot call react hooks in next
//thats why we use " use client " this create ui manipulation 
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";

import Link from "next/link";
function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
        
       
        <Menu setActive={setActive}>
       
         <Link href={"/"}>
         <MenuItem setActive={setActive} active={active} item="Home">

         </MenuItem>
         </Link>
         <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-small ">
          <HoveredLink href="/courses">All courses</HoveredLink>
          <HoveredLink href="/courses">Basic Music theory</HoveredLink>
          <HoveredLink href="/courses">Advanced Composition</HoveredLink>
          <HoveredLink href="/courses">Song Writing</HoveredLink>
          <HoveredLink href="/courses">Music Production</HoveredLink>
         
          
          </div>
         </MenuItem>
         <MenuItem setActive={setActive} active={active} item="contact us"></MenuItem>
        
      </Menu>
        
        
    </div>
  )
}

export default Navbar