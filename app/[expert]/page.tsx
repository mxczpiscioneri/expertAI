import { ChatWindow } from "@/components/ChatWindow";
import Header from "@/components/Header";
import experts from "@/data/experts";
import Image from "next/image";

export default function Page({ params }: { params: { expert: string } }) {
  const slug = params?.expert;

  const expert = experts.find((e) => e.href === `/${slug}`);

  if (!expert) {
    return <div>Especialista não encontrado.</div>;
  }

  return (
    <>
      <Header />
      <section id="support" className="scroll-mt-17">
        <div className="container mx-auto px-4 sm:px-8 xl:px-0">
          <div className="relative z-999 overflow-hidden rounded-[30px] bg-dark px-4 pt-25 sm:px-20 lg:px-27.5">
            <div className="absolute -top-[16%] left-1/2 -z-1 flex w-full max-w-[690px] -translate-x-1/2 justify-center gap-7.5 opacity-40">
              <div className="pricing-grid pricing-grid-border relative bottom-12 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-7 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-3 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-2 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-5 h-[250px] w-full max-w-[50px]"></div>
              <div className="pricing-grid pricing-grid-border relative bottom-8 h-[250px] w-full max-w-[50px]"></div>
            </div>
            <div className="absolute -top-30 left-1/2 -z-1 h-60 w-full max-w-[482px] -translate-x-1/2 overflow-hidden">
              <div className="stars"></div>
              <div className="stars2"></div>
            </div>
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <span className="absolute left-1/2 top-0 -z-1 h-full w-full -translate-x-1/2 bg-[url(/images/blur-19.svg)] bg-cover bg-center bg-no-repeat"></span>
              <span className="absolute left-1/2 top-0 -z-1 aspect-[1170/592] w-full -translate-x-1/2">
                <Image
                  alt="blur"
                  loading="lazy"
                  decoding="async"
                  layout="fill"
                  className="max-w-none"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    color: "transparent",
                  }}
                  src="/images/blur-20.svg"
                />
              </span>
              <span className="absolute left-1/2 top-0 -z-1 mx-auto aspect-[530/254] w-full max-w-[530px] -translate-x-1/2">
                <Image
                  alt="blur"
                  loading="lazy"
                  decoding="async"
                  layout="fill"
                  className="max-w-none"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: "0",
                    top: "0",
                    right: "0",
                    bottom: "0",
                    color: "transparent",
                  }}
                  src="/images/blur-21.svg"
                />
              </span>
            </div>
            <div className="wow fadeInUp relative z-10 mb-16 text-center">
              <span className="hero-subtitle-gradient relative mb-4 inline-flex items-center gap-2 rounded-full px-4.5 py-2 text-sm font-medium">
                <Image
                  alt="icon"
                  loading="lazy"
                  width="16"
                  height="16"
                  decoding="async"
                  data-nimg="1"
                  style={{ color: "transparent" }}
                  src="/images/icon-title.svg"
                />
                <span className="hero-subtitle-text">Podemos te ajudar?</span>
              </span>
              <h2 className="mb-4.5 text-2xl font-extrabold text-white sm:text-4xl xl:text-heading-2">
                {expert.icon} {expert.title}
              </h2>
              <p className="mx-auto max-w-[714px] font-medium">
                {expert.description}
              </p>
            </div>
            <div className="form-box-gradient relative overflow-hidden rounded-[25px] bg-dark p-6 sm:p-8 xl:p-15 mb-20">
              <ChatWindow
                endpoint="api/chat"
                emoji={expert.icon}
                placeholder={`Faça sua pergunta para o ${expert.gptName}`}
                emptyStateComponent={<div></div>}
              />
            </div>
          </div>
        </div>
      </section>
      {/* <Footer /> */}
    </>
  );
}

// export async function generateStaticParams() {
//   return experts.map((expert) => ({
//     slug: expert.href,
//   }));
// }
