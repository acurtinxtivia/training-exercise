"use client";
import { useEffect, useState } from "react";
import cn from "classnames";

import { TypeHeaderFields } from "../../../types/contentful-types";
import ImageWithFocalPoint from "../ImageWithFocalPoint";
import NavBar from "./NavBar";
import MobileNav from "./MobileNav";
import BarsIcon from "../icons/BarsIcon";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ContactInfo from "./ContactInfo";
import DotsVertical from "../icons/DotsVertical";

const PageHeader = ({ fields }: { fields: TypeHeaderFields }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [navBarSticky, setNavBarSticky] = useState(false);
  const logo = fields.logo;

  useEffect(() => {
    const onScroll = () => {
      setNavBarSticky(window.scrollY > 94);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleNavOpen = () => {
    if (contactOpen) {
      setContactOpen(false);
    }
    setNavOpen(!navOpen);
  };

  const toggleContactOpen = () => {
    if (navOpen) {
      setNavOpen(false);
    }
    setContactOpen(!contactOpen);
  };

  const stickyClass = navBarSticky ? "lg:pb-[60px]" : "";

  return (
    <header
      className={cn(
        "w-full fixed lg:static top-0 z-50 bg-white shadow-sm lg:shadow-none",
        stickyClass
      )}
    >
      <div className="w-full flex justify-center px-4">
        <div
          className="w-full flex justify-between py-[6px] lg:pt-7 lg:pb-6 px-4"
          style={{ maxWidth: fields.maxWidth }}
        >
          <div className="flex gap-4">
            <button className="lg:hidden" onClick={toggleNavOpen}>
              {navOpen ? (
                <ArrowLeftIcon className="h-10 w-10" />
              ) : (
                <BarsIcon className="h-10 w-10" />
              )}
            </button>
            <div className="flex-shrink-0">
              <ImageWithFocalPoint fields={logo.fields} />
            </div>
          </div>
          {fields.contactInfo && (
            <>
              <div className="hidden lg:block">
                <ContactInfo fields={fields.contactInfo.fields} />
              </div>
              <button className="lg:hidden" onClick={toggleContactOpen}>
                <DotsVertical className="h-12 w-12" />
              </button>
            </>
          )}
        </div>
      </div>
      <div className="relative">
        {navOpen && fields.navigationMenu && (
          <MobileNav
            fields={fields.navigationMenu?.fields}
            maxWidth={fields.maxWidth}
          />
        )}
        {fields.navigationMenu && (
          <NavBar
            fields={fields.navigationMenu?.fields}
            maxWidth={fields.maxWidth}
            sticky={navBarSticky}
          />
        )}
        {contactOpen && fields.contactInfo && (
          <div className="lg:hidden w-full flex justify-center pt-9 pb-[20px]">
            <ContactInfo fields={fields.contactInfo?.fields} />
          </div>
        )}
      </div>
    </header>
  );
};

export default PageHeader;
