import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/x";
import "react-social-icons/telegram";
import "react-social-icons/discord";
import "react-social-icons/github";
import "react-social-icons/linkedin";
import "react-social-icons/instagram";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4 w-full">
      <div className="container mx-auto flex md:flex-row flex-col-reverse justify-between items-center">
        <div className="text-md mt-4 md:mt-0">
          © Metacube, 2025. All rights reserved.
        </div>
        <div className="flex space-x-8">
          <div>
            <p className="font-bold text-lg mb-2">Contact Us</p>
            <ul>
              <li className="my-2">
                <span className="hover:opacity-75">
                  <SocialIcon
                    url="https://x.com/metacubeGames"
                    bgColor="transparent"
                    style={{ height: 24, width: 24 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <Link
                    href="https://x.com/metacubeGames"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </Link>
                </span>
              </li>
              <li className="my-2">
                <span className="hover:opacity-75">
                  <SocialIcon
                    url="https://discord.gg/FGV6HkMbNj"
                    bgColor="transparent"
                    style={{ height: 24, width: 24 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <Link
                    href="https://discord.gg/FGV6HkMbNj"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Discord
                  </Link>
                </span>
              </li>
              <li className="my-2">
                <span className="hover:opacity-75">
                  <SocialIcon
                    url="https://www.instagram.com/metacubegames"
                    bgColor="transparent"
                    style={{ height: 24, width: 24 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <Link
                    href="https://www.instagram.com/metacubegames"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </Link>
                </span>
              </li>
              {/* <li className="my-2">
                <span className="hover:opacity-75">
                  <SocialIcon
                    network="telegram"
                    url="https://t.me/metacubeofficial"
                    bgColor="transparent"
                    style={{ height: 24, width: 24 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <Link
                    href="https://t.me/metacubeofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </Link>
                </span>
              </li> */}
              <li className="my-2">
                <span className="hover:opacity-75">
                  <SocialIcon
                    url="https://github.com/metacube-games"
                    bgColor="transparent"
                    style={{ height: 24, width: 24 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <Link
                    href="https://github.com/metacube-games"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </Link>
                </span>
              </li>
              <li className="my-2">
                <span className="hover:opacity-75">
                  <SocialIcon
                    url="https://www.linkedin.com/company/metacubegames"
                    bgColor="transparent"
                    style={{ height: 24, width: 24 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                  <Link
                    href="https://www.linkedin.com/company/metacubegames"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold text-lg mb-2">Info</p>
            <ul>
              <li className="my-2">
                <Link
                  href="https://play.metacube.games/linkWallet"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link Wallet
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="https://metacube-1.gitbook.io/metacube-games"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Documentation
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/careers"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Careers
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/terms"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </Link>
              </li>
              <li className="my-2">
                <Link
                  href="/privacy"
                  className="hover:text-gray-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
