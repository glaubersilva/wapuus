import React from "react";
//import styles from './About.module.css';
//import {ReactComponent as Logo} from '../Assets/wapuu-footer-logo.svg';

const About = () => {
    return (
        <section className="container">
            <h1 className="title">About</h1>
            <p>
                This web app is <i>"A place to share Wapuus"</i> where anyone
                can create their own account and start sharing.
            </p>
            <br />
            <h2>But what is a Wapuu after all?</h2>
            <br />
            <p>
                The Wapuu character was created to be the official mascot of the
                Japanese WordPress community, but these days it's considered the
                official mascot of the global WordPress community as well.
            </p>
            <br />
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
            <br />
            <p>
                Lots of WordCamps, companies, and individuals around the world
                already created their own Wapuus versions, which helped this
                funny mascot become global.
            </p>
            <br />
            <p>
                You also can create your own Wapuus and use this web app as a
                place to share them! =)
            </p>
            <br />
            <h2>Under the hood</h2>
            <br />
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
                , this project beyond serving to be{" "}
                <i>"A place to share Wapus"</i> it's also a place to
                study/acquire more developer skills in a practical and funny
                way.
            </p>
            <br />
            <p>The project is split into two parts...</p>
            <br />
            <p>
                <b>#1</b> - Firstly, we have{" "}
                <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/glaubersilva/wapuus"
                >
                    the frontend (available on GitHub)
                </a>{" "}
                where you are reading this text right now, this is totally
                decoupled from WordPress and built with HTML, CSS, Javascript,
                and the ReactJS library;
            </p>
            <br />
            <p>
                <b>#2</b> - Secondly, we have{" "}
                <a
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/glaubersilva/wapuus-api"
                >
                    the backend (available on GitHub)
                </a>{" "}
                which is a WordPress plugin, so is built with PHP, that extends
                the WordPress REST API and exposes the endpoints used by part #1
                of this project.
            </p>
            <br />
            <p>
                With these two parts, we have as the final result the
                implementation of a headless WordPress/CMS which is a kind of
                setup that uses WordPress on the backend for managing content
                and some other custom frontend stack to actually display that
                content to a site visitor.
            </p>
            <br />
            <h2>Want to talk to us?</h2>
            <br />
            <p>
                Just send an email to:{" "}
                <a className="link" href="mailto:info@wapuus.org">
                    info@wapuus.org
                </a>
            </p>
            <br />
            <br />
            <br />
        </section>
    );
};

export default About;
