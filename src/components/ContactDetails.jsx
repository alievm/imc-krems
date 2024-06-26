import React from "react";
import FadeIn from "./FadeIn.jsx";
import Offices from "./Offices";
import {Link} from "react-router-dom";
import SocialMedia from "./SocialMedia.jsx";
import Border from "./Border.jsx";

const ContactDetails = () => {
    return (
        <FadeIn>
            <h2 className="font-display text-base font-semibold text-neutral-950">
                Our offices
            </h2>
            <p className="mt-6 text-base text-neutral-600">
                Prefer doing things in person? We don’t but we have to list our
                addresses here for legal reasons.
            </p>
            <Offices className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2" />
            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Email us
                </h2>
                <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
                    {[
                        ["Careers", "reactjsbd.com"],
                        ["Press", "office(at)imc.ac.at"],
                    ].map(([label, email]) => (
                        <div key={email}>
                            <dt className="font-semibold text-neutral-950">{label}</dt>
                            <dd>
                                <Link
                                    href={`mailto:${email}`}
                                    className="text-neutral-600 hover:text-neutral-950"
                                >
                                    {email}
                                </Link>
                            </dd>
                        </div>
                    ))}
                </dl>
            </Border>
            <Border className="mt-16 pt-16">
                <h2 className="font-display text-base font-semibold text-neutral-950">
                    Follow us
                </h2>
                <SocialMedia className="mt-6" />
            </Border>
        </FadeIn>
    );
};

export default ContactDetails;
