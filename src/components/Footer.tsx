import { FaDiscord, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="border-t border-grayer py-20 sm:py-24">
      <div className="mx-auto flex flex-col lg:flex-row gap-20 lg:gap-32 max-w-[1200px] px-5 sm:px-3">
        <div className="whitespace-nowrap">
          <p className="cal text-3xl">Google Developer Group on Campus</p>
          <p className="sm:pt-2 pt-4 text-sm leading-relaxed text-dull">
            © {new Date().getFullYear()} UF Google Developer Group on Campus. <br />
            All rights reserved.
          </p>
          <div className="flex items-center gap-4 pt-3 text-[22px] text-dull">
            
            <a href="https://github.com/9lde/ufgdgoncampus" target="_blank"><FaGithub /></a>
            <a href="https://discord.gg/waWVF8rHP8" target="_blank"><FaDiscord /></a>
            <a href="https://www.instagram.com/gdgatuf/" target="_blank"><FaInstagram /></a>
            
          </div>
          <p className="pt-3 text-sm leading-relaxed">
            Focused on helping members improve <br />
            their project development skills since 2020.
          </p>
        </div>
        <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-16">
          <div>
            <p className="font-medium">Sections</p>
            <div className="grid gap-5 mt-5 text-sm pr-2">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#officers">Officers</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div>
            <p className="font-medium">Links</p>
            <div className="grid gap-5 mt-5 text-sm pr-2">
              <a target="_blank" href="https://www.instagram.com/gdgatuf/">Instagram</a>
              <a target="_blank" href="https://discord.gg/waWVF8rHP8">Discord</a>
              <a target="_blank" href="https://github.com/9lde/ufgdgoncampus">Source Code</a>
            </div>
          </div>
          <div>
            <p className="font-medium">GDG on Campus Info</p>
            <div className="grid gap-5 mt-5 text-sm pr-2">
              <a target="_blank" href="https://developers.google.com/community">About GDG on Campus</a>
              <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/FZ8Yj1cjWWCwoR4x9">DevFest registration</a>
            </div>
          </div>
         
          
        </div>
      </div>
    </div>
  );
}
