import Link from "next/link";

import { TypeNavigationMenuFields } from "../../types/contentful";

interface NavBarProps {
    maxWidth: number;
    fields: TypeNavigationMenuFields; 
}

const NavBar = ({ maxWidth, fields }: NavBarProps) => {
    const navigationItems = fields.navigationItems || []
    return (
        <nav className="w-full bg-primary-dark hidden md:flex justify-center py-4 px-4 text-white">
            <ul className="w-full flex gap-8 font-bold" style={{ maxWidth }}>
                {navigationItems.map(item => (
                    <ul key={item.sys.id}>
                        <Link href={`/${item.fields.slug}`}>
                            {item.fields.label}
                        </Link>
                    </ul>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar