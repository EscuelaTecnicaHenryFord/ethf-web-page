import * as React from "react"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import type { MenuItem } from "@/lib/data";

export default function NavigationBar(props: { items: MenuItem[] }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {props.items.map((item) => {
          if (item.expand.links_list.length === 0) return <NavigationMenuItem>
            <NavigationMenuLink href={item.link} className={navigationMenuTriggerStyle()}>
              {item.title}
            </NavigationMenuLink>
          </NavigationMenuItem>

          return <NavigationMenuItem>
            <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className={cn("grid gap-3 p-4", {
                "md:grid-cols-2 w-[400px] md:w-[500px] lg:w-[600px]": item.expand.links_list.length > 1,
                "w-[350px]": item.expand.links_list.length < 2,
              })}>
                {item.expand.links_list.map((link) => (
                  <ListItem
                    key={link.id}
                    title={link.title}
                    href={link.link}
                  >
                    {link.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"