import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ToolCard from "@/components/ToolCard";
import experts, { Expert } from "@/data/experts";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative z-10 overflow-hidden">
        <Header />
        <div className="mx-auto max-w-7xl">
          <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
            <div className="-u-z-10 hero-circle-gradient absolute -top-[128%] left-1/2 -z-1 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]"></div>
            <div className="-u-z-10 hero-circle-gradient absolute -top-[112%] left-1/2 -z-1 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]"></div>
            <div className="-u-z-10 absolute left-1/2 top-0 aspect-[1204/394] w-full max-w-[1204px] -translate-x-1/2">
              <Image
                alt="blur"
                layout="fill"
                className="max-w-none"
                src="/images/blur-02.svg"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  inset: "0px",
                  color: "transparent",
                }}
              />
            </div>
            <div className="-u-z-10 absolute left-1/2 top-0 h-full w-full -translate-x-1/2 bg-[url(/images/blur-01.svg)] bg-cover bg-top bg-no-repeat"></div>
          </div>
        </div>
        <div className="relative z-1 mx-auto max-w-[900px]">
          <div className="text-center">
            <h1 className="my-6 text-3xl font-extrabold text-white sm:text-5xl xl:text-heading-1">
              Sua Inteligência Especializada
            </h1>
            <p className="mx-auto mb-20 max-w-[500px] font-medium md:text-lg">
              Explore um universo de especialistas <b>IA</b> prontos para guiar,
              ensinar e resolver problemas. Com <b>ExpertAI</b>, eleve sua
              experiência em cada desafio ao nível expert, instantaneamente.
            </p>
          </div>
        </div>
        <div className="relative mx-auto mt-20 aspect-[1170/20] w-full max-w-[1170px]">
          <Image
            alt="hero"
            layout="fill"
            objectFit="cover"
            src="/images/hero.png"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: "14px",
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
          />
        </div>
      </section>
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experts.map((expert: Expert) => (
            <ToolCard
              key={expert.title}
              icon={expert.icon}
              title={expert.title}
              description={expert.description}
              href={expert.href}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
