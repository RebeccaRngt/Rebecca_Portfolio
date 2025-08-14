import { Aperture, Linkedin, Github, Mail, MapPin } from "lucide-react";

import { createMailtoLink } from "../utils/mailto";
import { CONTACT_EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY } from "../config/contact";

const Pied = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <aside>
                <p>
                <Aperture className="w-10 h-10 mb-2" />
                <span className="font-bold">Rebecca</span>
                <span className="text-accent font-bold">Portfolio</span>
                <br />
                Copyright © {new Date().getFullYear()}
                <br />
                Tous droits réservés
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Navigation</h6>
                <a href="#" className="link link-hover" aria-label="Revenir en haut de la page">Haut de page</a>
                <a href="#About" className="link link-hover" aria-label="Aller à À propos de moi">À propos de moi</a>
                <a href="#Experiences" className="link link-hover" aria-label="Aller aux expériences">Mes Expériences</a>
                <a href="#Projects" className="link link-hover" aria-label="Aller à mes projets">Mes Projets</a>
            </nav>
            <nav>
                <h6 className="footer-title">Retrouvez-moi</h6>
                <a
                            href="https://www.linkedin.com/in/rebecca-ringuet/"
                            className="flex items-center justify-center gap-2 link link-hover"
                            aria-label="Découvrez mon LinkedIn"
                        >
                            <Linkedin className="w-4 h-4"/>
                            <span>Mon LinkedIn</span>
                </a>
                <a
                            href="https://github.com/RebeccaRngt"
                            className="flex items-center justify-center gap-2 link link-hover"
                            aria-label="Découvrez mon Github"
                        >
                            <Github className="w-4 h-4"/>
                            <span>Mon Github</span>
                </a>
            </nav>
            <nav>
                <h6 className="footer-title">Contact</h6>
                <a
                            href={createMailtoLink(CONTACT_EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY)}
                            className="flex items-center justify-center gap-2 link link-hover"
                            aria-label="Envoyez-moi un email"
                        >
                            <Mail className="w-4 h-4"/>
                            <span>{CONTACT_EMAIL}</span>
                </a>
                <a
                            className="flex items-center justify-center gap-2"
                        >
                            <MapPin className="w-4 h-4"/>
                            <span>Paris, France</span>
                </a>
            </nav>
        </footer>
    )
}

export default Pied