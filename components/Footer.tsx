import Image from "next/image";
import facebookIcon from "../public/icons/icon-facebook.svg";
import instagramIcon from "../public/icons/icon-instagram.svg";
import pinterestIcon from "../public/icons/icon-pinterest.svg";
import twitterIcon from "../public/icons/icon-twitter.svg";
import logoGreen from "../public/icons/logo-green.svg";

const Footer = () => {
    return (
        <footer className="bg-light-desaturated-cyan text-center py-l">
            {/* Green Logo */}

            <Image
                src={logoGreen}
                alt="Sunnyside logo in green"
                width={logoGreen.width}
                height={logoGreen.height}
                className="m-auto"
            />

            {/* Navigation Links */}
            <nav className="mt-section-small">
                <ul className="text-dark-desaturated-cyan flex justify-center gap-14 mb-6">
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Projects</a>
                    </li>
                </ul>
            </nav>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mt-l">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={facebookIcon}
                        alt="Facebook icon"
                        width={facebookIcon.width}
                        height={facebookIcon.height}
                    />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={instagramIcon}
                        alt="Instagram icon"
                        width={instagramIcon.width}
                        height={instagramIcon.height}
                    />
                </a>
                <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={twitterIcon}
                        alt="Twitter icon"
                        width={twitterIcon.width}
                        height={twitterIcon.height}
                    />
                </a>
                <a
                    href="https://pinterest.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={pinterestIcon}
                        alt="Pinterest icon"
                        width={pinterestIcon.width}
                        height={pinterestIcon.height}
                    />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
