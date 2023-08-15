//summary page descriptions
export const summary = [
  "Here's some info about me: ",
  "I Graduated from Macewan University with a degree in Computer Science",
  "Coursework mainly covered C and Python programming, embedded systems, networking, using security, intrusion prevention and detection tools",
  "Some school projects I worked on:",
  "Developed an IoT monitoring system that uses several physical sensors to track blood pressure, heart rate, and temperature and displays it on a mobile application as a final project for my program",
  "Developed a python keyword syllabi search program in my spare time to help count the frequencies of specified keywords in a given list, then displayed that information graphically",
  "Developed a property value search program in Java with a partner for a school project. Included built-in google maps functionality as well the capability to search through a list containing hundreds of thousands of values in a timely manner,",
  
];

// project page descriptions
export const projects = {
    project0: [
        "Personal Website",
        [
          "I hosted this website on AWS lightsail using a virtual Ubuntu instance that has NGINX installed.",
          "Domain and certificates configured using AWS route 53 and Lightsail console. Website itself ",
          "is made in React, which is composed of Javascript, HTML, and CSS. ",
        ],
      ],
  project1: [
    "Rudimentary IoT Health Monitoring System",
    [
      "Connected several sensors to an Arduino microcontroller. Wrote a driver to allow interaction between sensors ",
      "and the microcontroller. Microcontoller then uploaded the sensor information to the IoT cloud platform Thingspeak",
      "Then developed an Android application using Flutter/Dart to display information from cloud platform and store user information",
    ],
  ],
  project2: [
    "Syllabi Search Program",
    [
      "Matched keywords in a chosen PDF document to a pre-determined key words list that then displayed results", 
      "(i.e. graphs, tables, matched keywords) in a readable UI. Some functionality included: enabled users to save", 
      "and load: previous results, settings that customized UI, able to view results in different grapg formats (bar, pie, histogram)",
    ],
  ],
  project3: [
    "Property Value Search Program",
    [
      "Allowed a user to search for specific property values in Edmonton with a given dataset. Some features included: ",
      "A built-in Google maps feature to allow visualization of property locations when searching for properties. ",
      "was able to search by address, and values. Designed the program specifically with scalability and extendibility for the future",
      
    ],
  ],
  project4: [
    "Hosting Gitlab on a Linux Server",
    [
      "Set up a firewall, and partitioned disk storage for increased security, Installed intrusion detection systems such as tripwire,", 
      "and system monitoring while performing regular security audits. Set up user accounts and assigned permissions according to a need-to-know basis",
      "Performed automated tests using pentesting tools such as John the ripper, chkrootkit and Lynis, to check for system health and security",
      "Wrote user guides and security reports on system."
    ],
  ],
  
};

export const languages = [
  "Python",
  "C",
  "React",
  "Dart",
  "Flutter",
  "Arduino Programming Language",
  "Java",
  "Javascript",
  "HTML",
  "CSS",
  "Assembly Language"
];

export const technologies = ["Git",
"Linux",
"Windows",
"Amazon Lightsail",
"Amazon firebase",
"VsCode",
"Ardunio IDE",
"Linux/Unix Cli",
]

export const links = {
  Email: "www.shantsharma.com",
  LinkedIn: "https://www.linkedin.com/in/shant-sharma-651178255",
  Github: "https://github.com/shant277",
};

export const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 1.2
    }
  };
  
  export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1.0
  };
  
  export const pageStyle = {
    position: "absolute"
  };