import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'ramesh.apppro@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Tajmrul123, I am reaching out to you because...',

    oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile: 'https://www.upwork.com/freelancers/tajmirul',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Tajmirul' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/tajmirul' },
    { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
    { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Java',
            icon: '/logo/java.png',
        },
        {
            name: 'Kotlin',
            icon: '/logo/kotlin.png',
        },
        {
            name: 'Dart',
            icon: '/logo/dart.png',
        },

        {
            name: 'HTML',
            icon: '/logo/html.png',
        }

    ],
    backend: [
        {
            name: 'Spring Boot',
            icon: '/logo/springboot.webp',
        }


    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'Firebase',
            icon: '/logo/firebase.png',
        }


    ],
    tools: [
        {
            name: 'Studio',
            icon: '/logo/studio.png',
        },
        {
            name: 'Git',
            icon: '/logo/git.png',
        },

        {
            name: 'VS code',
            icon: '/logo/vscode.png',
        },
    ],
};

// Key Features:<br/>
//       <ul>
//         <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
//         <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
//         <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
//         <li>📱 Fully Responsive: Optimized for all device sizes</li>
//         <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
//       </ul><br/>

//       Technical Highlights:
//       <ul>
//         <li>Implemented complex slider synchronization logic using Swiper.js</li>
//         <li>Customized Payload CMS admin panel for intuitive content management</li>
//         <li>Developed reusable UI components with shadcn for design consistency</li>
//         <li>Configured efficient data fetching strategies in Next.js</li>
//       </ul>
export const PROJECTS: IProject[] = [
    {
        title: 'Propeller X',
        slug: 'Propeller',
        liveUrl: 'https://electroev.co.uk/',
        year: 2025,
        description: ` RFID-based digital warehouse system for managing and tracking onboard ship spares with offline synchronization.<br/><br/>

      This project is a digital warehouse management solution for ships, designed to efficiently manage onboard spare parts using RFID technology. The application enables seamless check-in and check-out of spares, ensuring accurate inventory tracking and real-time visibility of available components. It highlights critical spares on the home screen, allowing crew and engineers to quickly identify high-priority items required for operations or maintenance.

The system supports offline-first functionality, enabling users to access spare details and view work locations inside the ship even in low-connectivity or no-network environments. All inventory updates, inspections, and transactions are securely stored locally and synchronized automatically when connectivity is restored. By digitizing manual warehouse processes and integrating RFID-based identification, the solution improves inventory accuracy, reduces downtime, and enhances operational efficiency for maritime operations. <br/> <br/>
      
      
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle of the Android application, including:<br/>
      <ul>
       <li>Handled client calls and requirement discussions</li>
        <li>Gathered requirements and user stories from BA</li>
        <li>Designed UI/UX flows using Figma</li>
        <li>Mentored and guided the Android team</li>
        <li>Developed core features, including RFID module</li>
        <li>Performed manual testing and coordinated with QA</li>
        <li>Delivered builds and releases to the client</li>
      </ul>
      `,
        techStack: [
            'Kotlin',
            'Jetpack Compose',
            'RFID',
            'QR Code',
            'Couchdb',
            'MVVM Architecture',
            'Hilt',
        ],
        thumbnail: '/projects/thumbnail/mti-electronics.webp',
        longThumbnail: '/projects/long/mti-electronics.webp',
        images: [
            '/projects/images/mti-electronics-1.webp',
            '/projects/images/mti-electronics-2.webp',
        ],
    },
    {
        title: 'AgriCentral',
        slug: 'AgriCentral',
        techStack: [
            'Kotlin',
            'Jetpack Compose',
            'Couchdb',
            'Firebase',
            'MVVM Architecture',
            'Material design',
            'Hilt',
        ],
        thumbnail: '/projects/thumbnail/epikcart.jpg',
        longThumbnail: '/projects/long/epikcart.jpg',
        images: [
            '/projects/images/epikcart-1.png',
            '/projects/images/epikcart-2.png',
            '/projects/images/epikcart-3.png',
            '/projects/images/epikcart-4.png',
            '/projects/images/epikcart-5.png',
        ],
        liveUrl: 'https://demo.epikcart.siphertech.com/',
        year: 2023,
        description: ` RFID-based digital warehouse system for managing and tracking onboard ship spares with offline synchronization.<br/><br/>

      AgriCentral is a technology-driven mobile application designed to help farmers make informed decisions and improve farm profitability. The app leverages advanced technologies such as GPS, satellite imagery, big data analytics, machine learning, and image analytics to empower farmers and enable the transition to digital farming. AgriCentral is provided free of cost and offers the following key features
      Market View<br>
AgriCentral provides access to over 25,000 daily crop price points, sourced from authentic channels and local markets across India. Farmers can view current prices in nearby and nationwide markets, analyze market trends, and decide the best time and location to sell their produce.<br><br>

Crop Care<br>
Using image recognition and symptom-based diagnosis, the Crop Care feature helps identify crop pests and diseases. Farmers receive expert recommendations, including preventive and corrective measures, along with cost-effective chemical suggestions and accurate dosage guidance.<br><br>

Crop Plan<br>
By entering the sowing date and cultivation type, farmers receive a personalized crop activity calendar aimed at achieving higher yields at lower costs. The feature also recommends trusted brands of fertilizers, pesticides, bio-agents, and other agricultural inputs.<br><br>

Bulletin<br>
The Bulletin section keeps farmers informed about local, national, and global developments in agribusiness. It also provides details on government schemes, eligibility, and guidance on how to avail benefits, with information sourced from verified and publicly available channels.<br><br>

Weather<br>
The Weather module offers a 15-day forecast covering critical parameters to help farmers plan activities effectively and minimize crop losses due to adverse conditions.<br><br>

Farm Voice<br>
Farm Voice is an interactive platform where farmers can connect with progressive farmers and agricultural experts. Users can ask questions, learn modern farming practices, share success stories, and participate in discussions related to agriculture.

      <br/> <br/>
      
      
      `,
        role: `
      Full-Stack Developer <br/>
      Owned the entire development lifecycle of the Android application, including:<br/>
      <ul>
       <li>Handled client calls and requirement discussions</li>
        <li>Gathered requirements and user stories from BA</li>
        <li>Designed UI/UX flows using Figma</li>
        <li>Mentored and guided the Android team</li>
        <li>Developed core features, including RFID module</li>
        <li>Performed manual testing and coordinated with QA</li>
        <li>Delivered builds and releases to the client</li>
      </ul>
      `,
    },
    {
        title: 'AuditHub',
        slug: 'AuditHub',
        techStack: [
            'Kotlin',
            'OCR',
            'SQLite',
            'Firebase',
            'MVVM Architecture',
        ],
        thumbnail: '/projects/thumbnail/resume-roaster.jpg',
        longThumbnail: '/projects/long/resume-roaster.jpg',
        images: [
            '/projects/images/resume-roaster-1.png',
            '/projects/images/resume-roaster-2.png',
            '/projects/images/resume-roaster-3.png',
        ],
        liveUrl: 'https://resume-roaster.vercel.app/',
        year: 2018,
        description:
            'This project is an invoice processing application designed to streamline audit and payment workflows. End users scan invoices for purchased items using the mobile app and upload them to the server. The server performs image processing and OCR analysis to extract invoice data and sends the processed results back to the mobile deviceThe application allows users to review and complete missing or incorrect fields using mobile-based OCR assistance and manual validation. Once all invoice details are verified and finalized, the complete data set is securely submitted to the backend system for audit verification and payment processing. The solution supports accurate, efficient, and compliant financial audits, specifically tailored for enterprise operations in Denmark. <br/> <br/>',
        role: `
      
      Owned the entire development lifecycle of the Android application, including:<br/>
      <ul>
       <li>Developed a mobile application for invoice scanning and audit processing</li>
<li>Implemented camera capture and image upload for invoice data submission to the server</li>
<li>Integrated OCR-based data extraction workflows and handled server response parsing</li>
<li>Enabled manual correction and completion of missing invoice fields on the mobile app</li>
<li>Ensured secure data transmission between mobile and backend systems</li>
<li>Collaborated with backend and audit teams to support payment and compliance workflows</li>
      </ul>
      `,
    },
    {
        title: 'Healthcare',
        slug: 'Healthcare',
        techStack: [
            'Java',
            'SQLite',
            'WebRTC',
            'Firebase',
            'MVP Architecture',
        ],
        thumbnail: '/projects/thumbnail/property-pro.jpg',
        longThumbnail: '/projects/long/property-pro.jpg',
        images: [
            '/projects/images/property-pro-1.png',
            '/projects/images/property-pro-2.png',
            '/projects/images/property-pro-3.png',
        ],
        liveUrl: 'https://demo.propertypro.siphertech.com/',
        year: 2023,
        description:
            'This project is a comprehensive digital healthcare application that enables patients to book medical appointments online with integrated payment support. The platform maintains secure digital medical records, allowing doctors and patients to access health history anytime. Users can order medicines online through the app, ensuring timely access to prescribed treatments.The application supports audio and video consultations using WebRTC, enabling real-time remote care. It sends instant notifications for critical patient conditions to ensure timely medical attention. The platform also provides insurance details and coverage information for better financial transparency. Additionally, it integrates with digital health devices to capture and monitor vital parameters such as heart rate, blood pressure, and blood sugar levels, supporting proactive and continuous healthcare management.',
        role: `
      <ul>
       <li>. Led end-to-end development of a digital healthcare and telemedicine application</li>
            <li>. Implemented online appointment booking with secure payment integration</li>
            <li>. Designed and maintained digital medical records with privacy and compliance controls</li>
            <li>. Integrated audio and video consultations using WebRTC</li>
            <li>. Enabled medicine ordering, insurance details, and critical patient notifications</li>
            <li>. Integrated digital devices for heart rate, blood pressure, and blood sugar monitoring</li>
            <li>. Collaborated with backend, QA, and product teams to ensure stability and quality</li>
            <li>. Prepared release builds and published the application to the Google Play Store</li>
      </ul>
      `,
    },
    {
        title: 'TouchPoint',
        slug: 'TouchPoint',
        techStack: ['Java', 'SQLite', 'MP Chart', 'Bootstrap'],
        thumbnail: '/projects/thumbnail/consulting-finance.jpg',
        longThumbnail: '/projects/long/consulting-finance.jpg',
        images: [
            '/projects/images/consulting-finance-1.png',
            '/projects/images/consulting-finance-2.png',
            '/projects/images/consulting-finance-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/crenotive',
        liveUrl: 'https://crenotive.netlify.app/',
        year: 2023,
        description:
            'This project is a survey analytics and reporting solution designed to provide clear insights into survey progress and outcomes. The application displays graphical dashboards showing the number of completed and incomplete surveys, enabling users to track survey execution status in real time. It also presents gender-based analytics, such as male and female participation counts, for demographic analysis.The system allows users to view survey results for specific questions, supporting detailed evaluation and decision-making. Based on the collected data, the application generates structured reports that can be shared with the Head of Department for review, analysis, and strategic planning. The solution improves survey transparency, data visibility, and reporting efficiency..',
        role: `
        <ul>
    <li>Designed and developed both backend services and Android frontend for survey analytics and reporting</li>
    <li>Implemented data aggregation logic to track completed and incomplete surveys</li>
    <li>Built graphical dashboards to visualize survey progress and demographic insights</li>
    <li>Developed gender-based analytics (male/female survey counts) for reporting</li>
    <li>Implemented question-level survey analysis to view responses for specific questions</li>
    <li>Designed report generation and export features for Head of Department review</li>
    <li>Collaborated with stakeholders to ensure data accuracy, performance, and usability</li>
</ul>
`,
    },
    {
        title: 'SurveyBeat',
        slug: 'devLinks',
        techStack: ['Java', 'SQLite', 'Firebase', 'Background Services', 'MVP Architecture'],
        thumbnail: '/projects/thumbnail/devLinks.jpg',
        longThumbnail: '/projects/long/devLinks.jpg',
        images: [
            '/projects/images/devLinks-1.png',
            '/projects/images/devLinks-2.png',
            '/projects/images/devLinks-3.png',
        ],
        sourceCode: 'https://github.com/Tajmirul/devsLink',
        liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
        year: 2023,
        description: `
        One of the most challenging projects in Frontend Mentor.<br/><br/>
This project is an offline-capable survey management application designed for tablet-based field data collection. Survey questions are created and stored on the server and distributed to specific devices through notifications. Assigned surveys are downloaded in online mode and stored locally on the tablet.Field users conduct surveys with people entirely offline, ensuring uninterrupted data collection in remote or low-network areas. The application automatically uploads completed surveys in the background once the device reconnects to the internet. All collected data is securely synchronized back to the server, ensuring data reliability, accuracy, and seamless survey operations.`,
        role: `<ul>
        <li>Designed and developed both Android frontend and backend services for an offline survey application</li>
        <li>Implemented server-side APIs to create, manage, and distribute survey questions</li>
        <li>Built notification-based device targeting for survey assignment and delivery</li>
        <li>Developed offline data storage and background sync mechanisms on tablets</li>
        <li>Implemented secure background upload of survey responses upon network availability</li>
        <li>Managed end-to-end data flow from survey creation to server synchronization and reporting</li>
        </ul`,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Senior Android Developer | Technical Lead',
        company: 'Magellan X,',
        duration: 'Mar 2018 – Apr 2019',
    },
    {
        title: 'Lead Android Engineer',
        company: 'Olam Information Services Private Ltd',
        duration: 'Sep 2019 – Jan 2023',
    },
    {
        title: 'Senior AndroidDeveloper',
        company: 'Findroids Private Ltd',
        duration: 'Mar 2018 – Apr 2019',
    },
    {
        title: 'Application Engineer',
        company: 'Tablytics Market Research Private Ltd',
        duration: 'Jul 2016 – Nov 2017 ',
    },
    {
        title: 'Junior Android Developer',
        company: 'Tertium Quid Information Service Private Ltd.',
        duration: 'Nov 2013 – May 2016',
    },
    {
        title: 'Junior Back-end developer',
        company: 'Ascenteq Info Solution',
        duration: 'Apr 2012 – Sep 2013',
    },
];

