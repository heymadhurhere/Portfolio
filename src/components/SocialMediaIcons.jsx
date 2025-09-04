import React from "react";
import { ImLinkedin } from "react-icons/im";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function SocialMediaIcons() {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
            className="hover:opacity-50 transitio duration-500"
            href="https://www.linkedin.com/in/shrishti-mishra-05454b31a"
            target="_blank"
            rel="noreferrer"
            >
                <ImLinkedin size={30} />
            </a>
            <a
            className="hover:opacity-50 transitio duration-500"
            href="https://www.instagram.com/shrishti__3304/"
            target="_blank"
            rel="noreferrer"
            >
                <FaInstagram size={30} />
            </a>
            
            <a
            className="hover:opacity-50 transitio duration-500"
            href="https://github.com/shrishtimishra3304"
            target="_blank"
            rel="noreferrer"
            >
                <FaGithub size={30} />
            </a>
        </div>
        
    )
}

export default SocialMediaIcons;