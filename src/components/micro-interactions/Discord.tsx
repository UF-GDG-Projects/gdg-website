import {
  FaArrowUp,
  FaDiscord,
  FaHashtag,
  FaPlus,
  FaSearch,
  FaUser,
} from "react-icons/fa";

export default function Discord() {
  return (
    <div className="h-[400px] w-full rounded-xl border border-grayer p-1 sm:w-auto xl:translate-x-[9px]">
      <div className="flex h-full w-full overflow-hidden rounded-lg border border-grayer">
        <div className="hidden h-full w-[64px] flex-col items-center gap-3 bg-off-white px-1 py-3 sm:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-blue">
            <FaDiscord />
          </div>
          <div className="h-0.5 w-9 rounded-full bg-white" />
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white pl-px">
            <img src="/dsc.png" alt="" className="w-[20px]" />
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#34BE8B]">
            <FaPlus />
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#34BE8B]">
            <FaSearch />
          </div>
        </div>

        <div className="flex w-full flex-col justify-between pb-1 sm:w-[400px]">
          <div className="flex items-center gap-1.5 bg-off-white px-2 py-2.5 text-xs text-dull">
            <FaHashtag />
            <span className="mt-0.5 sm:mt-0">General Chat</span>
          </div>

          <div className="flex h-full flex-col gap-4 overflow-y-auto px-3 py-4">
            <div className="flex gap-2">
              <figure className="flex h-8 w-8 min-w-8 items-center justify-center rounded-full border border-gray">
                <img src="/dsc.png" alt="" className="w-5" />
              </figure>
              <p className="text-xs tracking-wide text-dull">
                Hi, welcome to the GDG on Campus at the University of
                Florida! Do you have any questions?
              </p>
            </div>

            <div className="flex gap-2">
              <figure className="flex h-8 w-8 min-w-8 items-center justify-center rounded-full border border-gray text-xs text-dull">
                <FaUser />
              </figure>
              <p className="text-xs tracking-wide text-dull">
                Hello, how do I become a member?
              </p>
            </div>

            <div className="flex gap-2">
              <figure className="flex h-8 w-8 min-w-8 items-center justify-center rounded-full border border-gray">
                <img src="/dsc.png" alt="" className="w-5" />
              </figure>
              <p className="text-xs tracking-wide text-dull">
                All you need to become a member is to join our discord server!
              </p>
            </div>

            <div className="flex gap-2">
              <figure className="flex h-8 w-8 min-w-8 items-center justify-center rounded-full border border-gray text-xs text-dull">
                <FaUser />
              </figure>
              <p className="text-xs tracking-wide text-dull">
                Do you have any exciting events coming soon?
              </p>
            </div>

            <div className="flex gap-2">
              <figure className="flex h-8 w-8 min-w-8 items-center justify-center rounded-full border border-gray">
                <img src="/dsc.png" alt="" className="w-5" />
              </figure>
              <p className="text-xs tracking-wide text-dull">
                Yes! DevFest includes a hackathon this fall. Register by
                October 17!
              </p>
            </div>
          </div>

          <div className="pl-1.5 pr-[7px]">
            <div className="flex items-center justify-between rounded-sm bg-[#ECEDEF] px-4 py-2 text-xs tracking-wide text-[#63686E]">
              <p>Message #General</p>
              <span className="rounded-full bg-[#63686E] p-0.5 text-[10px] text-off-white">
                <FaArrowUp />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
