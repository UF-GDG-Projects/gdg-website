import { FaLinkedin } from "react-icons/fa";

type Officer = {
  name: string;
  role: string;
  img: string;
  linkedin?: string;
};

const officers: Officer[] = [
  {
    name: "Jack Harris",
    role: "President",
    img: "/photos/officers/jack-president.jpg",
    linkedin: "https://www.linkedin.com/in/jack-harris-uf/",
  },
  {
    name: "Andrew Chuang Saladin",
    role: "Vice President",
    img: "/photos/officers/andrew-vp.png",
    linkedin: "https://www.linkedin.com/in/andrew-cs/",
  },
  {
    name: "Sophie Daniel",
    role: "Treasurer",
    img: "/photos/officers/sophie-treasurer.png",
    linkedin: "https://www.linkedin.com/in/sophie-daniel-846b20284/",
  },
  {
    name: "Theo Weise",
    role: "Technical Lead",
    img: "/photos/officer-img-placeholder.png",
    linkedin: "https://www.linkedin.com/in/atweise/",
  },
  {
    name: "Jack Detweiler",
    role: "Technical Lead",
    img: "/photos/officers/jack-tech.png",
    linkedin: "https://www.linkedin.com/in/jack-detweiler/",
  },
  {
    name: "Weedchenska Jeanbaptiste",
    role: "Technical Lead",
    img: "/photos/officers/weedchenska-tech.jpg",
    linkedin: "https://www.linkedin.com/in/weedchenska-jeanbaptiste/",
  },
  {
    name: "Zach Zaslau",
    role: "Hackathon Lead",
    img: "/photos/officers/zach-hackathon.jpg",
    linkedin: "https://www.linkedin.com/in/zacharyzaslau/",
  },
  {
    name: "Felix Chang",
    role: "Hackathon Lead",
    img: "/photos/officers/felix-hackathon.png",
    linkedin: "https://www.linkedin.com/in/felix-chang01/",
  },
  {
    name: "Carlos Mendez",
    role: "Hackathon Lead",
    img: "/photos/officers/carlos-hackathon.png",
    linkedin: "https://www.linkedin.com/in/carlomen/",
  },
  {
    name: "Sai Rajan",
    role: "Social Lead",
    img: "/photos/officers/sai-social.jpg",
    linkedin: "https://www.linkedin.com/in/sai-rajan-1649991a3999r4/",
  },
  {
    name: "Mishka Sonavadekar",
    role: "Marketing Lead",
    img: "/photos/officers/mishka-marketing.jpg",
    linkedin: "https://www.linkedin.com/in/mishka-sonavadekar/",
  },
  {
    name: "Lu Ighodalo",
    role: "Outreach Lead",
    img: "/photos/officers/lu-outreach.png",
    linkedin: "https://www.linkedin.com/in/luighodalo/",
  },
];

export default function Officers() {
  return (
    <div className="py-16 sm:py-20" id="officers">
      <h2 className="cal text-center text-3xl sm:text-4xl">Meet the Team</h2>
      <p className="pt-3 text-center sm:text-lg text-dull px-3">
        We have a diverse team of officers with a wide variety of skill sets.
      </p>
      <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-2">
        {officers.map((officer) => (
          <Officer key={officer.name} officer={officer} />
        ))}
      </div>
    </div>
  );
}

type OfficerProps = {
  officer: Officer;
};

const Officer: React.FC<OfficerProps> = ({ officer }) => {
  const name = officer.name.split(" ")[0];
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border border-gray bg-white px-2 py-6 shadow-sm">
      {officer.linkedin && (
        <a
          className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white opacity-0 scale-90 hover:opacity-100 hover:scale-100 officer-transition-timing"
          href={officer.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="text-center leading-normal">
            View <span className="text-blue">{name}'s</span> <br />
            LinkedIn!
          </p>
          <span className="pt-2 text-3xl text-blue">
            <FaLinkedin />
          </span>
        </a>
      )}
      <figure>
        <img src={officer.img} alt="" className="h-20 w-20 rounded-full object-cover" />
      </figure>
      <p className="pt-4 text-center">{officer.name}</p>
      <p className="pt-0.5 text-center text-sm text-dull">{officer.role}</p>
    </div>
  );
};
