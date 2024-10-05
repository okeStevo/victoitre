import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import bg from "@/app/public/exp2.svg"
import Image from "next/image";
export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <Image alt="ss" src={bg} loading="eager" width={100} height={100}  className="w-full h-full" />
  </div>
);
const items = [
  {
    title: "Engaging Language Learning",
    description:
      "The lessons are designed to make learning French fun and interactive, with activities and games that keep children engaged.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Age-Appropriate Lessons",
    description:
      "The curriculum is tailored specifically for young learners, ensuring that lessons are accessible, easy to follow, and enjoyable for kids.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Cultural Awareness",
    description:
      "Introduce children to French culture through stories, songs, and traditions to deepen their connection to the language.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },

  {
    title: "Personalized Learning",
    description:
      "Offer lessons that adapt to the learning pace and style of each child, helping them progress confidently.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Personalized Learning",
    description:
      "Offer lessons that adapt to the learning pace and style of each child, helping them progress confidently.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
