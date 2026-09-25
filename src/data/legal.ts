export interface LegalSubsection {
  subhead?: string;
  paragraphs?: string[];
  listItems?: string[];
}

export interface LegalSection {
  heading: string;
  subsections: LegalSubsection[];
}

export interface LegalPageContent {
  slug: string;
  title: string;
  lastUpdated?: string;
  summary?: string;
  sections: LegalSection[];
}

export const legalPagesData: Record<string, LegalPageContent> = {
  "privacy-policy": {
    "slug": "privacy-policy",
    "title": "Privacy Policy",
    "lastUpdated": "January 2025",
    "summary": "This Privacy Policy describes how Medzen Writes collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from https://www.medzenwrites.com/ or otherwise communicate with us.",
    "sections": [
      {
        "heading": "Privacy Policy",
        "subsections": [
          {
            "paragraphs": [
              "This Privacy Policy describes how Medzen Writes (the <strong>\"Medzen Writes\"</strong>, \"we\", \"us\", or \"our\") platform collects, uses, and discloses your personal information when you visit, use our services, or make a purchase from <a href=\"https://www.medzenwrites.com/\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.medzenwrites.com/</a> (the <strong>\"Site\"</strong>) or otherwise communicate with us regarding the Site (collectively, the <strong>\"Services\"</strong>). By using or accessing any of the Services, you consent to the collection, use, and disclosure of your information as described in this Privacy Policy. If you do not agree to this Privacy Policy, please do not use or access the Services.",
              "We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. We will post the revised Privacy Policy on the Site and update the \"Last updated\" date. The updated Privacy Policy will apply to all users, including users who enrolled prior to the date of the update, where legally permitted."
            ],
            "listItems": []
          },
          {
            "subhead": "How We Collect and Use Your Personal Information",
            "paragraphs": [
              "To provide the Services, we collect personal information about you from a variety of sources, as set out below. The information that we collect and use varies depending on how you interact with us.",
              "In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide or improve or improve the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others."
            ],
            "listItems": []
          },
          {
            "subhead": "What Personal Information We Collect",
            "paragraphs": [
              "The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term \"personal information\", we are referring to information that identifies, relates to, describes or can be associated with you. The following sections describe the categories and specific types of personal information we collect."
            ],
            "listItems": []
          },
          {
            "subhead": "Information We Collect Directly from You",
            "paragraphs": [],
            "listItems": []
          },
          {
            "subhead": "Information that you directly submit to us through our Services may include:",
            "paragraphs": [
              "Some features of the Services may require you to directly provide us with certain information about yourself. You may elect not to provide this information, but doing so may prevent you from using or accessing these features."
            ],
            "listItems": [
              "Contact details such as name, email address, phone number, address, photographs, name of institution or affiliation",
              "Account information such as login credentials and information used for account security",
              "Research-related information, including survey responses, interview inputs, qualitative feedback, and related materials",
              "Customer support and communication information, including messages, emails, or form submissions"
            ]
          },
          {
            "subhead": "Information We Collect about Your Usage",
            "paragraphs": [
              "We may also automatically collect certain information about your interaction with the Services (<strong>\"Usage Data\"</strong>). To do this, we may use cookies, pixels and similar technologies (<strong>\"Cookies\"</strong>). Usage Data may include information about how you access and use our Site and your account, including device information, browser information, information about your network connection, your IP address and other information regarding your interaction with the Services."
            ],
            "listItems": []
          },
          {
            "subhead": "Information We Obtain from Third Parties",
            "paragraphs": [
              "Finally, we may obtain information about you from third parties, including from vendors and service providers who may collect information on our behalf, such as:",
              "Any information we obtain from third parties will be treated in accordance with this Privacy Policy. Also see the section below, Third Party Websites and Links."
            ],
            "listItems": [
              "Companies who support our Site and Services, such as Zoom, Superprofile.bio, Bluehost, WordPress, Stripe, razorpay, Whatsapp, Email, Brevo, Pabbly, Trustpilot etc.",
              "Our payment processors, who collect payment information (e.g., bank account, credit or debit card information, billing address) to process your payment in order to fulfill your orders and provide you with products or services you have requested, in order to perform our contract with you.",
              "When you visit our Site, open or click on emails we send you, or interact with our Services or advertisements, we, or third parties we work with, may automatically collect certain information using online tracking technologies such as pixels, web beacons, software developer kits, third-party libraries, and cookies."
            ]
          },
          {
            "subhead": "How We Use Your Personal Information",
            "paragraphs": [],
            "listItems": [
              "<strong>Providing Services and Courses.</strong> We use your personal information to provide and administer our Services, including facilitating access to research programs, courses, learning materials, and related offerings; processing payments; sending confirmations, updates, and notices relating to your account, enrolments, or transactions; and creating, maintaining, and managing user accounts where applicable.",
              "<strong>Marketing and Advertising.</strong> We may use your personal information for marketing and promotional purposes, such as to send marketing, advertising and promotional communications by email, text message or postal mail, and to show you advertisements for products or services. This may include using your personal information to better tailor the Services and advertising on our Site and other websites. We may also use your personal information for marketing and promotional purposes, including featuring student experiences, testimonials, publications, or similar outcomes in our promotional materials. This may include using your name, photograph, video, or other identifiable information, subject to applicable law.",
              "<strong>Research Activities and Engagement.</strong> We may use personal information to conduct qualitative, academic, and commercial research, communicate with research participants, manage participation logistics, and generate research outputs. Research findings are shared only in anonymised or aggregated form unless explicit consent is obtained.",
              "<strong>Security and Fraud Prevention.</strong> We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. If you choose to use the Services and register an account, you are responsible for keeping your account credentials safe. We highly recommend that you do not share your username, password, or other access details with anyone else. If you believe your account has been compromised, please contact us immediately.",
              "<strong>Communicating with You and Service Improvement.</strong> We use your personal information to provide you with customer support and improve our Services. This is in our legitimate interests in order to be responsive to you, to provide effective services to you, and to maintain our business relationship with you."
            ]
          },
          {
            "subhead": "Cookies",
            "paragraphs": [
              "Like many websites, we use cookies and similar tracking technologies on our website. Cookies are small text files that are placed on your device when you visit a website. They help us recognise returning visitors, remember user preferences, and improve overall site functionality."
            ],
            "listItems": []
          },
          {
            "subhead": "We use cookies primarily to:",
            "paragraphs": [
              "The information collected through cookies is used only for statistical and analytical purposes and does not provide us access to your device or any personal information beyond what you choose to share with us.",
              "Most web browsers automatically accept cookies by default. You may choose to accept or decline cookies by modifying your browser settings. Please note that disabling cookies may limit certain features or affect the functionality of the website. By continuing to use our website, you consent to our use of cookies in accordance with this Privacy Policy."
            ],
            "listItems": [
              "Understand how visitors interact with our website through traffic and usage analytics;",
              "Monitor which pages are accessed and how the website is used, in order to improve content, usability, and performance;",
              "Remember user preferences to enhance the browsing experience."
            ]
          },
          {
            "subhead": "How We Disclose Personal Information",
            "paragraphs": [
              "In certain circumstances, we may disclose your personal information to third parties for contract fulfillment purposes, legitimate purposes and other reasons subject to this Privacy Policy. Such circumstances may include:",
              "We disclose the following categories of personal information and sensitive personal information about users for the purposes set out above in \"How we Collect and Use your Personal Information\" and \"How we Disclose Personal Information\":",
              "CategoryCategories of RecipientsIdentifiers such as basic contact details and certain order and account informationCommercial information such as order information, shopping information and customer support informationInternet or other similar network activity, such as Usage DataGeolocation data such as locations determined by an IP address or other technical measuresVendors and third parties who perform services on our behalf (such as Internet service providers, payment processors, fulfillment partners, customer support partners and data analytics providers)Business and marketing partnersAffiliates",
              "We do not use or disclose sensitive personal information without your consent or for the purposes of inferring characteristics about you."
            ],
            "listItems": [
              "We may share personal information with trusted third-party service providers who perform services on our behalf, such as website hosting, IT and security services, payment processing, data storage, analytics, and administrative or operational support. These service providers are permitted to use personal information only for the purposes of providing services to us.",
              "We may share limited personal information with research collaborators, academic institutions, or professional partners where necessary for the conduct, administration, or delivery of research projects, and only in accordance with applicable confidentiality and data protection obligations.",
              "We may disclose personal information where you have expressly consented to such disclosure or have requested us to share your information for a specific purpose.",
              "We may disclose personal information where required to comply with applicable laws, regulations, legal processes, or governmental requests, or to protect the rights, safety, or integrity of Medzen Writes, our users, or others.",
              "In the event of a merger, restructuring, or similar organisational change, personal information may be transferred as part of such transaction, subject to applicable data protection laws and confidentiality obligations."
            ]
          },
          {
            "subhead": "Third Party Websites and Links",
            "paragraphs": [
              "Our Site may provide links to websites or other online platforms operated by third parties. If you follow links to sites not affiliated with or controlled by us, you should review their policies. We do not guarantee, and are not responsible for, the privacy or security of such sites, including the accuracy, completeness, or reliability of information found on these sites. You are advised to read and understand the policies of any third-party sites you visit, as we are not liable for any issues arising from your use of those platforms.",
              "Additionally, we are not liable for any security or data breaches that occur on third-party platforms or websites. Information you provide on public or semi-public venues, including information you share on third-party social networking platforms, may also be viewable by other users of the Services and/or users of those third-party platforms without limitation as to its use by us or by a third party.",
              "Our inclusion of such links does not, by itself, imply any endorsement of the content on such platforms or of their owners or operators, except as disclosed on the Services."
            ],
            "listItems": []
          },
          {
            "subhead": "Security and Retention of Your Information",
            "paragraphs": [
              "Please be aware that no security measures are perfect or impenetrable, and we cannot guarantee \"perfect security.\" In addition, any information you send to us may not be secure while in transit. We recommend that you do not use insecure channels to communicate sensitive or confidential information to us.",
              "How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, to provide the Services, comply with legal obligations, resolve disputes or enforce other applicable contracts and policies."
            ],
            "listItems": []
          },
          {
            "subhead": "Account Protection",
            "paragraphs": [
              "Your password is essential for protecting your account and personal information. You are solely responsible for keeping your password confidential and for any actions taken using your account. Sharing your password or personal information with others may lead to unauthorized access and legal consequences. If you suspect your password has been compromised, change it immediately to secure your account. We are not responsible for any consequences resulting from your failure to maintain password security."
            ],
            "listItems": []
          },
          {
            "subhead": "Your Rights",
            "paragraphs": [
              "Depending on where you live and applicable laws, you may have some or all of the rights listed below in relation to your personal information. However, these rights are not absolute, may apply only in certain circumstances and, in certain cases, we may decline your request as permitted by law.",
              "You may exercise any of these rights by contacting us using the contact details provided below.",
              "We will not discriminate against you for exercising any of these rights. We may need to collect information from you to verify your identity, such as your email address or account information, before providing a substantive response to the request. In accordance with applicable laws, you may designate an authorized agent to make requests on your behalf to exercise your rights. Before accepting such a request from an agent, we will require that the agent provide proof you have authorized them to act on your behalf, and we may need you to verify your identity directly with us. We will respond to your request in a timely manner as required under applicable law."
            ],
            "listItems": [
              "<strong>Right to Access / Know</strong>: You may have a right to request access to personal information that we hold about you, including details relating to the ways in which we use and share your information.",
              "<strong>Right to Delete</strong>: You may have a right to request that we delete personal information we maintain about you.",
              "<strong>Right to Correct</strong>: You may have a right to request that we correct inaccurate personal information we maintain about you.",
              "<strong>Right of Portability</strong>: You may have a right to receive a copy of the personal information we hold about you and to request that we transfer it to a third party, in certain circumstances and with certain exceptions.",
              "<strong>Restriction of Processing</strong>: You may have the right to ask us to stop or restrict our processing of personal information.",
              "<strong>Withdrawal of Consent</strong>: Where we rely on consent to process your personal information, you may have the right to withdraw this consent.",
              "<strong>Appeal</strong>: You may have a right to appeal our decision if we decline to process your request. You can do so by directly contacting us.",
              "<strong>Managing Communication Preferences</strong>: We may send you promotional emails, and you may opt out of receiving these at any time by using the unsubscribe option displayed in our emails to you. If you opt out, we may still send you non-promotional emails, such as those about your account or enrolment that you have made."
            ]
          },
          {
            "subhead": "International Users",
            "paragraphs": [
              "Please note that we may transfer, store and process your personal information outside the country in which you reside. This may include processing by our staff and third-party service providers and partners located in other countries.",
              "If we transfer your personal information across borders, we will ensure that the transfer is carried out in accordance with applicable data protections laws and regulations. We will rely on appropriate safeguards, such as contractual clauses or mechanisms that ensure adequate protection for your personal data, or any other safeguards that may be prescribed by the relevant authorities under applicable laws.",
              "If the data transfer is to a country or jurisdiction that does not provide an adequate level of data protection, we will implement measures to ensure that your personal data remains protected in accordance with applicable standards."
            ],
            "listItems": []
          },
          {
            "subhead": "Payment Gateway",
            "paragraphs": [
              "To ensure the security of your payment information, we utilize a secure payment gateway to process transactions. Your payment data is not stored on our servers but is securely transmitted directly to our trusted payment provider. For detailed information about their data handling practices, please refer to the privacy policy of our payment gateway partner."
            ],
            "listItems": []
          },
          {
            "subhead": "Chargeback Policy",
            "paragraphs": [
              "If you believe there has been an error in processing your payment or if you dispute a charge, please contact us immediately at <strong>info@medzeninnovations.in</strong> or +91-9176365161. We will investigate the matter promptly and provide a resolution.",
              "If a chargeback is initiated against your account without a valid reason, we may charge you a fee to cover the costs associated with the dispute. Additionally, we may restrict your future access to our services or products.",
              "Students are advised to review the final payable amount carefully before completing the transaction and ensure that sufficient funds are available in their account to cover the full payment amount, including any applicable taxes, bank charges, currency conversion charges, or platform fees charged by payment providers. Medzen Writes shall not be responsible for any additional charges levied by banks, payment gateways, or financial institutions. For clarity, matters relating to discounts, fee adjustments, and refunds are governed separately under the Refund Policy and the Student Enrollment Agreement.",
              "To avoid chargebacks, please review your transaction details carefully before making a payment. If you have any questions or concerns regarding a payment, we request you to contact us first so that we can assist you in resolving the issue promptly before initiating a chargeback."
            ],
            "listItems": []
          },
          {
            "subhead": "Governing Law and Jurisdiction",
            "paragraphs": [
              "This website is governed by the laws of India. If you access our website from outside of India, you do so at your own risk and are responsible for complying with applicable local laws. Any legal disputes arising from your use of our website will be subject to the exclusive jurisdiction of the courts of India."
            ],
            "listItems": []
          },
          {
            "subhead": "Severability",
            "paragraphs": [
              "Whenever possible, each section of this Privacy Policy shall be interpreted in a manner so as to be valid under Applicable Laws. However, in the event any provision is held to be prohibited or invalid, such provision shall be ineffective only to the extent of such prohibition or invalidity, without invalidating the remainder of such provision or other remaining provisions of this Privacy Policy."
            ],
            "listItems": []
          },
          {
            "subhead": "Children Information",
            "paragraphs": [
              "The Services are not intended for children, and we do not knowingly collect any personal information from children. If you are the parent or guardian of a child who has provided us with their personal information, you may contact us to request its deletion.",
              "As of the Effective Date of this Privacy Policy, we do not knowingly \"share\" or \"sell\" personal information of individuals under 18 (Eighteen) years of age, as defined by applicable law."
            ],
            "listItems": []
          },
          {
            "subhead": "Complaints and Grievance Redressal",
            "paragraphs": [
              "If you have any concerns or complaints regarding the processing of your personal data, or believe that your rights under applicable data protection laws have been violated, please reach out to us using the contact details provided below. We are committed to addressing your concerns promptly and effectively."
            ],
            "listItems": []
          },
          {
            "subhead": "Contact",
            "paragraphs": [
              "If you have any questions about our privacy practices or this Privacy Policy, or if you would like to exercise any of the rights available to you, please contact at <strong>info@medzeninnovations.in</strong> or +91-9176365161.",
              "We are committed to maintaining the accuracy of your information and will make reasonable efforts to respond to your requests in a timely manner."
            ],
            "listItems": []
          }
        ]
      }
    ]
  },
  "refund-policy": {
    "slug": "refund-policy",
    "title": "Cancellation and Refund Policy",
    "lastUpdated": "January 2025",
    "summary": "This Cancellation & Refund Policy applies to all courses, workshops, programs, digital products, and related offerings purchased through https://www.medzenwrites.com (\"Website\").",
    "sections": [
      {
        "heading": "Cancellation and Refund Policy",
        "subsections": [
          {
            "paragraphs": [
              "This Cancellation & Refund Policy applies to all courses, workshops, programs, digital products, and related offerings purchased through <a href=\"https://www.medzenwrites.com\" target=\"_blank\" rel=\"noopener noreferrer\">https://www.medzenwrites.com</a> (\"Website\"). By enrolling, you agree to this Policy along with our Terms & Conditions, Student Enrolment Agreement, and other policies."
            ],
            "listItems": []
          },
          {
            "subhead": "NO CANCELLATION",
            "paragraphs": [
              "Once your payment is successfully processed and your enrollment is confirmed, your purchase cannot be cancelled."
            ],
            "listItems": []
          },
          {
            "subhead": "NO REFUNDS",
            "paragraphs": [],
            "listItems": [
              "All payments made towards any Course on our Website are final and non-refundable, except in rare situations where a refund is expressly required under applicable law. This means we do not offer refunds for reasons such as a change of mind, inability to attend live sessions, lack of time, dissatisfaction, personal circumstances, technical issues on your end, or because you did not use the Course as expected. This list is illustrative and not exhaustive.",
              "Medzen Writes is an educational and skill-building program. While we support participants with research learning, guidance, and frameworks, we do not promise or guarantee outcomes such as journal publication, acceptance, grades, academic approvals, or research success. Non-publication, rejection by journals, delays in publication, or outcomes not meeting expectations will not be treated as grounds for a refund."
            ]
          },
          {
            "subhead": "DISCOUNTS AND COUPON CODES",
            "paragraphs": [
              "From time to time, we may offer discount codes as promotional offers. It is your responsibility to apply the code correctly before completing payment and to verify that the final amount reflects the discount. Discounts cannot be applied after payment, and failure to apply a code will not be eligible for a refund, adjustment, or partial credit."
            ],
            "listItems": []
          },
          {
            "subhead": "DISCLAIMER",
            "paragraphs": [],
            "listItems": [
              "If you pay in a foreign currency, your bank or payment provider may apply conversion rates or additional fees. These charges are controlled by your bank/payment provider and are not refundable by us.",
              "If you write to us requesting a refund, we may review it, but any decision to refund, full or partial will be entirely at our discretion. Submitting a request does not create a right to a refund."
            ]
          },
          {
            "subhead": "Contact Information",
            "paragraphs": [
              "If you have any questions, concerns, or require further assistance regarding our refund and return policies, please contact us at:",
              "Note: We reserve the right to update or modify these policies at any time. Any changes will take effect immediately upon posting on our website. Please review these policies periodically to stay informed of any updates."
            ],
            "listItems": [
              "<strong>Email:</strong> info@medzeninnovations.in",
              "<strong>Phone:</strong> +91-9176365161"
            ]
          }
        ]
      }
    ]
  },
  "terms-conditions": {
    "slug": "terms-conditions",
    "title": "Terms & Conditions",
    "lastUpdated": "January 2025",
    "summary": "These Terms of Use (\"ToU\") govern your access to and use of the website (https://www.medzenwrites.com/) provided by Medzen Writes.",
    "sections": [
      {
        "heading": "Terms & Conditions",
        "subsections": [
          {
            "subhead": "Introduction",
            "paragraphs": [],
            "listItems": [
              "<strong>Scope:</strong> These Terms of Use (\"ToU\") govern your access to and use of the website (https://www.medzenwrites.com /) provided byMedzen Writes. By accessing, using, browsing, or downloading any content from the Site, you agree to be comply with these ToU set forth by Medzen Writes. If you do not agree, you must not use or access the Site.",
              "<strong>Individual and Organizational Use:</strong> If you are an individual, you confirm that you are of legal age in your jurisdiction to enter into this agreement. If you are using the site on behalf of a corporation, partnership, or any other entity, you represent that you have the legal authority to bind that organization to these ToU. References to \"you\" and \"your\" apply to both the individual user and the organization they represent.",
              "<strong>Prohibited Activities:</strong> The scraping of data or content from this website is strictly prohibited. Medzen Writes reserves the right to take legal action against any unauthorized activities, including but not limited to scraping.",
              "<strong>Additional Terms:</strong> These ToU, along with any additional terms or policies posted on the site or provided by Medzen Writes, form the complete agreement between you and Medzen Writes. You may request copies of such documents by contacting Medzen Writes with a detailed request.",
              "<strong>Acceptance:</strong> By using the Medzen Writes website, you acknowledge that you have read, understood, and agree to these ToU, as well as all applicable laws and regulations.",
              "<strong>Modification of Terms:</strong> Medzen Writes reserves the right, at its sole discretion, to modify or remove any part of these ToU at any time without prior notice. It is the user's responsibility to review these Terms regularly. Continued use of the site after any changes, whether explicitly noted on the site or not, constitutes your acceptance of the revised ToU."
            ]
          },
          {
            "subhead": "Use of Website",
            "paragraphs": [],
            "listItems": [
              "<strong>Lawful Use:</strong> You may use the Medzen Writes website solely for lawful purposes and in a manner that does not infringe upon the rights of others, disrupt the site, or violate applicable laws and regulations.",
              "<strong>Prohibited Activities:</strong> You agree not to:a) Use the website for any illegal purpose or violate any applicable laws.b) Engage in any activity that disrupts or interferes with the website's operations.c) Attempt to gain unauthorized access to the website or its systems."
            ]
          },
          {
            "subhead": "Research Services Platform",
            "paragraphs": [
              "Users are responsible for ensuring that any device used to access the Medzen Writes platform is secure, protected against malware or unauthorized access, and compliant with reasonable security practices. Users must take appropriate precautions to maintain the integrity, confidentiality, and availability of the platform, their login credentials, and any shared documents or data."
            ],
            "listItems": [
              "Medzen Writes operates an electronic platform through its Website and Medzen Writes App for the provision and coordination of research-based and academic support services. These services include, but are not limited to, research consultancy, academic guidance, manuscript structuring, data analysis, editing and proofreading, content development, publication support, training, and other related professional and educational assistance. The platform also provides tools and systems for service inquiries, onboarding, communication, document exchange, progress tracking, and overall service coordination between users and Medzen Writes.",
              "The Medzen Writes website and platform govern only the services directly provided by Medzen Writes . Medzen Writes does not own, control, or influence the independent decisions of journals, publishers, indexing bodies, or editorial boards. Accordingly, Medzen Writes shall not be responsible for any action taken by such third parties, including but not limited to rejection, blacklisting, redaction, correction, withdrawal, delisting, or removal of any manuscript, article, or publication at any stage before or after submission or publication. Users acknowledge that all publication-related decisions rest solely with the respective journal or publisher, and Medzen Writes shall not be liable for any resulting consequences, losses, reputational impact, or claims arising from such actions.",
              "All service requests, engagements, communications, document sharing, and financial transactions relating to services offered by Medzen Writes must be conducted exclusively through the Medzen Writes platform or through officially authorized communication channels designated by Medzen Writes . Any attempt to solicit, offer, negotiate, or conduct business outside the platform without express authorization is strictly prohibited.",
              "Users agree to promptly report to Medzen Writes any attempt by any individual or entity to solicit payments, services, confidential information, or engagements related to Medzen Writes outside the official platform or authorized channels."
            ]
          },
          {
            "subhead": "Website Content",
            "paragraphs": [],
            "listItems": [
              "These ToU apply to Medzen Writes ' Website and any other websites or/and mobile applications operated by Medzen Writes or its authorized partners, collectively referred to as the \"Medzen Writes Sites\". The Medzen Writes Sites may be managed by our subsidiaries, parent companies, or authorized partners as confirmed by Medzen Writes in writing. Some Medzen Writes Sites may have additional or different terms of use. By accessing any Medzen Writes Site, you agree to the terms governing that specific site. Your access to the Medzen Writes Site constitutes acceptance of the terms for all Medzen Writes",
              "All content on the Medzen Writes Sites, including text, images, graphics, logos, videos, and downloadable materials is provided for informational purposes only. No representations or warranties about the accuracy, completeness, or reliability of any content available on the website, including the content of third-party links.",
              "We reserve the right to modify, update, or remove any content or links on the website at any time without prior notice.",
              "Your use of the website and its content is at your own risk. We will not be held liable for any errors or omissions in the content or for the availability of the content."
            ]
          },
          {
            "subhead": "Purpose of the Site",
            "paragraphs": [],
            "listItems": [
              "<strong>Informational Purpose:</strong> The materials available on Medzen Writes website are provided solely for general informational purposes. Nothing contained on the Medzen Writes Site shall be construed as a commercial offer, solicitation, license, or as the basis for establishing any advisory, fiduciary, academic, or professional relationship between you and Medzen Writes . Any information made available on the Site is not intended to substitute independent research, due diligence, or professional judgment. Users are encouraged to conduct their own independent investigation before relying on any information provided. The content on the Medzen Writes Site may not be used for commercial purposes, competitive analysis, or to develop, replicate, or infringe upon Medzen Writes 's business operations, services, or intellectual property in any manner without prior written authorization. Additionally, certain services, offerings, or features referenced on the Site may not be available in all jurisdictions or at all times, and Medzen Writes makes no representation or warranty regarding their availability.",
              "<strong>Educational and Research Support Purpose:</strong> The Site may be used to share educational resources, research methodologies, academic insights, and general guidance intended to support learning and research-related activities. Such content is provided for general reference only and does not constitute academic certification, authorship, or institutional endorsement.",
              "<strong>Communication and Engagement Purpose:</strong> The Site serves as a communication platform enabling users to submit inquiries, project requirements, feedback, or service requests, and to communicate with Medzen Writes through designated channels.",
              "<strong>Service Awareness Purpose:</strong> The Site may present information regarding services, capabilities, case studies, or research areas offered by Medzen Writes for awareness and informational review only. Such information does not constitute a binding offer unless expressly stated in a separate agreement.",
              "The Site may be used to publish legal notices, policies, disclosures, updates, and compliance-related information applicable to users of the platform."
            ]
          },
          {
            "subhead": "User Account",
            "paragraphs": [],
            "listItems": [
              "If the Website provides the option to create a user account, you may be required to provide accurate, complete, and up-to-date personal information, including your name, contact details, and any other information requested during registration. You are responsible for ensuring that any information associated with your account remains current.",
              "Where an account is created, you are solely responsible for maintaining the confidentiality of your login credentials and for all activities conducted through your account.Credential Protection: You must not share your account credentials with any other person.Suspicious Activity: You agree to promptly notify Medzen Writes of any unauthorized access, misuse, or suspicious activity relating to your account.",
              "If the Website allows access through third-party authentication services, such as Google or similar services, such access shall be subject to the terms and conditions and privacy policies of the respective third-party service provider. Medzen Writes shall not be responsible for any issues arising from the use of such third-party accounts.",
              "You must not impersonate any individual or entity, misrepresent your identity, or engage in fraudulent or deceptive activities while using the Website or any associated services",
              "Where user accounts are enabled, Medzen Writes reserves the right to suspend or terminate an account, with or without notice, under circumstances including but not limited to:Violation of these Terms or any applicable policies;Activities that compromise the security, integrity, or functionality of the Website;Submission of false, misleading, or inaccurate information;Engagement in unlawful, fraudulent, or prohibited activities;Failure to maintain reasonable account security.",
              "Medzen Writes reserves the right to take appropriate action to protect the Website, its users, and its services, including restricting access where necessary to maintain security and integrity."
            ]
          },
          {
            "subhead": "Applicability of Other Regulatory Frameworks",
            "paragraphs": [],
            "listItems": [
              "The services, courses, educational materials, research support, and content made available on the Medzen Writes Website are primarily governed by applicable laws relating to education services, digital platforms, contracts, and information technology. Users are further informed that regulations, guidelines, notifications, or directions issued by governmental authorities, statutory bodies, or regulatory agencies, including but not limited to laws relating to copyright, intellectual property, data protection, and online content, may also apply to the use, access, distribution, or reliance upon materials provided through the Website.",
              "Any use of courses, research assistance, academic content, or materials that falls under the purview of additional regulatory or legal frameworks shall be subject to the applicable requirements, restrictions, and compliance obligations prescribed by the relevant authority. Users are responsible for ensuring that their use of the Website and its content complies with all applicable laws, including those governing academic integrity, copyright, fair use, and lawful use of digital content."
            ]
          },
          {
            "subhead": "Maintenance and Availability",
            "paragraphs": [],
            "listItems": [
              "Medzen Writes may carry out scheduled or unscheduled maintenance, updates, or system upgrades to ensure the security, performance, and reliability of the Website, application, courses, or services. Such activities may result in temporary interruptions or limited availability.",
              "Medzen Writes reserves the right to modify, update, suspend, or discontinue any part of the Website, courses, services, features, or functionality at any time, with or without prior notice. Continued use of the Website following any updates or changes constitutes acceptance of such modifications.",
              "The Website and related services may be subject to delays, interruptions, errors, or technical issues due to maintenance, system failures, network issues, or external factors beyond Medzen Writes 's control. Medzen Writes does not guarantee uninterrupted or error-free access and shall not be liable for any loss, inconvenience, or damage arising from such interruptions or changes."
            ]
          },
          {
            "subhead": "Software",
            "paragraphs": [],
            "listItems": [
              "Any software, platform, code, or application used to operate the Medzen Writes Website and any associated mobile or web application (collectively, the \"Software\") is the exclusive intellectual property of The Good Research Project (Medzen Writes ) and/or its licensors and is protected by applicable copyright and intellectual property laws.",
              "Medzen Writes grants you a limited, non-exclusive, non-transferable, and revocable license to use the Software solely for accessing and using the Website or application in accordance with these Terms. This license does not transfer any ownership or proprietary rights.",
              "You agree that you shall not, under any circumstances:Modify, adapt, translate, reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of the Software;Reproduce, copy, distribute, publicly display, republish, upload, post, transmit, resell, or exploit the Software or any part thereof;Use the Software for any unlawful, unauthorized, or commercial purpose not expressly permitted by Medzen Writes ;Rent, lease, sublicense, or otherwise transfer any rights in the Software to any third party.",
              "Any unauthorized use of the Software may result in immediate suspension or termination of access and may subject you to civil or criminal liability under applicable law."
            ]
          },
          {
            "subhead": "External Links and Third-Party Resources",
            "paragraphs": [],
            "listItems": [
              "The Website may include references or links to external websites, platforms, tools, or resources operated by third parties. Such references are provided solely for convenience and informational purposes and do not imply any recommendation, approval, sponsorship, or association by Medzen Writes .",
              "Medzen Writes does not manage, monitor, or control third-party websites and makes no representations regarding their content, security, accuracy, availability, privacy practices, or terms. Any interaction with third-party websites is undertaken entirely at the user's discretion and risk.",
              "Users are responsible for safeguarding their systems and for reviewing and complying with the policies and terms applicable to any third-party website accessed through links on the Medzen Writes Website.",
              "You may not frame, embed, scrape, mirror, or reproduce any part of the Website or its content within another website or platform without prior written authorization from Medzen Writes ."
            ]
          },
          {
            "subhead": "Intellectual Property and Ownership",
            "paragraphs": [],
            "listItems": [
              "All content, materials, software, courses, research outputs, branding elements, databases, and other proprietary components available on the Website are owned by Medzen Writes or its licensors and are protected by applicable intellectual property laws.",
              "Protected materials include, without limitation, written content, course modules, research materials, graphics, videos, audio files, documents, logos, icons, and underlying code.",
              "Access to the Website and its content is granted solely for personal, educational, or internal use, as expressly permitted under these Terms. All copyright notices and proprietary markings must remain intact.",
              "Any copying, alteration, redistribution, publication, commercial exploitation, or creation of derivative works from the Website content without prior written consent from Medzen Writes is strictly prohibited and may give rise to legal action.",
              "All trademarks, names, and logos associated with Medzen Writes are its exclusive property. Any third-party trademarks appearing on the Website remain the property of their respective owners. No license or right to use any trademark is granted by implication or otherwise."
            ]
          },
          {
            "subhead": "User-Submitted and Third-Party Content",
            "paragraphs": [],
            "listItems": [
              "The Website may allow users, contributors, or third parties to submit or upload content in certain areas. Such content is provided solely by the respective contributor, and Medzen Writes does not assume authorship or responsibility for it unless explicitly stated.",
              "Medzen Writes does not independently verify user-submitted or third-party content and does not guarantee its accuracy, legality, completeness, or suitability. Any reliance on such content is at the user's own risk.",
              "Medzen Writes is not responsible for the conduct, actions, or communications of users on or through the Website and shall not be liable for any loss or damage arising from user interactions.",
              "Medzen Writes reserves the right, at its discretion, to remove, restrict, or disable access to any content that violates these Terms, applicable laws, or platform standards, without obligation to provide prior notice."
            ]
          },
          {
            "subhead": "User Content Guidelines",
            "paragraphs": [],
            "listItems": []
          },
          {
            "subhead": "Content posted on the Website by users must not:",
            "paragraphs": [],
            "listItems": [
              "Contain fraudulent information, make fraudulent offers of items, or involve the sale or attempted sale of counterfeit, stolen, or prohibited items as per applicable law, or promote illegal activities.",
              "Be part of a scheme to defraud other users or for any other unlawful purpose.",
              "Infringe upon third-party rights, including but not limited to copyright, patents, trademarks, trade secrets, publicity rights, privacy rights, or any other intellectual property or proprietary rights.",
              "Violate any applicable laws, statutes, ordinances, or regulations.",
              "Be defamatory, libelous, threatening, or harassing.",
              "Contain material that constitutes unauthorized advertising or harassment, invades anyone's privacy, or encourages conduct that would constitute a criminal offense, civil liability, or violation of any law.",
              "Contain any viruses or malicious code designed to damage, interfere with, intercept, or expropriate any system, data, or personal information.",
              "Link directly or indirectly to, or include descriptions of, goods or services that are prohibited under prevailing law."
            ]
          },
          {
            "subhead": "Payment Processing Disclaimer",
            "paragraphs": [
              "While we strive to provide a seamless payment experience, we cannot be held responsible for any errors, delays, or failures in payment processing that may occur due to factors beyond our control, including but not limited to:"
            ],
            "listItems": [
              "<strong>Third-Party Payment Processors:</strong> We rely on third-party payment processors to handle transactions. Any issues or errors arising from these third-party services are beyond our control.",
              "<strong>Bank or Card Issuer Issues:</strong> Problems with banks or card issuers may result in payment processing delays or failures.",
              "<strong>Technical Issues:</strong> Technical difficulties or system failures may temporarily disrupt payment processing.",
              "<strong>Force Majeure Events:</strong> Events such as natural disasters, cyberattacks, or other unforeseen circumstances may impact payment processing.",
              "<strong>Report External Transactions:</strong> Act ethically and professionally while using Medzen Writes . Disruptive behaviour, market price manipulation, or unfair practices are not tolerated."
            ]
          },
          {
            "subhead": "Fees and Charges",
            "paragraphs": [
              "Medzen Writes may charge fees for courses, research services, academic support, consultations, or other offerings made available on the Website. Such fees may include, but are not limited to:"
            ],
            "listItems": [
              "<strong>Course and Service Fees:</strong> Fees applicable to enrollment in courses, research programs, consultancy services, or other paid offerings.",
              "<strong>Payment Processing Fees:</strong> Certain transactions may attract processing fees as imposed by third-party payment gateways or financial institutions.",
              "<strong>Currency Conversion Fees:</strong> Where payments are made in a currency other than the base currency specified by Medzen Writes , currency conversion charges may apply as determined by the payment service provider or issuing bank.",
              "<strong>Other Charges:</strong> Any additional charges, where applicable, will be clearly disclosed prior to completion of the payment. All applicable fees shall be displayed or communicated to the User before confirming any payment."
            ]
          },
          {
            "subhead": "Payment Security",
            "paragraphs": [
              "Medzen Writes prioritizes the security of User payment information. Payments made on the Website are processed through reputable third-party payment gateways which employ industry-standard security measures. While Medzen Writes strives to ensure a secure payment environment, Users acknowledge that payment processing is handled by third-party service providers and is subject to their respective security standards and policies."
            ],
            "listItems": []
          },
          {
            "subhead": "User's Payment Arrangement With Issuing Bank and Payment Gateway",
            "paragraphs": [
              "All payments made on the Website using credit cards, debit cards, net banking, UPI, wallets, or other supported payment methods are processed through authorized third-party payment gateways as may be enabled from time to time. Such transactions are governed by the terms and conditions agreed upon between the User and their respective issuing bank, financial institution, or payment service provider. Medzen Writes does not store or process Users' complete payment instrument details and shall not be responsible for any issues arising from the User's relationship with the issuing bank or payment gateway."
            ],
            "listItems": []
          },
          {
            "subhead": "Payment Processing and Security Disclaimer",
            "paragraphs": [
              "Medzen Writes implements reasonable measures to protect payment-related information; however, Users acknowledge that payment processing is managed by independent third-party payment gateways. Medzen Writes shall not be held liable for any failure, delay, interruption, or unauthorized access arising from systems or services operated by such third-party providers, except to the extent required under applicable law."
            ],
            "listItems": []
          },
          {
            "subhead": "Price Variation",
            "paragraphs": [],
            "listItems": [
              "Prices for courses, programs, research services, or other offerings displayed on the Medzen Writes Website are indicative and subject to change without prior notice. Pricing may vary based on course structure, service scope, duration, promotional offers, applicable taxes, currency differences, or other business considerations.",
              "Unless otherwise specified, prices for Users located in India are displayed and charged in Indian Rupees (INR), while prices for Users located outside India are displayed and charged in United States Dollars (USD) or such other foreign currency as determined by Medzen Writes . Where currency conversion is applicable, the final amount payable may vary due to exchange rate fluctuations, bank charges, or payment gateway conversion fees.",
              "Medzen Writes does not guarantee the accuracy or continued availability of any price or promotional offer displayed on the Website. The final price payable shall be the amount displayed and confirmed at the time of payment. Medzen Writes shall not be liable for any discrepancy arising from indicative pricing, currency conversion, or exchange rate variations, and any reliance on such indicative pricing is at the User's own discretion."
            ]
          },
          {
            "subhead": "Termination",
            "paragraphs": [],
            "listItems": [
              "Medzen Writes reserves the right to suspend, restrict, or terminate your access to the Website, courses, services, or any associated features if you violate these Terms of Use, engage in unlawful conduct, or misuse the platform in any manner.",
              "Medzen Writes may temporarily or permanently restrict access, cancel enrollment, or prevent future enrollment in any course, program, or service offered by Medzen Writes if it determines, in its reasonable discretion, that a user has engaged in conduct including, but not limited to: providing false or misleading information; engaging in fraudulent, deceptive, or illegal activities; misusing the Website to send spam or repetitive or unauthorized content; impersonating another individual or organization; attempting unauthorized access to systems, data, or services; or obtaining or attempting to obtain access credentials belonging to another user.",
              "In cases of serious or material violations, such as non-payment for enrolled courses or services, financial misconduct, fraud, breach of contractual obligations, or repeated violations, Medzen Writes may suspend your access to current courses or services and restrict or prohibit future enrollment. Where feasible, Medzen Writes will notify you of such action and provide a reasonable opportunity to remedy the issue. If the breach is not resolved within the specified period, the suspension may continue or a longer-term restriction on access or enrollment may be imposed.",
              "If you attempt to access the Website, courses, or services through alternate accounts, third-party credentials, or under different identities following a suspension or restriction, Medzen Writes may extend such action to all related accounts.",
              "You may submit a written appeal against any suspension or restriction within the time period communicated to you. Medzen Writes will review the appeal in good faith, and its decision shall be final."
            ]
          },
          {
            "subhead": "Social Media Policy",
            "paragraphs": [],
            "listItems": [
              "<strong>Acceptable Conduct:</strong> You agree to use our social media accounts in a respectful, responsible, and ethical manner. Your use of our social media platforms is subject to the terms of service, privacy policies, and other guidelines of those platforms.",
              "<strong>Prohibited Conduct:</strong> You agree not to:Harass or abuse others: Engage in any form of harassment, abuse, threats, or intimidation.Post harmful content: Share content that is hateful, discriminatory, offensive, or harmful to others.Violate laws: Engage in any illegal or unauthorized activity.Spam: Send unsolicited messages or spam.Violate intellectual property: Infringe on the intellectual property rights of others.Promote harmful or illegal activities: Encourage or promote harmful or illegal activities.Misrepresent yourself: Impersonate another person or entity.",
              "<strong>External Content:</strong> While we may share or link to external content on our social media platforms, we do not endorse, control, or guarantee the accuracy, completeness, or reliability of such content. You are responsible for assessing the credibility and relevance of any external content you encounter.",
              "<strong>Privacy and Data Collection:</strong> Your use of our social media platforms may involve the collection and processing of your personal information. Please refer to the privacy policies of the respective platforms for details on how your data is collected, used, and protected.",
              "<strong>Copyright and Intellectual Property:</strong> Any copyrighted or intellectual property content shared on our social media platforms is subject to the applicable copyright and intellectual property laws. We do not claim ownership of any content shared by others on our social media pages.",
              "<strong>Disclaimer of Liability:</strong> We are not responsible for the actions, content, or privacy practices of the social media platforms we link to. We disclaim any liability for any damages or losses arising from your use of or reliance on any content or information found on our social media platforms.",
              "<strong>Termination and Suspension:</strong> We reserve the right to remove any content that violates these guidelines on our social media platforms and to suspend or terminate your access to our accounts if you repeatedly violate these rules. We may also cooperate with law enforcement authorities in investigating any illegal activity."
            ]
          },
          {
            "subhead": "E-mail Abuse & Threat Policy",
            "paragraphs": [],
            "listItems": [
              "Medzen Writes requires all users to maintain professional, lawful, and respectful communication in connection with the Website and its services. Although Medzen Writes does not routinely monitor private email communications, any misuse of email or communication channels associated with the Website will be treated as a serious violation of these Terms.",
              "The following conduct is strictly prohibited:Sending any email or communication containing threats, intimidation, harassment, abusive language, or references to violence against any individual or entity.Using Medzen Writes communication channels for unauthorized, deceptive, or non-legitimate purposes, including manipulation, exploitation, or interference with the functioning of the Website or its services.Sending fraudulent, misleading, or impersonation communications, including emails falsely claiming to originate from Medzen Writes . Medzen Writes will never request passwords, payment details, or sensitive personal information via email.Sending unsolicited commercial communications, advertisements, promotional messages, or spam to users, learners, researchers, or representatives associated with the Website.",
              "Any violation of this policy may result in immediate action by Medzen Writes , including restriction or termination of access to the Website, suspension of services, and reporting to appropriate legal or regulatory authorities where required. Users are required to report any suspected abuse, threats, or fraudulent communications through the official contact channels provided on the Website."
            ]
          },
          {
            "subhead": "Accuracy of Information and Consequences of Misrepresentation",
            "paragraphs": [],
            "listItems": [
              "By accessing and using the Website, all users, including but not limited to researchers, clients, contributors, third-party service providers, representatives, Medzen Writes members, and any other individuals or entities (hereinafter referred to as \"Users\"), agree to provide true, complete, and accurate information when interacting with or submitting data to the Website. This includes, but is not limited to, personal information, academic or professional details, contact information, payment-related details, confidential data, and any other information submitted for the purpose of account creation, service inquiries, project engagement, or any other activity conducted through the Medzen Writes platform.",
              "Medzen Writes places high importance on data integrity, user trust, and the lawful operation of the platform. Any misrepresentation, falsification, or omission of material information, whether intentional or negligent, may adversely affect the functioning of the Website, compromise the interests of other Users, or result in unauthorized or improper use of services. Where Medzen Writes determines, or has reasonable grounds to believe, that a User has submitted false, misleading, incomplete, or inaccurate information, Medzen Writes reserves the right to take appropriate action without prior notice, including but not limited to:Suspension or termination of the User's access or account on the Medzen Writes platform;Withholding, cancellation, or refusal of any service request or engagement associated with such information;Conducting internal reviews and, where required, reporting the matter to appropriate legal or regulatory authorities;Seeking remedies available under applicable law for any loss or damage caused to Medzen Writes or affected third parties.",
              "The nature and extent of any action taken shall be determined at the sole discretion of Medzen Writes , based on the nature of the inaccurate information, the resulting impact or grievance, and the effect on the security, integrity, or operations of the platform.",
              "Users are advised to exercise due care while submitting or updating information on the Website and to promptly notify Medzen Writes of any changes necessary to ensure the continued accuracy of such information."
            ]
          },
          {
            "subhead": "Privacy",
            "paragraphs": [
              "Medzen Writes is committed to protecting your privacy. Please refer to our Privacy Policy for detailed information on how we collect, use, and safeguard your personal data."
            ],
            "listItems": []
          },
          {
            "subhead": "Disclaimers",
            "paragraphs": [],
            "listItems": [
              "<strong>\"As Is\" Materials:</strong> The website and all materials are provided \"as is\" without warranties of any kind. While Medzen Writes strives for reliable information, we don't guarantee accuracy, suitability, or up-to-dateness. Medzen Writes reserves the right to change information at any time.",
              "<strong>No Guarantee of Results:</strong> Medzen Writes doesn't guarantee specific outcomes from using website materials. You are solely responsible for how you use them, and your use of the website is at your own risk. You must comply with all applicable laws and regulations. The information does not alter any warranties you may have under a separate contract with Medzen Writes ."
            ]
          },
          {
            "subhead": "Limitation of Liability",
            "paragraphs": [],
            "listItems": [
              "You assume full responsibility and all associated risks for using this platform and the Internet in general. Under no circumstances shall we, our affiliates, directors, employees, or agents be liable for any direct, indirect, incidental, consequential, or special damages arising from or related to your use of the platform or any linked sites.",
              "This includes, but is not limited to:Loss of use, data, or profitsBusiness interruptions or work stoppagesLoss of goodwill or reputationSecurity breaches, viruses, or cyberattacksComputer failures or system malfunctions",
              "This limitation applies regardless of the form of action, whether based on contract, negligence, tort, strict liability, or any other legal theory, even if we were advised of the possibility of such losses.",
              "Medzen Writes shall not be held liable for any losses, damages, or claims arising from fraudulent activities or misconduct by users or third parties. Users are responsible for ensuring the accuracy of all information provided to Medzen Writes , and Medzen Writes reserves the right to take appropriate action, including suspension or termination of accounts, in case of suspected fraud or illegal activities.",
              "Medzen Writes will not be held liable for any indirect, incidental, consequential, or punitive damages, including but not limited to loss of profits, business interruption, or loss of data, arising from the use of the website or services, even if Medzen Writes has been advised of the possibility of such damages.",
              "While we strive to ensure the accuracy, completeness, and timeliness of all content, we make no warranties regarding its reliability. It is solely your responsibility to verify any information before relying on it. We acknowledge that content may contain technical inaccuracies or typographical errors, and we reserve the right to make changes or updates at any time."
            ]
          },
          {
            "subhead": "Consent, Responsibility, and Marketing Use",
            "paragraphs": [],
            "listItems": [
              "By enrolling in our services, you provide your voluntary and informed consent to Medzen Writes to use your name, photograph, academic and publication details, achievements, testimonials, feedback, and relevant communication excerpts, including messages exchanged via WhatsApp, Instagram, email, or other platforms, including interactions with team members, for marketing, promotional, informational, and educational purposes. Such use may be made across our website, social media platforms, advertisements, presentations, and other promotional materials.",
              "This consent is granted without coercion and shall remain valid for ongoing promotional and institutional purposes. You acknowledge that such use will be professional, respectful, and non-defamatory in nature.",
              "You agree not to object to the continued use of content that has already been published, printed, or distributed based on your consent prior to any withdrawal request.",
              "Consent may be withdrawn at any time by submitting a written request and following the formal mechanism communicated by Medzen Writes . Upon such request, Medzen Writes will make reasonable efforts to discontinue future use of your personal content on platforms under its direct control within a reasonable timeframe. Withdrawal shall apply prospectively and will not require recall or removal of materials already published, printed, or circulated.",
              "A more detailed and legally binding version of these terms, including the full scope of rights, responsibilities, and permissions, will be set out in the Student Enrollment Agreement, which shall prevail in the event of any inconsistency."
            ]
          },
          {
            "subhead": "Severability",
            "paragraphs": [
              "If any term in these Terms of Use is held to be invalid, illegal, or unenforceable for any reason, such invalidity, illegality, or unenforceability shall not affect the validity of any other provision of these Terms of Use."
            ],
            "listItems": []
          },
          {
            "subhead": "Waiver",
            "paragraphs": [
              "The failure of Medzen Writes to exercise, or any delay in exercising, a legal right or remedy provided by these Terms of Use or by law shall not be considered a waiver of Medzen Writes 's right or remedy. Additionally, if Medzen Writes waives a breach of these Terms of Use, it shall not operate as a waiver of any subsequent breach."
            ],
            "listItems": []
          },
          {
            "subhead": "Indemnification",
            "paragraphs": [],
            "listItems": [
              "By using the Website, you agree to indemnify and hold harmless Medzen Writes , its affiliates, owners, officers, directors, agents, and employees from and against any and all claims, damages, liabilities, losses, expenses (including reasonable attorneys' fees), or penalties arising out of or related to:Your use of the Services, or any violation of these ToU, Privacy Policy, or other Policies.Any content or material you upload, post, or transmit, including but not limited to booking, creating account, etc.Your breach of any third-party rights, including but not limited to intellectual property rights, privacy rights, or contractual obligationsYour violation of any applicable laws, rules, or regulations in connection with your use of the Services.Any unauthorized or improper use of the Website by you or anyone accessing the Website using your account.",
              "Medzen Writes processes all transactions and user data based on the information received from third-party sources. We are not responsible for any inaccuracies, errors, or omissions in the data provided by third parties. If any discrepancies or issues arise from third-party information, we will process the data as received, and will not be liable for any errors, losses, or damages resulting from such discrepancies. Users agree to indemnify Medzen Writes against any claims related to third-party errors or fraudulent activities."
            ]
          },
          {
            "subhead": "Governing Law and Jurisdiction",
            "paragraphs": [
              "We believe that the establishment of trust and privacy is instrumental to the continued growth of the Internet. We also believe that the efficient collection, use, and transfer of information enhance the development of the Internet and electronic commerce, provided that such information is handled in a fair and responsible manner."
            ],
            "listItems": [
              "These Terms of Use are governed by and construed in accordance with the laws of India. Any disputes arising from these ToU will be subject to the exclusive jurisdiction of the courts located in Chennai, India.",
              "Any controversy or claim arising out of or related to these Terms of Use shall be governed by Indian law. The courts of Chennai, India, will have exclusive jurisdiction."
            ]
          },
          {
            "subhead": "Contact Information",
            "paragraphs": [
              "If you have any questions about these Terms of Use, please contact us at <strong>info@medzeninnovations.in</strong>."
            ],
            "listItems": []
          }
        ]
      }
    ]
  },
  "shipping-policy": {
    "slug": "shipping-policy",
    "title": "Shipping Policy",
    "lastUpdated": "August 04 2026",
    "summary": "Shipping is not applicable for business.",
    "sections": [
      {
        "heading": "Shipping Policy",
        "subsections": [
          {
            "paragraphs": [
              "<strong>Last updated on August 04 2026</strong>",
              "Shipping is not applicable for business."
            ],
            "listItems": []
          }
        ]
      }
    ]
  }
};
