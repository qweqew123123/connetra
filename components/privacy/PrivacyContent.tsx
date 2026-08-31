"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Building2,
  Mail,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Lock,
  FileText,
  UserCheck,
  HelpCircle,
  Database,
  BarChart3,
  Clock,
} from "lucide-react";

interface NavItem {
  id: string;
  title: string;
}

const navItems: NavItem[] = [
  { id: "owner", title: "1. Owner and Data Controller" },
  { id: "types-of-data", title: "2. Types of Data collected" },
  { id: "mode-and-place", title: "3. Mode and place of processing" },
  { id: "purposes", title: "4. The purposes of processing" },
  { id: "analytics-details", title: "5. Detailed information (Analytics)" },
  { id: "legal-basis", title: "6. Legal basis of processing" },
  { id: "retention", title: "7. Information on retention time" },
  { id: "rights-of-users", title: "8. The rights of Users" },
  { id: "additional-info", title: "9. Additional information" },
  { id: "definitions", title: "10. Definitions & legal references" },
];

export default function PrivacyContent() {
  const [activeSection, setActiveSection] = useState<string>("owner");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(item.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <div className="privacy-body-wrapper">
      <div className="privacy-container">
        {/* Sticky Desktop Sidebar */}
        <aside className="privacy-sidebar" aria-label="On this page navigation">
          <div className="privacy-sidebar-inner">
            <div className="privacy-sidebar-heading">
              <FileText size={15} className="privacy-sidebar-heading-icon" />
              <span>ON THIS PAGE</span>
            </div>
            <nav className="privacy-sidebar-nav">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className={`privacy-sidebar-link ${activeSection === item.id ? "active" : ""}`}
                >
                  <ChevronRight size={13} className="privacy-sidebar-bullet" />
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>

            <div className="privacy-sidebar-card">
              <div className="sidebar-card-icon">
                <ShieldCheck size={18} />
              </div>
              <h4>Have privacy questions?</h4>
              <p>Contact our Data Controller team directly at any time.</p>
              <a href="mailto:contact@connetra.com" className="sidebar-card-email">
                contact@connetra.com
              </a>
            </div>
          </div>
        </aside>

        {/* Main Document Content */}
        <main className="privacy-main-document" role="main">
          {/* Document Header Intro Box */}
          <div className="privacy-intro-banner">
            <p className="privacy-lead-text">
              <strong>www.connetra.com</strong> collects some Personal Data from its Users.
            </p>
            <p className="privacy-print-notice">
              This document can be printed for reference by using the print command in the settings of any browser.
            </p>
          </div>

          {/* Section 1: Owner and Data Controller */}
          <section id="owner" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">01</span>
              <span>Owner and Data Controller</span>
            </h2>

            <div className="privacy-contact-card">
              <div className="contact-card-header">
                <Building2 size={20} className="contact-card-icon" />
                <div>
                  <h3 className="contact-card-title">Robbie Swaddle</h3>
                  <p className="contact-card-address">
                    14-16 Carrer Soler I Rovirosa, Barcelona, Spain 08018
                  </p>
                </div>
              </div>
              <div className="contact-card-email-row">
                <Mail size={16} className="contact-email-icon" />
                <span>Owner contact email:</span>
                <a href="mailto:contact@connetra.com" className="contact-email-link">
                  contact@connetra.com
                </a>
              </div>
            </div>
          </section>

          {/* Section 2: Types of Data collected */}
          <section id="types-of-data" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">02</span>
              <span>Types of Data collected</span>
            </h2>

            <p>
              Among the types of Personal Data that <strong>www.connetra.com</strong> collects, by itself or through third parties, there are: <strong>Trackers</strong>; <strong>Usage Data</strong>.
            </p>

            <p>
              Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.
            </p>

            <p>
              Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using <strong>www.connetra.com</strong>.
            </p>

            <p>
              Unless specified otherwise, all Data requested by <strong>www.connetra.com</strong> is mandatory and failure to provide this Data may make it impossible for <strong>www.connetra.com</strong> to provide its services. In cases where <strong>www.connetra.com</strong> specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service.
            </p>

            <p>
              Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner.
            </p>

            <p>
              Any use of Cookies – or of other tracking tools — by <strong>www.connetra.com</strong> or by the owners of third-party services used by <strong>www.connetra.com</strong> serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy.
            </p>

            <div className="privacy-highlight-box">
              <p>
                Users are responsible for any third-party Personal Data obtained, published or shared through <strong>www.connetra.com</strong>.
              </p>
            </div>
          </section>

          {/* Section 3: Mode and place of processing the Data */}
          <section id="mode-and-place" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">03</span>
              <span>Mode and place of processing the Data</span>
            </h2>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">Methods of processing</h3>
              <p>
                The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data.
              </p>
              <p>
                The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of <strong>www.connetra.com</strong> (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time.
              </p>
            </div>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">Place</h3>
              <p>
                The Data is processed at the Owner&apos;s operating offices and in any other places where the parties involved in the processing are located.
              </p>
              <p>
                Depending on the User&apos;s location, data transfers may involve transferring the User&apos;s Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data.
              </p>
            </div>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">Retention time</h3>
              <p>
                Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent.
              </p>
            </div>
          </section>

          {/* Section 4: The purposes of processing */}
          <section id="purposes" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">04</span>
              <span>The purposes of processing</span>
            </h2>

            <p>
              The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or third parties), detect any malicious or fraudulent activity, as well as the following:
            </p>

            <ul className="privacy-bullet-list">
              <li>
                <strong>Analytics</strong>
              </li>
            </ul>

            <p>
              For specific information about the Personal Data used for each purpose, the User may refer to the section <strong>“Detailed information on the processing of Personal Data”</strong>.
            </p>
          </section>

          {/* Section 5: Detailed information on the processing of Personal Data */}
          <section id="analytics-details" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">05</span>
              <span>Detailed information on the processing of Personal Data</span>
            </h2>

            <p>
              Personal Data is collected for the following purposes and using the following services:
            </p>

            {/* Analytics Service Card */}
            <div className="privacy-service-card">
              <div className="privacy-service-header">
                <BarChart3 size={22} className="privacy-service-icon" />
                <div>
                  <h3 className="privacy-service-name">Analytics</h3>
                  <span className="privacy-service-subtitle">
                    The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.
                  </span>
                </div>
              </div>

              <div className="privacy-service-body">
                <h4 className="privacy-service-provider">
                  Google Analytics (Universal Analytics) (Google LLC)
                </h4>
                <p>
                  Google Analytics (Universal Analytics) is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of <strong>www.connetra.com</strong>, to prepare reports on its activities and share them with other Google services.
                </p>
                <p>
                  Google may use the Data collected to contextualize and personalize the ads of its own advertising network.
                </p>
                <p>
                  In order to understand Google&apos;s use of Data, consult{" "}
                  <a
                    href="https://www.google.com/policies/privacy/partners/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="privacy-external-link"
                  >
                    Google&apos;s partner policy <ExternalLink size={12} />
                  </a>.
                </p>

                <div className="privacy-service-meta-grid">
                  <div>
                    <span className="meta-label">Personal Data processed:</span>
                    <span className="meta-value">Trackers; Usage Data.</span>
                  </div>
                  <div>
                    <span className="meta-label">Place of processing:</span>
                    <span className="meta-value">
                      United States –{" "}
                      <a
                        href="https://business.safety.google/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="privacy-inline-link"
                      >
                        Privacy Policy
                      </a>{" "}
                      –{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="privacy-inline-link"
                      >
                        Opt Out
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cookie Policy Reference */}
            <div className="privacy-highlight-box" style={{ marginTop: 24 }}>
              <p>
                <strong>www.connetra.com</strong> uses Trackers. To learn more, Users may consult the{" "}
                <a
                  href="https://www.iubenda.com/app/privacy-policy/29201533/cookie-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-inline-link"
                  style={{ fontWeight: 700 }}
                >
                  Cookie Policy <ExternalLink size={12} />
                </a>.
              </p>
            </div>
          </section>

          {/* Section 6: Legal basis of processing */}
          <section id="legal-basis" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">06</span>
              <span>Legal basis of processing</span>
            </h2>

            <p>
              The Owner may process Personal Data relating to Users if one of the following applies:
            </p>

            <ul className="privacy-bullet-list">
              <li>Users have given their consent for one or more specific purposes.</li>
              <li>
                Provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof;
              </li>
              <li>Processing is necessary for compliance with a legal obligation to which the Owner is subject;</li>
              <li>
                Processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner;
              </li>
              <li>
                Processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party.
              </li>
            </ul>

            <p>
              In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.
            </p>
          </section>

          {/* Section 7: Further information about retention time */}
          <section id="retention" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">07</span>
              <span>Further information about retention time</span>
            </h2>

            <p>
              Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose they have been collected for and may be retained for longer due to applicable legal obligation or based on the Users’ consent.
            </p>

            <p>Therefore:</p>

            <ul className="privacy-bullet-list">
              <li>
                Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed.
              </li>
              <li>
                Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.
              </li>
            </ul>

            <p>
              The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to fulfil a legal obligation or upon order of an authority.
            </p>

            <p>
              Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.
            </p>
          </section>

          {/* Section 8: The rights of Users */}
          <section id="rights-of-users" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">08</span>
              <span>The rights of Users</span>
            </h2>

            <p>
              Users may exercise certain rights regarding their Data processed by the Owner.
            </p>

            <p>
              In particular, Users have the right to do the following, to the extent permitted by law:
            </p>

            <div className="privacy-rights-grid">
              <div className="privacy-right-card">
                <div className="right-card-title">
                  <UserCheck size={16} className="right-card-icon" />
                  <h4>Withdraw their consent at any time</h4>
                </div>
                <p>
                  Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data.
                </p>
              </div>

              <div className="privacy-right-card">
                <div className="right-card-title">
                  <ShieldCheck size={16} className="right-card-icon" />
                  <h4>Object to processing of their Data</h4>
                </div>
                <p>
                  Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent.
                </p>
              </div>

              <div className="privacy-right-card">
                <div className="right-card-title">
                  <Database size={16} className="right-card-icon" />
                  <h4>Access their Data</h4>
                </div>
                <p>
                  Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.
                </p>
              </div>

              <div className="privacy-right-card">
                <div className="right-card-title">
                  <FileText size={16} className="right-card-icon" />
                  <h4>Verify and seek rectification</h4>
                </div>
                <p>
                  Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected.
                </p>
              </div>

              <div className="privacy-right-card">
                <div className="right-card-title">
                  <Lock size={16} className="right-card-icon" />
                  <h4>Restrict the processing of their Data</h4>
                </div>
                <p>
                  Users have the right to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it.
                </p>
              </div>

              <div className="privacy-right-card">
                <div className="right-card-title">
                  <ShieldCheck size={16} className="right-card-icon" />
                  <h4>Have their Personal Data deleted or removed</h4>
                </div>
                <p>
                  Users have the right to obtain the erasure of their Data from the Owner.
                </p>
              </div>

              <div className="privacy-right-card">
                <div className="right-card-title">
                  <ExternalLink size={16} className="right-card-icon" />
                  <h4>Receive their Data and have it transferred</h4>
                </div>
                <p>
                  Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance.
                </p>
              </div>

              <div className="privacy-right-card">
                <div className="right-card-title">
                  <HelpCircle size={16} className="right-card-icon" />
                  <h4>Lodge a complaint</h4>
                </div>
                <p>
                  Users have the right to bring a claim before their competent data protection authority.
                </p>
              </div>
            </div>

            <p style={{ marginTop: 20 }}>
              Users are also entitled to learn about the legal basis for Data transfers abroad including to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data.
            </p>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">Details about the right to object to processing</h3>
              <p>
                Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection.
              </p>
              <p>
                Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time, free of charge and without providing any justification. Where the User objects to processing for direct marketing purposes, the Personal Data will no longer be processed for such purposes. To learn whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document.
              </p>
            </div>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">How to exercise these rights</h3>
              <p>
                Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. Such requests are free of charge and will be answered by the Owner as early as possible and always within one month, providing Users with the information required by law. Any rectification or erasure of Personal Data or restriction of processing will be communicated by the Owner to each recipient, if any, to whom the Personal Data has been disclosed unless this proves impossible or involves disproportionate effort. At the Users’ request, the Owner will inform them about those recipients.
              </p>
            </div>
          </section>

          {/* Section 9: Additional information about Data collection and processing */}
          <section id="additional-info" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">09</span>
              <span>Additional information about Data collection and processing</span>
            </h2>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">Legal action</h3>
              <p>
                The User&apos;s Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of <strong>www.connetra.com</strong> or the related Services.
              </p>
              <p>
                The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities.
              </p>
            </div>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">Additional information about User&apos;s Personal Data</h3>
              <p>
                In addition to the information contained in this privacy policy, <strong>www.connetra.com</strong> may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request.
              </p>
            </div>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">System logs and maintenance</h3>
              <p>
                For operation and maintenance purposes, <strong>www.connetra.com</strong> and any third-party services may collect files that record interaction with <strong>www.connetra.com</strong> (System logs) or use other Personal Data (such as the IP Address) for this purpose.
              </p>
            </div>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">Information not contained in this policy</h3>
              <p>
                More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document.
              </p>
            </div>

            <div className="privacy-subsection">
              <h3 className="privacy-subsection-title">Changes to this privacy policy</h3>
              <p>
                The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on this page and possibly within <strong>www.connetra.com</strong> and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom.
              </p>
              <p>
                Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required.
              </p>
            </div>
          </section>

          {/* Section 10: Definitions and legal references */}
          <section id="definitions" className="privacy-doc-section">
            <h2 className="privacy-section-title">
              <span className="privacy-section-num">10</span>
              <span>Definitions and legal references</span>
            </h2>

            <div className="privacy-definitions-list">
              <div className="definition-item">
                <h4 className="definition-term">Personal Data (or Data)</h4>
                <p className="definition-desc">
                  Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">Usage Data</h4>
                <p className="definition-desc">
                  Information collected automatically through <strong>www.connetra.com</strong> (or third-party services employed in <strong>www.connetra.com</strong>), which can include: the IP addresses or domain names of the computers utilized by the Users who use <strong>www.connetra.com</strong>, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server&apos;s answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User&apos;s IT environment.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">User</h4>
                <p className="definition-desc">
                  The individual using <strong>www.connetra.com</strong> who, unless otherwise specified, coincides with the Data Subject.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">Data Subject</h4>
                <p className="definition-desc">
                  The natural person to whom the Personal Data refers.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">Data Processor (or Processor)</h4>
                <p className="definition-desc">
                  The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">Data Controller (or Owner)</h4>
                <p className="definition-desc">
                  The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of <strong>www.connetra.com</strong>. The Data Controller, unless otherwise specified, is the Owner of <strong>www.connetra.com</strong>.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">www.connetra.com (or this Application)</h4>
                <p className="definition-desc">
                  The means by which the Personal Data of the User is collected and processed.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">Service</h4>
                <p className="definition-desc">
                  The service provided by <strong>www.connetra.com</strong> as described in the relative terms (if available) and on this site/application.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">European Union (or EU)</h4>
                <p className="definition-desc">
                  Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">Cookie</h4>
                <p className="definition-desc">
                  Cookies are Trackers consisting of small sets of data stored in the User&apos;s browser.
                </p>
              </div>

              <div className="definition-item">
                <h4 className="definition-term">Tracker</h4>
                <p className="definition-desc">
                  Tracker indicates any technology - e.g Cookies, unique identifiers, web beacons, embedded scripts, e-tags and fingerprinting - that enables the tracking of Users, for example by accessing or storing information on the User’s device.
                </p>
              </div>
            </div>

            {/* Legal Footer Info */}
            <div className="privacy-legal-footer-box">
              <h4 className="privacy-legal-footer-title">Legal information</h4>
              <p>
                This policy relates solely to <strong>www.connetra.com</strong>, if not stated otherwise within this document.
              </p>
              <div className="privacy-legal-footer-date">
                <Clock size={14} />
                <span>Latest update: April 20, 2023</span>
              </div>
              <p className="privacy-iubenda-attribution">
                This document has been created with the{" "}
                <a
                  href="https://www.iubenda.com/en/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-inline-link"
                >
                  iubenda
                </a>{" "}
                <a
                  href="https://www.iubenda.com/en/privacy-and-cookie-policy-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-inline-link"
                >
                  Privacy and Cookie Policy Generator
                </a>. See also the{" "}
                <a
                  href="https://www.iubenda.com/en/terms-and-conditions-generator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-inline-link"
                >
                  Terms and Conditions Generator
                </a>. iubenda hosts this content and only collects{" "}
                <a
                  href="https://www.iubenda.com/privacy-policy/65675001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-inline-link"
                >
                  the Personal Data strictly necessary
                </a>{" "}
                for it to be provided.
              </p>
              <div className="privacy-simplified-link-wrap">
                <a
                  href="https://www.iubenda.com/app/privacy-policy/29201533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="privacy-simplified-btn"
                >
                  <span>Show the simplified Privacy Policy</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
