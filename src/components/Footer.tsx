import { useEffect, useState } from 'react';
import logoIcon from '../assets/image/R Square Visuals icon.png';

type LegalDocId = 'privacy' | 'terms' | 'cookie';

type LegalDoc = {
    id: LegalDocId;
    title: string;
    path: string;
};

const privacyPolicyContent = {
    company: 'R Square Visuals',
    agency: 'Creative Marketing Agency',
    title: 'Privacy Policy',
    effectiveDate: 'April 15, 2026',
    lastUpdated: 'April 15, 2025',
};

const termsContent = {
    company: 'R Square Visuals',
    agency: 'Creative Marketing Agency',
    title: 'Terms of Service',
    effectiveDate: 'April 15, 2025',
    lastUpdated: 'April 15, 2025',
};

const cookieContent = {
    company: 'R Square Visuals',
    agency: 'Creative Marketing Agency',
    title: 'Cookie Policy',
    effectiveDate: 'April 15, 2025',
    lastUpdated: 'April 15, 2025',
};

export function Footer() {
    const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDoc | null>(null);

    const legalDocs = {
        privacy: {
            id: 'privacy',
            title: 'Privacy Policy',
            path: '/policy/R_Square_Visuals_Privacy_Policy.docx',
        },
        terms: {
            id: 'terms',
            title: 'Terms of Service',
            path: '/policy/R_Square_Visuals_Terms_of_Service.docx',
        },
        cookie: {
            id: 'cookie',
            title: 'Cookie Policy',
            path: '/policy/R_Square_Visuals_Cookie_Policy.docx',
        },
    } satisfies Record<LegalDocId, LegalDoc>;

    useEffect(() => {
        if (!activeLegalDoc) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setActiveLegalDoc(null);
            }
        };

        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKeyDown);

        const lenis = (window as unknown as { lenis?: { stop: () => void } }).lenis;
        lenis?.stop();

        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKeyDown);
            const activeLenis = (window as unknown as { lenis?: { start: () => void } }).lenis;
            activeLenis?.start();
        };
    }, [activeLegalDoc]);

    return (
        <>
            <footer className="bg-black pt-32 pb-20 border-t border-white/5 relative overflow-x-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-40">
                    <div className="col-span-2">
                        <div className="flex items-center mb-6">
                           <img src={logoIcon} alt="R Square Visuals" className="h-10 w-auto mr-3" />
                           {/* <span className="font-bold text-xl tracking-tight text-white italic">R Square Visuals</span> */}
                        </div>
                        <p className="text-gray-500 text-sm mt-4 font-medium leading-relaxed">
                            © copyright R Square Visuals 2024. <br />
                            All rights reserved.
                        </p>
                        <p className="text-gray-500 text-sm mt-3 font-medium leading-relaxed">
                            Created by{' '}
                            <a
                                href="https://nehalingole.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Nehal Ingole
                            </a>
                            {' '}
                            ·{' '}
                            <a
                                href="https://nehalingole.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors duration-300"
                            >
                                Portfolio
                            </a>
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm tracking-wider uppercase opacity-30">Pages</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">All Services</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Studio</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Clients</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm tracking-wider uppercase opacity-30">Socials*</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Behance</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">LinkedIn</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-8 text-sm tracking-wider uppercase opacity-30">Legal</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setActiveLegalDoc(legalDocs.privacy)}
                                    className="hover:text-white transition-colors duration-300 text-left"
                                >
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setActiveLegalDoc(legalDocs.terms)}
                                    className="hover:text-white transition-colors duration-300 text-left"
                                >
                                    Terms of Service
                                </button>
                            </li>
                            <li>
                                <button
                                    type="button"
                                    onClick={() => setActiveLegalDoc(legalDocs.cookie)}
                                    className="hover:text-white transition-colors duration-300 text-left"
                                >
                                    Cookie Policy
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* <div>
                        <h4 className="font-bold text-white mb-8 text-sm tracking-wider uppercase opacity-30">Register</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Sign Up</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Login</a></li>
                            <li><a href="#" className="hover:text-white transition-colors duration-300">Forgot Password</a></li>
                        </ul>
                    </div> */}
                </div>
            </div>


            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-screen pointer-events-none select-none overflow-hidden translate-y-[15%] flex justify-center">
                <h2 className="text-[18vw] font-black leading-none tracking-tighter uppercase whitespace-nowrap text-transparent bg-clip-text bg-linear-to-b from-white/8 to-transparent">
                    R Square
                </h2>
            </div>
            </footer>

            {activeLegalDoc ? (
                <div
                    className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-sm"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="legal-modal-title"
                    onClick={() => setActiveLegalDoc(null)}
                >
                    <div
                        className="relative h-[92vh] w-full max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.9)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
                            <h3 id="legal-modal-title" className="text-base font-semibold text-white">
                                {activeLegalDoc.title}
                            </h3>
                            <button
                                type="button"
                                onClick={() => setActiveLegalDoc(null)}
                                className="rounded-md border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                            >
                                Close
                            </button>
                        </div>

                        <div
                            className="legal-doc-scroll h-[calc(92vh-3.5rem)] overflow-y-auto overscroll-contain px-5 py-4 text-sm leading-relaxed text-slate-200"
                            data-lenis-prevent
                        >
                            {activeLegalDoc.id === 'privacy' ? (
                                <div className="mx-auto max-w-4xl space-y-8 pb-6">
                                    <div className="rounded-2xl border border-cyan-300/20 bg-linear-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                                            {privacyPolicyContent.company}
                                        </p>
                                        <p className="mt-2 text-sm text-slate-300">{privacyPolicyContent.agency}</p>
                                        <h2 className="mt-5 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                                            {privacyPolicyContent.title}
                                        </h2>
                                        <p className="mt-4 text-sm text-slate-300">
                                            Effective Date: {privacyPolicyContent.effectiveDate}{' '}
                                            <span className="mx-2 text-white/30">|</span> Last Updated:{' '}
                                            {privacyPolicyContent.lastUpdated}
                                        </p>
                                    </div>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">1. Introduction</h4>
                                        <p className="text-slate-200">
                                            Welcome to R Square Visuals. We are a creative marketing agency dedicated to helping
                                            businesses establish and grow their presence in the market through innovative visual
                                            content, branding, and digital marketing solutions.
                                        </p>
                                        <p className="text-slate-300">
                                            This Privacy Policy explains how R Square Visuals (&quot;we&quot;, &quot;us&quot;, or
                                            &quot;our&quot;) collects, uses, shares, and protects your personal information when
                                            you visit our website, use our services, or interact with us. By engaging with our
                                            services, you agree to the terms outlined in this policy.
                                        </p>
                                    </section>

                                    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">2. Information We Collect</h4>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">2.1 Information You Provide Directly</h5>
                                            <p className="text-slate-300">We collect information you voluntarily provide when you:</p>
                                            <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                                <li>Fill out contact or inquiry forms on our website</li>
                                                <li>Request a quote, proposal, or service consultation</li>
                                                <li>Subscribe to our newsletter or blog updates</li>
                                                <li>Enter into a service agreement or client contract</li>
                                                <li>Communicate with us via email, phone, or social media</li>
                                            </ul>
                                            <p className="text-slate-300">
                                                This may include your full name, business name, email address, phone number, billing
                                                and payment information, project briefs and creative requirements, and any other
                                                information you choose to share.
                                            </p>
                                        </div>

                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">2.2 Information Collected Automatically</h5>
                                            <p className="text-slate-300">When you visit our website, we may automatically collect:</p>
                                            <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                                <li>IP address and approximate geographic location</li>
                                                <li>Browser type, version, and operating system</li>
                                                <li>Pages visited, time spent, and navigation paths</li>
                                                <li>Referring URLs and search queries</li>
                                                <li>Device identifiers and cookie data</li>
                                            </ul>
                                        </div>

                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">2.3 Information from Third Parties</h5>
                                            <p className="text-slate-300">
                                                We may receive information about you from third-party sources such as social media
                                                platforms (Behance, Instagram, LinkedIn), analytics providers, or referral partners,
                                                in accordance with their respective privacy policies.
                                            </p>
                                        </div>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">3. How We Use Your Information</h4>
                                        <p className="text-slate-300">We use the information we collect for the following purposes:</p>
                                        <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                            <li>To provide, manage, and deliver our marketing and creative services</li>
                                            <li>To respond to your inquiries, quotes, and service requests</li>
                                            <li>To process payments and manage client billing</li>
                                            <li>To send project updates, invoices, and service communications</li>
                                            <li>To send marketing newsletters and promotional content (with your consent)</li>
                                            <li>To improve our website, services, and client experience</li>
                                            <li>To comply with legal obligations and enforce our terms</li>
                                            <li>To protect against fraud, abuse, or unauthorized access</li>
                                        </ul>
                                    </section>

                                    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">4. How We Share Your Information</h4>
                                        <p className="text-slate-300">
                                            R Square Visuals does not sell, rent, or trade your personal information. We may share
                                            your information only in the following limited circumstances:
                                        </p>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">4.1 Service Providers</h5>
                                            <p className="text-slate-300">
                                                We may share information with trusted third-party service providers who assist in
                                                operating our business, such as website hosting, payment processors, email platforms,
                                                and analytics tools. These providers are contractually bound to protect your data.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">4.2 Legal Requirements</h5>
                                            <p className="text-slate-300">
                                                We may disclose information if required by law, court order, or government authority,
                                                or when we believe disclosure is necessary to protect our rights, your safety, or the
                                                safety of others.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">4.3 Business Transfers</h5>
                                            <p className="text-slate-300">
                                                In the event of a merger, acquisition, or sale of business assets, your information
                                                may be transferred as part of that transaction. We will notify you of any such
                                                change in ownership.
                                            </p>
                                        </div>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">5. Cookies &amp; Tracking Technologies</h4>
                                        <p className="text-slate-300">
                                            Our website uses cookies and similar tracking technologies to enhance your experience.
                                            Cookies are small data files stored on your device that help us remember your
                                            preferences and understand how you use our site.
                                        </p>
                                        <p className="text-slate-300">Types of cookies we use:</p>
                                        <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                            <li>Essential Cookies: Required for the website to function properly</li>
                                            <li>Analytics Cookies: Help us understand visitor behavior and improve our site</li>
                                            <li>Marketing Cookies: Used to deliver relevant advertisements and track campaign performance</li>
                                        </ul>
                                        <p className="text-slate-300">
                                            You can manage or disable cookies through your browser settings. Note that disabling
                                            certain cookies may affect the functionality of our website.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">6. Data Retention</h4>
                                        <p className="text-slate-300">
                                            We retain your personal information only for as long as necessary to fulfill the
                                            purposes outlined in this policy, comply with legal obligations, resolve disputes, and
                                            enforce our agreements. Client project data is typically retained for a minimum of 3
                                            years following project completion, unless a longer period is required by law or
                                            contract.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">7. Data Security</h4>
                                        <p className="text-slate-300">
                                            We implement appropriate technical and organizational security measures to protect your
                                            personal information against unauthorized access, alteration, disclosure, or destruction.
                                            These measures include encrypted data transmission (SSL/TLS), restricted access controls,
                                            and regular security assessments.
                                        </p>
                                        <p className="text-slate-300">
                                            However, no method of electronic transmission or storage is 100% secure. While we strive
                                            to protect your data, we cannot guarantee absolute security and encourage you to take
                                            steps to protect your own information.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">8. Your Rights</h4>
                                        <p className="text-slate-300">
                                            Depending on your location and applicable law, you may have the following rights
                                            regarding your personal information:
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                            <li>Right to Access: Request a copy of the personal data we hold about you</li>
                                            <li>Right to Rectification: Request correction of inaccurate or incomplete data</li>
                                            <li>Right to Erasure: Request deletion of your personal data (&quot;right to be forgotten&quot;)</li>
                                            <li>Right to Restrict Processing: Request limitation of how we use your data</li>
                                            <li>Right to Data Portability: Receive your data in a structured, machine-readable format</li>
                                            <li>Right to Object: Object to certain types of data processing, including direct marketing</li>
                                            <li>Right to Withdraw Consent: Withdraw consent at any time where processing is consent-based</li>
                                        </ul>
                                        <p className="text-slate-300">
                                            To exercise any of these rights, please contact us using the details provided in Section
                                            12. We will respond to all valid requests within 30 days.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">9. Third-Party Links &amp; Platforms</h4>
                                        <p className="text-slate-300">
                                            Our website and communications may contain links to third-party websites, social media
                                            platforms (Instagram, Behance, LinkedIn, Discord), or partner sites. We are not
                                            responsible for the privacy practices of those third parties. We encourage you to review
                                            their privacy policies before sharing any personal information.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">10. Children&apos;s Privacy</h4>
                                        <p className="text-slate-300">
                                            Our services are not directed to individuals under the age of 18. We do not knowingly
                                            collect personal information from children. If you believe we have inadvertently
                                            collected such information, please contact us immediately and we will take steps to
                                            delete it promptly.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">11. Changes to This Privacy Policy</h4>
                                        <p className="text-slate-300">
                                            We may update this Privacy Policy from time to time to reflect changes in our practices,
                                            services, or legal requirements. When we make material changes, we will update the
                                            &quot;Last Updated&quot; date at the top of this policy and, where appropriate, notify
                                            you by email or through a notice on our website.
                                        </p>
                                        <p className="text-slate-300">
                                            Your continued use of our services after any changes constitutes your acceptance of the
                                            updated policy.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">12. Contact Us</h4>
                                        <p className="text-slate-300">
                                            If you have any questions, concerns, or requests regarding this Privacy Policy or our
                                            data practices, please contact us:
                                        </p>
                                        <div className="space-y-1 text-slate-200">
                                            <p className="font-semibold">R Square Visuals</p>
                                            <p>Creative Marketing Agency</p>
                                            <p>
                                                Email:{' '}
                                                <a
                                                    href="mailto:rsquarevisuals1@gmail.com"
                                                    className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                >
                                                    rsquarevisuals1@gmail.com
                                                </a>
                                            </p>
                                            <p>
                                                Website:{' '}
                                                <a
                                                    href="https://www.rsquarevisuals.com"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                >
                                                    www.rsquarevisuals.com
                                                </a>
                                            </p>
                                        </div>
                                        <p className="pt-2 text-xs uppercase tracking-[0.12em] text-slate-400">
                                            © 2026 R Square Visuals. All Rights Reserved.
                                        </p>
                                    </section>
                                </div>
                            ) : null}

                            {activeLegalDoc.id === 'terms' ? (
                                <div className="mx-auto max-w-4xl space-y-8 pb-6">
                                    <div className="rounded-2xl border border-cyan-300/20 bg-linear-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                                            {termsContent.company}
                                        </p>
                                        <p className="mt-2 text-sm text-slate-300">{termsContent.agency}</p>
                                        <h2 className="mt-5 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                                            {termsContent.title}
                                        </h2>
                                        <p className="mt-4 text-sm text-slate-300">
                                            Effective Date: {termsContent.effectiveDate}{' '}
                                            <span className="mx-2 text-white/30">|</span> Last Updated:{' '}
                                            {termsContent.lastUpdated}
                                        </p>
                                    </div>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">1. Acceptance of Terms</h4>
                                        <p className="text-slate-300">
                                            By accessing our website, engaging our services, or entering into a client agreement with
                                            R Square Visuals (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), you (&quot;Client&quot;,
                                            &quot;you&quot;) agree to be bound by these Terms of Service (&quot;Terms&quot;). If you
                                            do not agree with any part of these Terms, you must not use our services.
                                        </p>
                                        <p className="text-slate-300">
                                            These Terms apply to all visitors, clients, and others who access or use the services
                                            offered by R Square Visuals.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">2. Services Provided</h4>
                                        <p className="text-slate-300">
                                            R Square Visuals is a creative marketing agency offering a range of services to help
                                            businesses establish and grow their market presence, including but not limited to:
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                            <li>Brand identity design and visual branding</li>
                                            <li>Social media content creation and management</li>
                                            <li>Graphic design and digital creatives</li>
                                            <li>Marketing campaign strategy and execution</li>
                                            <li>Photography and videography direction</li>
                                            <li>Website design and digital presence consulting</li>
                                            <li>Client-specific creative packages and retainers</li>
                                        </ul>
                                        <p className="text-slate-300">
                                            The specific scope of services for each client will be defined in a separate Service
                                            Agreement, Statement of Work (SOW), or Project Proposal agreed upon in writing.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">3. Client Responsibilities</h4>
                                        <p className="text-slate-300">As a client of R Square Visuals, you agree to:</p>
                                        <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                            <li>Provide accurate, complete, and timely information necessary for service delivery</li>
                                            <li>Review and approve project deliverables within agreed timelines</li>
                                            <li>Respond to communications and feedback requests in a reasonable timeframe</li>
                                            <li>
                                                Ensure that any materials, assets, or content you provide do not infringe upon
                                                third-party rights
                                            </li>
                                            <li>Make payments as per the agreed schedule and terms</li>
                                            <li>Designate a primary point of contact for project communications</li>
                                        </ul>
                                        <p className="text-slate-300">
                                            Delays caused by failure to fulfill these responsibilities may result in project timeline
                                            extensions or additional charges.
                                        </p>
                                    </section>

                                    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">4. Payment Terms</h4>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">4.1 Pricing &amp; Invoicing</h5>
                                            <p className="text-slate-300">
                                                All pricing for services will be outlined in the agreed project proposal or service
                                                contract. R Square Visuals reserves the right to adjust pricing for new projects or
                                                upon renewal of service agreements with reasonable advance notice.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">4.2 Payment Schedule</h5>
                                            <p className="text-slate-300">Unless otherwise specified in writing:</p>
                                            <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                                <li>A non-refundable deposit of 50% is required before work commences</li>
                                                <li>The remaining balance is due upon project completion and before final file delivery</li>
                                                <li>Retainer-based services are invoiced monthly in advance</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">4.3 Late Payments</h5>
                                            <p className="text-slate-300">
                                                Invoices unpaid beyond the due date may be subject to a late fee of 2% per month on
                                                the outstanding balance. R Square Visuals reserves the right to pause or suspend active
                                                work until overdue payments are settled.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">4.4 Taxes</h5>
                                            <p className="text-slate-300">
                                                All fees are exclusive of applicable taxes (GST, VAT, or other applicable levies).
                                                Clients are responsible for any taxes applicable in their jurisdiction.
                                            </p>
                                        </div>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">5. Revisions &amp; Change Requests</h4>
                                        <p className="text-slate-300">
                                            Each project includes a defined number of revision rounds as stated in the project
                                            proposal. Revisions beyond the agreed scope will be billed at our standard hourly or
                                            per-revision rate.
                                        </p>
                                        <p className="text-slate-300">
                                            Significant changes to the project scope, direction, or deliverables after work has
                                            commenced may require a revised proposal and additional fees. We will always notify you
                                            before proceeding with out-of-scope work.
                                        </p>
                                    </section>

                                    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">6. Intellectual Property &amp; Ownership</h4>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">6.1 Client-Owned Assets</h5>
                                            <p className="text-slate-300">
                                                Upon receipt of full payment, R Square Visuals transfers ownership of the final
                                                deliverables to the client for their intended commercial use as outlined in the
                                                project brief.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">6.2 Agency-Retained Rights</h5>
                                            <p className="text-slate-300">
                                                R Square Visuals retains ownership of all preliminary concepts, drafts, unused designs,
                                                and creative processes developed during the project. We retain the right to display
                                                completed work in our portfolio, case studies, and marketing materials unless
                                                explicitly restricted in writing by the client.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">6.3 Third-Party Assets</h5>
                                            <p className="text-slate-300">
                                                Any third-party assets used in deliverables (stock images, fonts, software) are
                                                subject to their respective licensing terms. The client is responsible for ensuring
                                                proper licensing for any assets they provide to us.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">6.4 Confidentiality</h5>
                                            <p className="text-slate-300">
                                                Both parties agree to keep confidential any proprietary information shared during the
                                                engagement. This obligation survives the termination of the service agreement.
                                            </p>
                                        </div>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">7. Turnaround Time &amp; Deadlines</h4>
                                        <p className="text-slate-300">
                                            Project timelines are agreed upon in writing at the start of each engagement. While we
                                            make every effort to meet deadlines, R Square Visuals is not liable for delays caused by:
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                            <li>Late provision of materials, approvals, or feedback from the client</li>
                                            <li>Force majeure events or circumstances beyond our control</li>
                                            <li>Scope changes requested after project commencement</li>
                                        </ul>
                                        <p className="text-slate-300">
                                            We will proactively communicate any anticipated delays and work collaboratively to find
                                            solutions.
                                        </p>
                                    </section>

                                    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">8. Cancellations &amp; Refunds</h4>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">8.1 Cancellation by Client</h5>
                                            <p className="text-slate-300">
                                                If you wish to cancel a project, written notice must be provided. Cancellation fees
                                                apply based on project stage:
                                            </p>
                                            <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                                <li>Before work commences: The deposit is non-refundable</li>
                                                <li>After work has commenced: Client owes payment for all work completed to date</li>
                                                <li>After final delivery: Full payment is due; no refunds</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">8.2 Cancellation by R Square Visuals</h5>
                                            <p className="text-slate-300">
                                                We reserve the right to terminate a project if the client breaches these Terms, fails
                                                to make payments, or engages in abusive or unlawful conduct. In such cases, payment for
                                                completed work to date remains due.
                                            </p>
                                        </div>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">9. Limitation of Liability</h4>
                                        <p className="text-slate-300">
                                            To the maximum extent permitted by applicable law, R Square Visuals shall not be liable
                                            for any indirect, incidental, special, or consequential damages, including but not limited
                                            to loss of profits, data, or business opportunities, arising from the use of our services
                                            or deliverables.
                                        </p>
                                        <p className="text-slate-300">
                                            Our total cumulative liability to you for any claims arising from or related to our
                                            services shall not exceed the total fees paid by you for the specific project giving rise
                                            to the claim.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">10. Warranties &amp; Disclaimers</h4>
                                        <p className="text-slate-300">
                                            R Square Visuals warrants that services will be performed with reasonable skill and care
                                            in accordance with industry standards. However, we do not guarantee specific business
                                            outcomes, results, or performance metrics from the use of our creative work.
                                        </p>
                                        <p className="text-slate-300">
                                            All services are provided on an &quot;as-is&quot; basis to the extent permitted by law.
                                            We disclaim all implied warranties not expressly stated in these Terms.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">11. Governing Law</h4>
                                        <p className="text-slate-300">
                                            These Terms shall be governed by and construed in accordance with the laws of India. Any
                                            disputes arising from these Terms or our services shall first be attempted to be resolved
                                            through good-faith negotiation. If unresolved, disputes shall be subject to the
                                            jurisdiction of the competent courts in India.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">12. Amendments to These Terms</h4>
                                        <p className="text-slate-300">
                                            R Square Visuals reserves the right to update or modify these Terms at any time. We will
                                            notify clients of material changes via email or website notice. Continued use of our
                                            services after such notice constitutes acceptance of the revised Terms.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">13. Contact Information</h4>
                                        <p className="text-slate-300">
                                            For any questions about these Terms of Service, please reach out to us:
                                        </p>
                                        <div className="space-y-1 text-slate-200">
                                            <p className="font-semibold">R Square Visuals</p>
                                            <p>
                                                Email:{' '}
                                                <a
                                                    href="mailto:rsquarevisuals1@gmail.com"
                                                    className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                >
                                                    rsquarevisuals1@gmail.com
                                                </a>
                                            </p>
                                            <p>
                                                Website:{' '}
                                                <a
                                                    href="https://www.rsquarevisuals.com"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                >
                                                    www.rsquarevisuals.com
                                                </a>
                                            </p>
                                        </div>
                                        <p className="pt-2 text-xs uppercase tracking-[0.12em] text-slate-400">
                                            © 2026 R Square Visuals. All Rights Reserved.
                                        </p>
                                    </section>
                                </div>
                            ) : null}

                            {activeLegalDoc.id === 'cookie' ? (
                                <div className="mx-auto max-w-4xl space-y-8 pb-6">
                                    <div className="rounded-2xl border border-cyan-300/20 bg-linear-to-r from-cyan-400/10 via-blue-400/10 to-violet-400/10 p-6">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                                            {cookieContent.company}
                                        </p>
                                        <p className="mt-2 text-sm text-slate-300">{cookieContent.agency}</p>
                                        <h2 className="mt-5 text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl">
                                            {cookieContent.title}
                                        </h2>
                                        <p className="mt-4 text-sm text-slate-300">
                                            Effective Date: {cookieContent.effectiveDate}{' '}
                                            <span className="mx-2 text-white/30">|</span> Last Updated:{' '}
                                            {cookieContent.lastUpdated}
                                        </p>
                                    </div>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">1. What Are Cookies?</h4>
                                        <p className="text-slate-300">
                                            Cookies are small text files placed on your device (computer, smartphone, or tablet) when
                                            you visit a website. They are widely used to make websites work more efficiently, provide
                                            a better user experience, and give website owners useful information about how their site
                                            is being used.
                                        </p>
                                        <p className="text-slate-300">
                                            Cookies do not contain personally identifiable information on their own, but they can be
                                            linked to personal data that you have previously provided or that is collected through
                                            your browsing activity.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">2. How We Use Cookies</h4>
                                        <p className="text-slate-300">
                                            R Square Visuals uses cookies on our website (www.rsquarevisuals.com) for the following
                                            purposes:
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                            <li>To ensure the website functions correctly and securely</li>
                                            <li>To remember your preferences and settings during your visit</li>
                                            <li>To analyze how visitors use our website so we can improve it</li>
                                            <li>To measure the effectiveness of our marketing campaigns</li>
                                            <li>To deliver relevant content and advertisements based on your interests</li>
                                            <li>To integrate with third-party platforms such as social media and analytics tools</li>
                                        </ul>
                                    </section>

                                    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">3. Types of Cookies We Use</h4>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">3.1 Essential Cookies</h5>
                                            <p className="text-slate-300">
                                                These cookies are strictly necessary for the website to function. They enable core
                                                features such as page navigation, secure access, and remembering your cookie consent
                                                choice. Without these cookies, the website cannot operate properly. These cookies
                                                cannot be disabled.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">3.2 Analytics &amp; Performance Cookies</h5>
                                            <p className="text-slate-300">
                                                These cookies collect information about how visitors use our website, such as which
                                                pages are visited most often and whether error messages are received. All data
                                                collected is aggregated and anonymous. We use this data to improve how our website
                                                works.
                                            </p>
                                            <p className="text-slate-300">Provider: Google Analytics (Google LLC)</p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">3.3 Marketing &amp; Advertising Cookies</h5>
                                            <p className="text-slate-300">
                                                These cookies are used to deliver advertisements relevant to you and your interests.
                                                They also limit the number of times you see an ad and help measure the effectiveness of
                                                advertising campaigns. They are placed by us and our advertising partners, including
                                                Meta (Facebook) and LinkedIn.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">3.4 Social Media Cookies</h5>
                                            <p className="text-slate-300">
                                                These cookies are set by social media platforms including Instagram, LinkedIn,
                                                Behance, and Discord when you use share buttons or interact with embedded content on
                                                our website. These platforms may use the information to target advertising to you on
                                                their platforms.
                                            </p>
                                        </div>
                                    </section>

                                    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">4. Cookies Used on This Website</h4>
                                        <p className="text-slate-300">
                                            Below is a summary of the key cookies used on the R Square Visuals website:
                                        </p>
                                        <div className="overflow-x-auto rounded-xl border border-white/10">
                                            <table className="min-w-full text-left text-sm">
                                                <thead className="bg-white/8 text-slate-200">
                                                    <tr>
                                                        <th className="px-3 py-2 font-semibold">Cookie Name</th>
                                                        <th className="px-3 py-2 font-semibold">Type</th>
                                                        <th className="px-3 py-2 font-semibold">Purpose</th>
                                                        <th className="px-3 py-2 font-semibold">Duration</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-white/10 text-slate-300">
                                                    <tr>
                                                        <td className="px-3 py-2">_ga</td>
                                                        <td className="px-3 py-2">Analytics</td>
                                                        <td className="px-3 py-2">Google Analytics - tracks unique visitors</td>
                                                        <td className="px-3 py-2">2 years</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2">_gid</td>
                                                        <td className="px-3 py-2">Analytics</td>
                                                        <td className="px-3 py-2">Google Analytics - distinguishes users</td>
                                                        <td className="px-3 py-2">24 hours</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2">_fbp</td>
                                                        <td className="px-3 py-2">Marketing</td>
                                                        <td className="px-3 py-2">Facebook Pixel - ad campaign tracking</td>
                                                        <td className="px-3 py-2">3 months</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2">cookieconsent</td>
                                                        <td className="px-3 py-2">Essential</td>
                                                        <td className="px-3 py-2">Stores your cookie consent preference</td>
                                                        <td className="px-3 py-2">1 year</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2">session_id</td>
                                                        <td className="px-3 py-2">Essential</td>
                                                        <td className="px-3 py-2">Maintains your active session on site</td>
                                                        <td className="px-3 py-2">Session</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="px-3 py-2">li_sugr</td>
                                                        <td className="px-3 py-2">Marketing</td>
                                                        <td className="px-3 py-2">LinkedIn Insight Tag - ad performance</td>
                                                        <td className="px-3 py-2">3 months</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <p className="text-slate-300">
                                            Note: The above list is representative and may be updated as our website and tools
                                            evolve. Third-party cookie details may change based on the providers&apos; own policies.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">5. Third-Party Cookies</h4>
                                        <p className="text-slate-300">
                                            In addition to our own cookies, we work with trusted third-party services that may also
                                            set cookies on your device when you visit our website. These include:
                                        </p>
                                        <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                            <li>Google Analytics - website performance and visitor analytics</li>
                                            <li>Meta Pixel (Facebook/Instagram) - ad campaign measurement and retargeting</li>
                                            <li>LinkedIn Insight Tag - B2B campaign performance and LinkedIn retargeting</li>
                                            <li>Google Ads - search and display ad performance tracking</li>
                                        </ul>
                                        <p className="text-slate-300">
                                            These third parties have their own privacy and cookie policies. We encourage you to review
                                            them directly. R Square Visuals is not responsible for the content or practices of
                                            third-party cookies.
                                        </p>
                                    </section>

                                    <section className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">6. Managing &amp; Controlling Cookies</h4>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">6.1 Cookie Consent Banner</h5>
                                            <p className="text-slate-300">
                                                When you first visit our website, you will be shown a cookie consent banner allowing
                                                you to accept all cookies, reject non-essential cookies, or manage your preferences by
                                                category. Your choice will be remembered for future visits.
                                            </p>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">6.2 Browser Settings</h5>
                                            <p className="text-slate-300">
                                                You can control cookies through your browser settings at any time. Most browsers allow
                                                you to:
                                            </p>
                                            <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                                <li>View and delete existing cookies</li>
                                                <li>Block all or specific types of cookies</li>
                                                <li>Set preferences to be notified when cookies are set</li>
                                            </ul>
                                            <p className="text-slate-300">
                                                Please note that disabling certain cookies may affect the functionality and user
                                                experience of our website. For browser-specific instructions:
                                            </p>
                                            <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                                <li>Google Chrome: Settings &gt; Privacy and Security &gt; Cookies</li>
                                                <li>Mozilla Firefox: Options &gt; Privacy &amp; Security &gt; Cookies</li>
                                                <li>Safari: Preferences &gt; Privacy &gt; Manage Website Data</li>
                                                <li>Microsoft Edge: Settings &gt; Privacy, Search, and Services</li>
                                            </ul>
                                        </div>
                                        <div className="space-y-2">
                                            <h5 className="font-semibold text-white">6.3 Opt-Out Links</h5>
                                            <p className="text-slate-300">
                                                You can also opt out of specific third-party tracking using these tools:
                                            </p>
                                            <ul className="list-disc space-y-1 pl-5 text-slate-200 marker:text-cyan-300">
                                                <li>
                                                    Google Analytics Opt-Out:{' '}
                                                    <a
                                                        href="https://tools.google.com/dlpage/gaoptout"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                    >
                                                        tools.google.com/dlpage/gaoptout
                                                    </a>
                                                </li>
                                                <li>
                                                    Facebook Ad Preferences:{' '}
                                                    <a
                                                        href="https://facebook.com/ads/preferences"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                    >
                                                        facebook.com/ads/preferences
                                                    </a>
                                                </li>
                                                <li>
                                                    LinkedIn Ad Settings:{' '}
                                                    <a
                                                        href="https://linkedin.com/psettings/advertising"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                    >
                                                        linkedin.com/psettings/advertising
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">7. Cookie Retention Periods</h4>
                                        <p className="text-slate-300">
                                            Different cookies are retained for different lengths of time depending on their purpose.
                                            Session cookies are deleted when you close your browser. Persistent cookies remain on your
                                            device for a defined period (as shown in the table above) or until you delete them
                                            manually.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-white/10 bg-white/3 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">8. Updates to This Cookie Policy</h4>
                                        <p className="text-slate-300">
                                            We may update this Cookie Policy from time to time to reflect changes in technology,
                                            legislation, or our business practices. When we make significant updates, we will revise
                                            the effective date at the top of this page. We encourage you to review this policy
                                            periodically to stay informed.
                                        </p>
                                    </section>

                                    <section className="space-y-3 rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-5">
                                        <h4 className="text-lg font-bold text-cyan-200">9. Contact Us</h4>
                                        <p className="text-slate-300">
                                            If you have questions about our use of cookies or this Cookie Policy, please contact us:
                                        </p>
                                        <div className="space-y-1 text-slate-200">
                                            <p className="font-semibold">R Square Visuals</p>
                                            <p>
                                                Email:{' '}
                                                <a
                                                    href="mailto:rsquarevisuals1@gmail.com"
                                                    className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                >
                                                    rsquarevisuals1@gmail.com
                                                </a>
                                            </p>
                                            <p>
                                                Website:{' '}
                                                <a
                                                    href="https://www.rsquarevisuals.com"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-cyan-200 underline decoration-cyan-300/60 underline-offset-4"
                                                >
                                                    www.rsquarevisuals.com
                                                </a>
                                            </p>
                                        </div>
                                        <p className="pt-2 text-xs uppercase tracking-[0.12em] text-slate-400">
                                            © 2026 R Square Visuals. All Rights Reserved.
                                        </p>
                                    </section>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
}
