import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <section
      id="main"
      className="relative bg-[linear-gradient(180deg,rgba(1,1,1,0.01),rgba(1,1,100,0.7)85%,#314792_99%),url('https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 bg-black/45 sm:from-white/15 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            PAPO TECH 2024
          </h1>

          <p className="mt-4 text-gray-200 sm:text-xl/relaxed w-auto">
            Este é o seu momento para mergulhar em discussões envolventes sobre
            as últimas tendências do mercado, desafios e oportunidades para
            iniciantes, e tudo mais relacionado ao universo tech.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link
              href="#"
              className="block uppercase w-full rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              participar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
