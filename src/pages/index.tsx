import Head from "next/head";

export default function Home() {
  const name = "Matteo Pagliazzi";
  const description = `This is ${name}'s (aka paglias) personal website.`;
  return (
    <main
      className="
        w-full  bg-gray-200 text-gray-900
        min-h-screen flex flex-col
         px-12 py-12 pb-2"
    >
      <Head>
        <title>{name}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <header className="mb-4">
        <div className="prose prose-xl max-w-full">
          <h1
            className="w-full border-b-4 border-blue-500 pb-4"
            style={{ fontWeight: "bold" }}
          >
            {name}
          </h1>
        </div>
      </header>
      <article className="prose prose-xl max-w-full w-full flex-grow">
        <ul className="lead">
          <li>
            <a href="https://github.com/paglias" target="_blank" rel="noopener">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/matteopagliazzi/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:matteopagliazzi@gmail.com"
              target="_blank"
              rel="noopener"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/MatteoPagliazzi"
              target="_blank"
              rel="noopener"
            >
              Twitter
            </a>
          </li>
        </ul>
      </article>

      {/* <footer className="pt-8">
        <p className="prose flex flex-row justify-between w-full max-w-full">
          <small>
            <a
              href="https://github.com/paglias/paglias.github.com"
              target="_blank"
              rel="noopener"
            >
              Source
            </a>
          </small>
          <small>&copy; 2020 - {name}</small>
        </p>
  </footer> */}
    </main>
  );
}
