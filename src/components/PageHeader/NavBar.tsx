import cn from 'classnames'

import { TypeNavigationMenuFields } from "../../../types/contentful-types";
import NavItem from "./NavItem";

interface NavBarProps {
    maxWidth: number;
    fields: TypeNavigationMenuFields;
    sticky?: boolean;
}

const NavBar = ({ maxWidth, fields, sticky = false }: NavBarProps) => {
    const navigationItems = fields.navigationItems || []
    const stickyClass = sticky ? 'fixed top-0' : ''

    return (
        <nav className={cn("w-full bg-primary-dark hidden lg:flex justify-center py-5 text-white px-4", stickyClass)}>
            <ul className="flex w-full gap-[40px] font-bold px-4" style={{ maxWidth }}>
                {navigationItems.map(item => (
                    <NavItem item={item} key={item.sys.id} stickyNav={sticky} />
                ))}
            </ul>
        </nav>
    )
}

export default NavBar