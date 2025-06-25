import { cn } from "@/lib/utils";
import Image from "next/image";

const components = {
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold mb-4">{children}</h1>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="mb-4">{children}</p>
  ),
  a: ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} className="text-blue-500">
      {children}
    </a>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="list-disc pl-5 mb-4">{children}</ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="list-decimal pl-5 mb-4">{children}</ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="mb-2">{children}</li>
  ),
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-2 border-neutral-300 pl-4 py-2 italic mb-4">
      {children}
    </blockquote>
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={cn("relative rounded px-3 py-2 text-sm", className)}
      {...props}
    />
  ),
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => {
    return (
      <>
        <pre
          className={cn(
            "mb-4 mt-6 overflow-x-auto rounded-lg border border-bg-gray-900 bg-gray-900 py-4",
            className
          )}
          {...props}
        />
      </>
    );
  },
  img: ({ className, alt, src }: React.ImgHTMLAttributes<HTMLImageElement>) => {
    // Only proceed if we have a valid string src
    if (!src || typeof src !== "string") {
      return null;
    }

    return (
      <div className="relative w-full h-auto my-4 overflow-hidden rounded-md border">
        <Image
          className={cn("w-full h-auto object-cover", className)}
          alt={alt || ""}
          src={src}
          width={800}
          height={500}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    );
  },
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-bold mb-2">{children}</h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-bold mb-1">{children}</h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-bold mb-1">{children}</h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 className="text-base font-bold mb-1">{children}</h5>
  ),
  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 className="text-sm font-bold mb-1">{children}</h6>
  ),
};

export { components };
