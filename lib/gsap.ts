import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registering once here means every component can import from "@/lib/gsap" and forget about plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

export { gsap, ScrollTrigger, useGSAP };
