import { Aperture, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/motion";
import { createMailtoLink } from "../utils/mailto";
import { CONTACT_EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY } from "../config/contact";

const Footer = () => {
    return (
        <footer className="footer bg-base-200 text-base-content p-10 border-t border-base-300">
            <div className="w-full max-w-6xl mx-auto">
                <div className="inline-grid grid-cols-[auto_auto_auto] gap-8 justify-center">
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center"
                    >
                        <span className="footer-title text-center">Retrouvez-moi sur</span>
                        <div className="mt-2 flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href="https://fr.linkedin.com/in/rebecca-ringuet-512567307"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline btn-primary gap-2 w-auto"
                                aria-label="Ouvrir le profil LinkedIn de Rebecca"
                            >
                                <Linkedin className="w-4 h-4"/>
                                <span>LinkedIn</span>
                            </a>
                            <a
                                href="https://github.com/RebeccaRngt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-outline gap-2 w-auto"
                                aria-label="Ouvrir le profil GitHub de Rebecca"
                            >
                                <Github className="w-4 h-4"/>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center"
                    >
                        <span className="footer-title text-center">Contact</span>
                        <a
                            href={createMailtoLink(CONTACT_EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY)}
                            className="mt-2 flex items-center justify-center gap-2 link link-hover"
                            aria-label="Envoyer un email à Rebecca"
                        >
                            <Mail className="w-4 h-4"/>
                            <span>{CONTACT_EMAIL}</span>
                        </a>
                        <div className="mt-2 flex items-center justify-center gap-2">
                            <MapPin className="w-4 h-4"/>
                            <span>Paris, France</span>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="text-center"
                    >
                        <span className="footer-title text-center">Navigation</span>
                        <div className="mt-2 flex flex-col items-center gap-2">
                            <a href="#" className="link link-hover" aria-label="Revenir en haut de la page">Haut de page</a>
                            <a href="#About" className="link link-hover" aria-label="Aller à À propos de moi">À propos de moi</a>
                            <a href="#Experiences" className="link link-hover" aria-label="Aller aux expériences">Expériences</a>
                            <a href="#Projects" className="link link-hover" aria-label="Aller à mes projets">Mes projets</a>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-10 pt-6 border-t border-base-300 text-center w-fit mx-auto">
                    <Aperture className="w-10 h-10 mx-auto" />
                    <p className="font-bold">
                        <span className="font-bold">Rebecca</span>
                        <span className="text-accent font-bold">Portfolio</span>
                    </p>
                    <p>Copyright © {new Date().getFullYear()} - Tous les droits sont réservés</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer