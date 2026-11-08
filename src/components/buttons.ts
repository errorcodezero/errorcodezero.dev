import type { ImageMetadata } from "astro";
import americanflag from "../assets/americanflag.gif";
import newlambdaresearchfacility from "../assets/newlambdaresearchfacility.gif";
import neovim from "../assets/neovim.png";
import portal2now from "../assets/portal2now.gif";
import movingpurpletrain from "../assets/movingpurpletrain.gif";
import googleballs from "../assets/googleballs.gif";

export const buttons: { src: string | ImageMetadata; link?: string; alt: string }[] = [
	{
		src: "/button.gif",
		link: "/",
		alt: "ErrorCode0's Button",
	},
	{
		src: americanflag,
		alt: "American Flag Button",
	},
	{
		src: newlambdaresearchfacility,
		alt: "New Lambda Research Facility Button",
	},
	{
		src: neovim,
		alt: "Neovim Button",
	},
	{
		src: portal2now,
		alt: "Portal 2 Now Button",
	},
	{
		src: movingpurpletrain,
		alt: "Moving Purple Train Button",
	},
	{
		src: googleballs,
		alt: "Google Balls Button",
	},
	{
		src: "https://qntm.org/files/camtime/camtime.png",
		link: "https://qntm.org/camtime",
		alt: "Ban time travel NOW",
	},
	{
		src: "https://bomberfish.ca/button.gif",
		link: "https://bomberfish.ca/",
		alt: "BomberFish's Button",
	},
	{
		src: "https://foxmoss.com/foxmossbutton.png",
		link: "https://foxmoss.com",
		alt: "Foxmoss's Button",
	},
	{
		src: "https://v1c.rocks/88x31.png",
		link: "https://v1c.rocks",
		alt: "Vic's Button",
	},
	{
		src: "https://novatea.dev/88x31.gif",
		link: "https://novatea.dev",
		alt: "Nova's Button",
	},
	{
		src: "https://www.addy10s.xyz/addy88x31.gif",
		link: "https://www.addy10s.xyz/",
		alt: "Addy's Button",
	},
	{
		src: "https://irispond.net/images/irisbutton.png",
		link: "https://irispond.net",
		alt: "Iris' Button"
	}
];
