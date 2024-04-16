import LocalSearch from "@/components/shared/search/LocalSearch";
import type { Metadata } from "next";
import { Skeleton } from "@/components/ui/skeleton";

export const metadata: Metadata = {
  title: 'Jobs | DevOverflow',
}
const Loading = () => {
  return (
    <>
      <h1 className="h1-bold text-dark100_light900">Jobs</h1>
      <div className="mt-11 flex w-full grow justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearch
          route="/jobs"
          iconPosition="left"
          imgSrc="/assets/icons/job-search.svg"
          placeHolder="Job Title, Company, or Keywords"
          otherClasses="flex-1"
        />
        <Skeleton
          className="body-regular background-light800_dark300 text-dark500_light700 light-border shadow-light100_darknone flex min-h-[56px] justify-start gap-3 border border-slate-200 px-4 py-2.5 dark:border-slate-800 sm:w-[210px]"
        />
      </div>
      <div className="mt-11 flex w-full flex-col gap-10">
            {[1,2,3,4,5,6,7,8].map((item: any) => (
              <Skeleton
              key={item}
              className="background-light900_dark200 light-border shadow-light100_darknone flex flex-col items-start gap-6 rounded-lg border p-6 sm:flex-row sm:p-8"
              />
            ))}
      </div>
    </>
  )
}

export default Loading;