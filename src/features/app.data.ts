import { Album, BookOpen, Bot, BusFront, Frame, LayoutGrid, Map, PieChart, Settings2, ShoppingCart, SquareTerminal, UserCheck, Users } from "lucide-react";

// This is sample data.
export const data = {
    user: {
      name: "shadcn",
      email: "m@example.com",
      avatar: "/avatars/shadcn.jpg",
    },
    dashboard:{
      name: "Tableau de bord",
      href:"/dashboard",
      icon: LayoutGrid,
    },
    
    navMain: [
      {
        title: "Collaborateur",
        url: "#",
        icon: Users,
        isActive: true,
        items: [
          {
            title: "Collaborateurs",
            url: "#",
          },
          {
            title: "Chauffeurs",
            url: "#",
          }
        ],
      },
      {
        title: "Produits",
        url: "#",
        icon: ShoppingCart,
        items: [
          {
            title: "Aggrégats",
            url: "#",
          },
          {
            title: "A la vente",
            url: "#",
          }
        ],
      },
      {
        title: "Commandes",
        url: "#",
        icon: Bot,
        items: [
          {
            title: "Commandes",
            url: "#",
          },
          {
            title: "Voyages",
            url: "#",
          }
        ],
      },
      {
        title: "Clients",
        url: "#",
        icon: UserCheck,
        items: [
          {
            title: "Clients",
            url: "#",
          },
        ],
      },
      {
        title: "Paramétres",
        url: "#",
        icon: Settings2,
        items: [
          {
            title: "Génerale",
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
        name: "Pack Automobile",
        url:"#",
        icon: BusFront
      },
      {
        name: "Offres d'emploi",
        url: "#",
        icon: Frame,
      },
      {
        name: "Blog",
        url: "#",
        icon: Album,
      },
     
    ],
  }
  