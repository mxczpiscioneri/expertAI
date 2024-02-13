import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
      <div className="absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50">
        <div className="footer-bg-gradient h-[1.24px] w-full"></div>
        <div className="footer-bg-gradient h-[2.47px] w-full"></div>
        <div className="footer-bg-gradient h-[3.71px] w-full"></div>
        <div className="footer-bg-gradient h-[4.99px] w-full"></div>
        <div className="footer-bg-gradient h-[6.19px] w-full"></div>
        <div className="footer-bg-gradient h-[7.42px] w-full"></div>
        <div className="footer-bg-gradient h-[8.66px] w-full"></div>
        <div className="footer-bg-gradient h-[9.90px] w-full"></div>
        <div className="footer-bg-gradient h-[13px] w-full"></div>
      </div>
      <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5">
        <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>
        <div className="flex flex-wrap justify-between">
          <div className="mb-10 w-full max-w-[520px]">
            <Image
              alt="Logo"
              loading="lazy"
              width="164"
              height="36"
              decoding="async"
              data-nimg="1"
              style={{ color: "transparent" }}
              src="/images/expertAI.svg"
            />
            <p className="mb-12 xl:w-4/5">
              Explore um universo de especialistas <b>IA</b> prontos para guiar,
              ensinar e resolver problemas. Com <b>ExpertAI</b>, eleve sua
              experiência em cada desafio ao nível expert, instantaneamente.
            </p>
            <p className="mt-5.5 font-medium">ExpertAI. All rights reserved.</p>
          </div>
          <div className="w-full max-w-[571px]">
            <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
              <div>
                <h3 className="mb-5 font-semibold text-white">Experts</h3>
                <ul className="flex flex-col gap-3.5">
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Changes log
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-5 font-semibold text-white">Company</h3>
                <ul className="flex flex-col gap-3.5">
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Refund Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Community
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-5 font-semibold text-white">Support</h3>
                <ul className="flex flex-col gap-3.5">
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Integrations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Changes log
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      target="_self"
                      rel=""
                      className="font-medium duration-300 ease-in hover:text-white"
                    >
                      Roadmap
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
