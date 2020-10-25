import Head from "next/head";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-4">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="prose prose-xl">
        <h1>Matteo Pagliazzi</h1>
      </header>
      <article className="prose prose-xl">
        <ul>
          <li>
            <a href="">Curriculum Vitae / Resume</a>
          </li>
          <li>
            <a href="">Github</a>
          </li>
          <li>
            <a href="">Linkedin</a>
          </li>
          <li>
            <a href="">Email</a>
          </li>
          <li>
            <a href="">Twitter</a>
          </li>
        </ul>
      </article>

      <footer className="prose">
        <p>Copyright</p>
      </footer>
    </main>
  );
}
