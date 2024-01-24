import Link from "next/link";

import { TypeNavigationMenuFields } from "../../types/contentful";

interface MobileNavProps {
    maxWidth: number;
    fields: TypeNavigationMenuFields; 
}

const MobileNav = ({ maxWidth, fields }: MobileNavProps) => {
    const navigationItems = fields.navigationItems || []
    return (
        <nav className="absolute top-0 left-0 h-screen w-64 z-20 bg-white md:hidden flex justify-center py-4 text-primary">
            <ul className="w-full flex flex-col gap-8 font-black px-6" style={{ maxWidth }}>
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

export default MobileNav