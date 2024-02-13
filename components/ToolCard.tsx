import { Expert } from "@/data/experts";

export default function ToolCard({ icon, title, description, href }: Expert) {
  return (
    <div className="aiExamples-border-gredient relative rounded-lg">
      <div className="group relative overflow-hidden rounded-lg px-8 py-9 ">
        <span className="features-bg absolute left-0 top-0 -z-1 h-full w-full undefined"></span>
        <span className="icon-border relative mx-auto mb-6 inline-flex h-20 w-full max-w-[80px] items-center justify-center rounded-full text-3xl">
          {icon}
        </span>
        <h3 className="mb-4 text-2xl font-semibold text-white truncate">
          {title}
        </h3>
        <p className="font-medium line-clamp-3 h-20">{description}</p>
        <a
          aria-label="Try it out! button"
          className="button-border-gradient hover:button-gradient-hover relative mt-9 inline-block gap-1.5 rounded-lg  px-6 py-3 text-sm text-white shadow-button hover:shadow-none"
          href={href}
        >
          Experimentar
        </a>
      </div>
    </div>
  );
}
