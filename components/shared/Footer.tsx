import Image from "next/image";
import Link from "next/link";
import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <footer className="background-light900_dark200 light-border text-dark400_light700 flex w-full flex-col gap-5 px-4 py-8 text-center shadow-light-300 dark:shadow-none">
      <div className="flex-center flex-wrap gap-5">
        <div>
          <div className="flex-center mb-2 gap-2">
            <Image
              src="/assets/images/site-logo.svg"
              alt="Dev Answers"
              width={23}
              height={23}
            />
            <p className="h2-bold text-dark-100 dark:text-light-900">
              Dev <span className="text-primary-500">OverFlow</span>
            </p>
          </div>
          <p>Platform to share programming questions and answers.</p>
        </div>
        <div className="flex-center flex-wrap gap-2">
          <div className="flex-center gap-2">
            <p className="base-medium">Developed By:</p>
            <div className="flex-center gap-2">
              <Image
                src="/assets/images/profile.jpg"
                alt="Profile"
                width={50}
                height={50}
                className="rounded-full"
              />
              <p className="body-medium text-dark400_light700">
                Eshan Gupta
              </p>
            </div>
          </div>
          <div className="flex-center gap-2">
            <div className="h-6 w-px bg-slate-500"></div>
            <Link href="https://www.linkedin.com/in/eshangupta25/">
              <LinkedInLogoIcon
                className="text-blue-500"
                width={25}
                height={25}
              />
            </Link>
            <div className="h-6 w-px bg-slate-500"></div>
            <Link href="https://github.com/eshan1925">
              <GitHubLogoIcon className="" width={25} height={25} />
            </Link>
            <div className="h-6 w-px bg-slate-500"></div>
            <p className="body-medium text-dark400_light700">
              eshan1925@gmail.com
            </p>
            <div className="h-6 w-px bg-slate-500"></div>
          </div>
        </div>
      </div>
      <div className="h-px w-full bg-slate-500"></div>
      <p className="small-regular">© 2024 Dev Answers. All rights reserved.</p>
    </footer>
  );
}
