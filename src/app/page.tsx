import Image from "next/image";
import api from "./api";

export default async function Home() {
  const links = await api.user.list();

  return (
    <div className="flex flex-col gap-8 max-w-80">
      <div className="flex flex-col justify-center items-center gap-4">
        <Image
          className="rounded-full"
          width={96}
          height={96}
          src="/photo.webp"
          alt="photo"
          priority
        />
        <div className="flex flex-col gap-1 items-center">
          <h1 className="text-xl font-bold">@tm10ymhp</h1>
          <p className="text-center">
            Full Stack Developer enfocado en crear productos con especial
            atención al detalle.
          </p>
        </div>
      </div>
      <ul className="flex flex-col gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              target="_blank"
              rel="nooopener noreferrer"
              className={[
                "grid place-content-center w-full py-2.5",
                "hover:scale-105 bg-black/50 duration-100",
                "border border-white rounded-full",
                "shadow-lg shadow-zinc-700",
              ].join(" ")}
            >
              {link.slug}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
