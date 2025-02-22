import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            My journey in full-stack development is powered by an array of mystical
            tools and languages, with JavaScript and its library React casting the core of my
            enchantments. I wield frameworks like React.js, React Native and Next.js with
            precision, crafting seamless portals (websites) that connect realms
            (users) across the digital universe. The ancient arts of the
            Jamstack empower me to create fast, secure, and dynamic experiences,
            while my design skills ensure every creation is not only functional
            but visually captivating. Join me as I continue to explore new
            spells and technologies to shape the future of the web and Mobile applications.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            24+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            3+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api/top-langs?username=danray472&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub Languages"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-stats.vercel.app/api?username=danray472&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="GitHub Stats"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=js,ts,cpp,c,dart,express,flutter,gradle,hibernate,htmx,ai,kali,windows,wordpress,tailwind,python,php,html,css,tailwind,react,nextjs,nodejs,express,mongodb,mysql,postgres,firebase,supabase,bootstrap,sass,git,github,gitlab,vercel,netlify,vite,webpack,graphql,docker,kubernetes,linux,vscode,figma,npm,yarn,kali`}

            alt="Skills"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
  <img
    className="w-full h-auto"
    src={`https://streak-stats.demolab.com/?user=danray472&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
    alt="GitHub Streak"
    loading="lazy"
  />
</ItemLayout>





      </div>
    </section>
  );
};

export default AboutDetails;
