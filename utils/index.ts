
import gsap from "gsap";
import { SplitText } from "gsap/all";


export const splitWords = (selector: string): Element[] => {
  const elements = document.querySelectorAll(selector);
  const words: Element[] = [];
  
  elements.forEach((element) => {
    const text = element.textContent || "";
    const split = text.split(" ");
    element.innerHTML = split
      .map((word) => `<span class="word">${word}</span>`)
      .join(" ");
    
    element.querySelectorAll(".word").forEach((word) => words.push(word));
  });
  
  return words;
};

export const animateText = (elements: Element[], selector: string) => {
  gsap.from(elements, {
    y: "100%",
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
  });
};

// Image URL helper (now just returns the path or a placeholder)
export const getImageUrl = (image: { url?: string } | undefined): string => {
  if (!image || !image.url) return "/images/placeholder.jpg";
  return image.url;
};

export function trimText(text:string, num = 300) {
  if (!text) return "n/a";
  return text.length > num ? `${text?.slice(0, num)}...` : text;
}

export const textAnimation = {
  autoAlpha: 0,
  y: 50,
  duration: 1,
  ease: "power2",
  stagger: 0.1,
};

// export const animateText = (section, trigger) => {
//   return gsap.from(section, {
//     ...textAnimation,
//     scrollTrigger: {
//       trigger,
//       marker: true,
//       start: "top center",
//       end: "bottom center",
//     },
//   });
// };
// export const splitWords = (tag, split) => {
//   return SplitText.create(tag, { type: "words" })[split ?? 'words'];
// };
