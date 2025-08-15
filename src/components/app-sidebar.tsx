"use client"

import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { data } from "@/features/app.data"
import Image from "next/image"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {open} = useSidebar()
  const pathname = usePathname()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="py-6 flex flex-col justify-center items-center text-center"  >
      {open ? (
            <Link href="/" className="flex items-center text-2xl  font-medium">
              <Image src="/38888.jpg"  height={100} width={100} alt="Straca" className="rounded-full" />
            </Link>
          ) : (
            <>
              <Link
                href="/"
                className="flex items-center text-2xl  font-medium"
              >
                <span className="text-primary">ST</span>
              </Link>
            </>
          )}
      </SidebarHeader>
      <SidebarGroup>
        <SidebarGroupLabel></SidebarGroupLabel>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              tooltip={data.dashboard.name}
              isActive={pathname == data.dashboard.href}
              asChild
            >
              <Link href={data.dashboard.href}>
                <data.dashboard.icon />
                <span>{data.dashboard.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
