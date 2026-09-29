import Editor from "./micro-interactions/Editor";

export default function DevFest() {
  return (
    <div className="py-16 sm:py-20">
      <div className="px-4">
        <h2 className="cal text-3xl sm:text-4xl text-center">
          Join us for DevFest
        </h2>
        <p className="pt-3 text-center text-dull sm:text-lg">
          Learn, build, and connect with the developer community.
        </p>
      </div>
      <div className="mt-8 flex flex-col gap-12 lg:gap-0 lg:flex-row w-full items-center overflow-hidden rounded-xl border border-gray bg-white py-10 sm:py-16 shadow-sm">
        <div className="lg:w-1/2 px-6 lg:px-0 lg:pl-12 lg:pr-4 ">
          <p className="cal text-2xl sm:text-3xl leading-[1.125]">
            Join us for DevFest this fall!
          </p>
          <div className="mt-4 grid gap-3 leading-relaxed tracking-wide text-dull text-[15px] sm:text-base">
            <p>
              DevFest brings developers together to learn and build with Google
              technologies. Our event will include a hackathon.
            </p>
            <p>
              Registration closes October 17, 2026. Fill out the form to
              register, then join our Discord for event updates.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://forms.gle/FZ8Yj1cjWWCwoR4x9" target="_blank" rel="noopener noreferrer" className="rounded-md bg-blue px-6 py-2 text-sm tracking-wide text-white">
                Register for DevFest
              </a>
              <a href="https://discord.gg/waWVF8rHP8" target="_blank" rel="noopener noreferrer" className="underline">
                Join Discord for updates
              </a>
            </div>
          </div>
        </div>
        <Editor />
      </div>
    </div>
  );
}
