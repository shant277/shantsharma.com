import {
    IoLogoJavascript,
    IoLogoCss3,
    IoLogoReact,
    IoLogoHtml5,
    IoNewspaper,
  } from "react-icons/io5";
  import { SiArduino, SiFlutter, SiPython } from "react-icons/si";
  import {
    MdOutlineEdgesensorLow,
    MdWeb,
    MdCloudSync,
    MdOutlineSplitscreen,
  } from "react-icons/md";
  import {
    FaTemperatureHigh,
    FaCloudArrowUp,
    FaAndroid,
    FaAws,
    FaFilePdf,
  } from "react-icons/fa6";
  import { SlGraph } from "react-icons/sl";
  //summary page descriptions
  export const summary = [
    'Hello and welcome to my website! My name is Shant. My tech journey started in 2017 when I began university. At the time, I was still searching for my academic path. One day, my girlfriend suggested, "Have you considered Computer Science?" Her question ignited a spark of curiosity, and I decided to explore this unfamiliar territory. Little did I know that her simple suggestion would lead me on a transformative journey into the world of coding and problem - solving, shaping my future and passion for technology.',
    "5 years later here I am, Thanks Daphny! ",
    "On to academics, my Coursework mainly covered C, Python programming, embedded systems, networking, and systems information and security. My main areas of expertise are Python, C and I am learning React as well as Javascript, CSS, and HTML. ",
    "In my free time, I enjoy playing and watching basketball (go Clippers!) and videogames.",
  ];
  
  export const projects_ = [
    {
      project: "Personal Website",
      description:
        "I hosted this website on an AWS Lightsail instance using a Virtual Ubuntu OS that has a NGINX web server installed. Domain and certificates are configured using AWS route 53 and Lightsail console. The website itself is made in React, which is composed of Javascript, HTML, and CSS. ",
      iconsData: [
        { icon: <IoLogoReact className="project-logo" />, name: "React" },
        {
          icon: <FaAws className="project-logo" />,
          name: "Lightsail & Route 53",
        },
        {
          icon: <IoLogoJavascript className="project-logo" />,
          name: "JavaScript",
        },
        { icon: <IoLogoCss3 className="project-logo" />, name: "CSS" },
        { icon: <IoLogoHtml5 className="project-logo" />, name: "HTML" },
      ],
      projectIcon: <MdWeb className="project-card__image" />,
      projectSummary:
        "Personal website hosted on AWS lightsail, developed using React as framework alongside Javascript, HTML, CSS",
    },
    {
      project: "Rudimentary IoT Health Monitoring System",
      description:
        "I connected several sensors to an Arduino microcontroller. Then wrote a driver to allow interaction between sensors and the microcontroller. The microcontoller is then uploaded the sensor information to the IoT cloud platform Thingspeak. Then I developed an Android application using Flutter/Dart to display information from cloud platform and store user information",
      iconsData: [
        { icon: <SiArduino className="project-logo" />, name: "Arduino" },
        {
          icon: <FaTemperatureHigh className="project-logo" />,
          name: "Lm35 Body Temperature Sensor",
        },
        {
          icon: <MdOutlineEdgesensorLow className="project-logo" />,
          name: "Pulse Oximeter & Heart Rate Sensor",
        },
        {
          icon: <FaCloudArrowUp className="project-logo" />,
          name: "IoT Cloud Platform Thingspeak",
        },
        {
          icon: <FaAndroid className="project-logo" />,
          name: "Android Application",
        },
        {
          icon: <SiFlutter className="project-logo" />,
          name: "Developed in Flutter",
        },
      ],
      projectIcon: <MdCloudSync className="project-card__image" />,
      projectSummary:
        "IoT Project, sensors connected to a microcontroller, connected to cloud and had an app retrieve the data",
    },
    {
      project: "Syllabi Search Program",
      description:
        "I matched keywords in a chosen PDF document to a pre-determined key words list that then displayed results (i.e. matched keywords) in a readable UI. Some functionality included: enabled users to save and load: previous results, settings that customized UI, able to view results in different graph formats (bar, pie, histogram) as well as in a table",
      iconsData: [
        { icon: <SiPython className="project-logo" />, name: "Python" },
        {
          icon: <SlGraph className="project-logo" />,
          name: "MatplotLib",
        },
        {
          icon: <MdOutlineSplitscreen className="project-logo" />,
          name: "PySimpleGui",
          },
          {
              icon: <FaFilePdf className="project-logo" />,
              name: "PyPDF2 pdf parser",
            },
      ],
      projectIcon: <IoNewspaper className="project-card__image" />,
      projectSummary:
        "Python program used to match keywords in a given dataset, display results in a nice user interface",
    },
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
        "Wrote user guides and security reports on system.",
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
    "Assembly Language",
  ];
  
  export const technologies = [
    "Git",
    "Linux",
    "Windows",
    "Amazon Lightsail",
    "Amazon firebase",
    "VsCode",
    "Ardunio IDE",
    "Linux/Unix Cli",
  ];
  
  export const links = {
    Email: "mailto:shant277@gmail.com",
    LinkedIn: "https://www.linkedin.com/in/shant-sharma-651178255",
    Github: "https://github.com/shant277",
  };
  
  export const pageVariants = {
    initial: {
      opacity: 0,
      x: "-100vw",
      scale: 0.8,
    },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: {
      opacity: 0,
      x: "100vw",
      scale: 0.5,
    },
  };
  
  export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.7,
  };
  
  export const pageStyle = {
    position: "absolute",
  };
  