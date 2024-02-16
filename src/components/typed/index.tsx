import { SocialIcon } from "react-social-icons/component";

//TODO: rename component
export function CommunityJoinSection() {

  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <h1 className="md:text-6xl font-medium tracking-widest uppercase text-white m-4">
        Metacube
      </h1>
      <p className="text-neutral-200 text-xs sm:text-base">
        Join the Community
      </p>
      <div className="flex flex-row space-y-0  space-x-24 p-0">
        <SocialIcon
          url="https://x.com/metacubeGames"
          bgColor="transparent"
          style={{ height: 96, width: 96 }}
          className="transition-transform duration-300 opacity-90 hover:opacity-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        />
        <SocialIcon
          url="https://discord.gg/FGV6HkMbNj"
          bgColor="transparent"
          style={{ height: 96, width: 96 }}
          className="transition-transform duration-300 opacity-90 hover:opacity-100 hover:scale-105"
          target="_blank"
          rel="noopener noreferrer"
        />
      </div>
    </div>
  );
}
