import Link from "next/link";

import { TypeNavigationMenuFields } from "../../../types/contentful-types";
import MobileNavItem from "./MobileNavItem";

interface MobileNavProps {
    maxWidth: number;
    fields: TypeNavigationMenuFields; 
}

const MobileNav = ({ maxWidth, fields }: MobileNavProps) => {
    const navigationItems = fields.navigationItems || []
    return (
        <nav className="absolute top-0 left-0 h-screen w-64 z-20 bg-white lg:hidden flex justify-center py-4 text-primary border">
            <ul className="w-full flex flex-col font-black overflow-scroll hide-scrollbar" style={{ maxWidth }}>
                {navigationItems.map(item => (
                    <MobileNavItem key={item.sys.id} item={item} />
                ))}
            </ul>
        </nav>
    )
}

export default MobileNav