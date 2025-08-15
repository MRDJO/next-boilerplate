import { DASHBOARDSTARTPATH } from "@/lib/config";
import { Album, BookOpen, Bot, BusFront, Frame, LayoutGrid, Map, PieChart, Settings2, ShoppingCart, SquareTerminal, UserCheck, Users } from "lucide-react";

// This is sample data.
export const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    dashboard:{
      name: "Overview",
      href:"/dashboard",
      icon: LayoutGrid,
    },
    
    navMain: [
      {
        title: "Settings",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    projects: [
      {
        name: "Users",
        url: `${DASHBOARDSTARTPATH}/users`,
        icon: Album,
      },
     
    ],
  }
  