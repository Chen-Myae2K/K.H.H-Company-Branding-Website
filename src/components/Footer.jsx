import { Mail } from "lucide-react";
import React from "react";
import logo from "../assets/home/icon_logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = [
    "Imprint",
    "Privacy policy",
    "ISO 9001",
    "GTCP",
    "GTCSD",
    "LinkedIn",
  ];

  return (
    <footer className="mt-20 bg-[#1E323C]">
      <div className="mx-auto w-[95%] py-10 text-gray-300">
        <div className="grid-cols-3 grid ">
          <div className="col-span-2 space-y-10">
            <div className=" flex flex-col md:flex-row space-x-30">
              <div className="space-y-8">
                <h3 className="font-medium">KHH Company Limited</h3>
                <div className="text-sm flex flex-col gap-1">
                  <a
                    href="mailto:khhcompany@gmail.com"
                    className="block text-white/90"
                  >
                    khhcompany@gmail.com
                  </a>
                  <a href="tel:+4334622545" className="block text-white/90">
                    +959 2342 2343
                  </a>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="border border-gray-400 rounded-full px-3 py-1">
                    EN
                  </span>
                  <span>MM</span>
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="font-medium">Newsletter</h3>
                <div className="text-sm flex flex-col gap-1">
                  <p>Subscribe to the KHH</p>
                  <p>newsletter:</p>
                </div>
                <div className="flex space-x-2 bg-royal py-2 px-4 w-fit rounded-full hover:bg-royal/90">
                  <Mail strokeWidth={1.5} />
                  <p>Subscribe now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div className="space-y-8">
              <h3 className="font-medium">Navigation Menu</h3>
              <div className="text-sm flex flex-col gap-1">
                <Link className="hover:underline">Home</Link>
                <Link className="hover:underline">About</Link>
                <Link className="hover:underline">Linkroducts</Link>
                <Link className="hover:underline">Contact</Link>
                <Link className="hover:underline">Track Order</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xs font-medium flex justify-between mt-10">
          <p>©{new Date().getFullYear()} KHH SECCO SORB company limited</p>
          <div className="flex space-x-4">
            <p>imprint</p>
            <p>privacy policy</p>
            <p>contacts</p>
            <p>order now</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
