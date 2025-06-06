'use client';

import SidebarLayout, { SidebarItem } from "@/components/sidebar-layout";
import { useSession } from "next-auth/react";
import { BadgePercent, BarChart4, Columns3, Globe, Locate, Settings2, ShoppingBag, ShoppingCart, Users } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

const navigationItems: SidebarItem[] = [
  {
    name: "Overview",
    href: "/",
    icon: Globe,
    type: "item",
  },
  {
    type: 'label',
    name: 'Management',
  },
  {
    name: "My Projects",
    href: "/my-projects",
    icon: ShoppingBag,
    type: "item",
  },
  {
    name: "Forms",
    href: "/forms",
    icon: Users,
    type: "item",
  },
  {
    name: "Recruitment",
    href: "/recruitment",
    icon: Columns3,
    type: "item",
  },
  {
    name: "Analytics",
    href: "/",
    icon: Locate,
    type: "item",
  },
/*   {
    type: 'label',
    name: 'Monetization',
  },
  {
    name: "Revenue",
    href: "/revenue",
    icon: BarChart4,
    type: "item",
  },
  {
    name: "Orders",
    href: "/orders",
    icon: ShoppingCart,
    type: "item",
  },
  {
    name: "Discounts",
    href: "/discounts",
    icon: BadgePercent,
    type: "item",
  }, */
  {
    type: 'label',
    name: 'Settings',
  },
  {
    name: "Payment",
    href: "/payment",
    icon: Settings2,
    type: "item",
  },
];

export default function Layout(props: { children: React.ReactNode }) {
  const params = useParams<{ userId: string }>();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login');
    },
  });
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.id !== params.userId) {
      router.push(`/organization-dashboard/${params.userId}`);
    }
  }, [session, params.userId, router]);

  if (status === "loading") {
    return <div>Loading.. organization</div>;
  }

  return (
    <SidebarLayout 
      items={navigationItems}
      basePath={`/organization-dashboard/${session.user.id}`}
      baseBreadcrumb={[{
        title: session.user.name || 'Dashboard',
        href: `/organization-dashboard/${session.user.id}`,
      }]}
    >
      {props.children}
    </SidebarLayout>
  );
}