import Head from "next/head";

export default function Home() {
  const name = "Matteo Pagliazzi";
  return (
    <main
      className="
        w-full  bg-gray-200 text-gray-900
        min-h-screen flex flex-col
         px-12 py-12 pb-2"
    >
      <Head>
        <title>{name}</title>
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
        <p className="prose prose-xl max-w-full">
          <h1
            className="border-b-4 border-blue-500 pb-4 w-full"
            style={{ fontWeight: "bold" }}
          >
            {name}
          </h1>
        </p>
      </header>
      <article className="flex-grow prose">
        <p className="lead">
          <ul>
            <li>
              <a href="">Curriculum Vitae / Resume</a>
            </li>
            <li>
              <a href="https://github.com/paglias" target="_blank">
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/matteopagliazzi/"
                target="_blank"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a href="mailto:matteopagliazzi@gmail.com" target="_blank">
                Email
              </a>
            </li>
            <li>
              <a href="https://twitter.com/MatteoPagliazzi" target="_blank">
                Twitter
              </a>
            </li>
          </ul>
        </p>
      </article>

      <footer className="">
        <p className="prose">
          <small>&copy; 2020 - Matteo Pagliazzi</small>
        </p>
      </footer>
    </main>
  );
}
