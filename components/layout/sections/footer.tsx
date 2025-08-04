import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <div className="w-9 h-13 mr-2 rounded-lg">
              
              
              <img src="/logo.png"/>
              </div>
              <h3 className="text-2xl">CICE</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <div>
              <Link href="cice.jiitn@gmail.com" className="opacity-60 hover:opacity-100">
                Email
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                
              </Link>
            </div>

            <div>
              <Link href="https://www.instagram.com/cice_jiit/" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Socials</h3>
           

            <div>
              <Link href="https://www.facebook.com/cicejiit" className="opacity-60 hover:opacity-100">
               Facebook
              </Link>
            </div>

            <div>
              <Link href="https://www.instagram.com/cice_jiit/" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; CICE JIIT
           
          </h3>
        </section>
      </div>
    </footer>
  );
};
