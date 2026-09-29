import Spinner from "./micro-interactions/Spinner";
import Terminal from "./micro-interactions/Terminal";

export default function About() {
  return (
    <div className="py-16 sm:py-20 sm:mt-20" id="about">
      <div className="px-3.5">
        <h2 className="cal mt-4 text-center text-3xl sm:text-4xl">
          Focused on Project-Based Learning
        </h2>
        <p className="pt-3 text-center text-dull sm:text-lg">
          Our goal is to help members learn full-stack development and create
          their own applications.
        </p>
      </div>
      <div className="mt-8 grid gap-4 tracking-wide md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between rounded-md border border-gray bg-white px-5 py-6 shadow-sm">
          <div>
            <span className="rounded-md bg-blue p-2 font-mono text-sm text-white">
              01
            </span>
            <p className="mt-5 text-[18px] font-medium">Become a Member</p>
            <p className="mt-1.5 text-dull">
              Anyone can become a member! Membership is as simple as joining our
              Discord.
            </p>
          </div>
          <div className="mt-16 flex items-center gap-3">
            <div className="flex">
              <figure className="-mr-6 rounded-full -2 border-blue">
                <img
                  src="/photos/officers/jack-president.jpg"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </figure>
              <figure className="-mr-6 rounded-full border-2 border-red">
                <img
                  src="/photos/officers/andrew-vp.png"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </figure>
              <figure className="-mr-6 rounded-full border-2 border-yellow">
                <img
                  src="/photos/officers/sophie-treasurer.png"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </figure>
              <figure className="rounded-full border-2 border-green">
                <img
                  src="/photos/officers/sai-social.jpg"
                  alt=""
                  className="h-14 w-14 rounded-full"
                />
              </figure>
            </div>
            <span className="text-sm text-dull">+200 Members!</span>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-gray bg-white shadow-sm">
          <div className="px-5 py-6">
            <span className="rounded-md bg-blue p-2 font-mono text-sm text-white">
              02
            </span>
            <p className="mt-5 text-[18px] font-medium">
              Learn Google Technologies
            </p>
            <p className="mt-1.5 text-dull">
              Dive into the world of Google technologies! Expand your skills
              with resources and workshops.
            </p>
          </div>
          <Spinner />
        </div>

        <div className="flex flex-col justify-between rounded-md border border-gray bg-white px-5 shadow-sm">
          <div className="py-6">
            <span className="rounded-md bg-blue p-2 font-mono text-sm text-white">
              03
            </span>
            <p className="mt-5 text-[18px] font-medium">
              Create with Other Developers
            </p>
            <p className="mt-1.5 text-dull">
              Collaborate with a passionate community of developers! Work
              together on exciting projects and coding challenges.
            </p>
          </div>
          <Terminal />
        </div>
      </div>
    </div>
  );
}
