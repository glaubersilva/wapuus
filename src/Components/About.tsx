import styles from "./About.module.css";
import Wapuu from "../Assets/demo/original-wapuu.png";
import Head from "./Helpers/Head";

const About = () => {
  return (
    <section className={` ${styles.about} container `}>
      <Head title="About" description="" />
      <h1 className="title">About</h1>
      <p>
        This web app is <i>"A place to share Wapuus"</i> where anyone can create
        their own account and start sharing.
      </p>

      <h2>But what is a Wapuu after all?</h2>
      <p>
        The Wapuu character was created to be the official mascot of the
        Japanese WordPress community, but these days it's considered the
        official mascot of the global WordPress community as well.
      </p>

      <figure>
        <img src={Wapuu} alt="The original Wapuu" />
        <figcaption>The original Wapuu</figcaption>
      </figure>

      <p>
        As it's under the GPL license, anyone can{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://jawordpressorg.github.io/wapuu/faq_en.html"
        >
          download the original version
        </a>
        , modify and redistribute it.
      </p>

      <p>
        Lots of{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://make.wordpress.org/community/wordcamps/"
        >
          WordCamps
        </a>
        , companies, and individuals around the world already created their own
        Wapuus versions, which helped this funny mascot become global.
      </p>

      <p>
        You also can create your own Wapuus and use this web app as a place to
        share them! =)
      </p>

      <h2>Under the hood</h2>
      <p>
        Created by{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://glaubersilva.me"
        >
          Glauber Silva
        </a>
        , this project beyond serving to be <i>"A place to share Wapuus"</i> it's
        also a place to study/acquire more developer skills in a practical and
        funny way.
      </p>

      <p>The project is split into two parts...</p>

      <p>
        <b>#1</b> - Firstly, we have{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/glaubersilva/wapuus-api"
        >
          the backend (available on GitHub)
        </a>{" "}
        which is a WordPress plugin, so is built with PHP, which extends the
        WordPress REST API and exposes the endpoints used by part #2 of this
        project - this part is hosted in a{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://m.do.co/c/0c4dc2d984eb"
        >
          Digital Ocean
        </a>{" "}
        server;
      </p>

      <p>
        <b>#2</b> - Secondly, we have{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/glaubersilva/wapuus"
        >
          the frontend (available on GitHub)
        </a>{" "}
        where you are reading this text right now, this is totally decoupled
        from WordPress and built with HTML, CSS, JavaScript, and the ReactJS
        library - this part is hosted with{" "}
        <a
          className="link"
          target="_blank"
          rel="noreferrer"
          href="https://pages.cloudflare.com/"
        >
          CloudFlare Pages
        </a>
        .
      </p>

      <p>
        With these two parts, we have as the final result the implementation of
        a headless WordPress/CMS which is a kind of setup that uses WordPress on
        the backend for managing content and some other custom frontend stack to
        actually display that content to a site visitor.
      </p>

      <h2>Want to talk to us?</h2>
      <p>
        Just send an email to:{" "}
        <a className="link" href="mailto:info@wapuus.org">
          info@wapuus.org
        </a>
      </p>
    </section>
  );
};

export default About;
