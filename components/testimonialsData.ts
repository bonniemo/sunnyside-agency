import { StaticImageData } from "next/image";
import emilyAvatar from "../public/avatars/image-emily.jpg";
import jennieAvatar from "../public/avatars/image-jennie.jpg";
import thomasAvatar from "../public/avatars/image-thomas.jpg";

export interface Testimonial {
    id: number;
    avatar: StaticImageData;
    alt: string;
    text: string;
    name: string;
    title: string;
}

export const testimonials = [
    {
        id: 1,
        avatar: emilyAvatar,
        alt: "avatar blond girl with long hair",
        text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
        name: "Emily R.",
        title: "Marketing Director",
    },
    {
        id: 2,
        avatar: thomasAvatar,
        alt: "avatar man with short dark hair",
        text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
        name: "Thomas S.",
        title: "Chief Operating Officer",
    },
    {
        id: 3,
        avatar: jennieAvatar,
        alt: "avatar woman with short hair",
        text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
        name: "Jennie F.",
        title: "Business Owner",
    },
];
