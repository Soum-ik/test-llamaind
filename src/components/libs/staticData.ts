import icon1 from '../../../public/images/projects/project1.png'
import projectVideo from '../../../public/video/projects.mp4'

const staticData = [
    {
        "title": `Be Part of 
        Our Innovative Journey`,
        "description": "Join a Team That Values Collaboration and Growth: We're Seeking Passionate Individuals Ready to Make a Difference in a Fast-Paced, Innovative Environment. If You Thrive on Teamwork, Adaptability, and Results, Explore Opportunities with Us.",
        "button": "View Open Positions"
    },
    {
        "title": "Our Core Values",
        "core_values": [
            {
                "title": "Accelerated Growth",
                "description": "We create tailored learning paths, provide mentorship, and empower you to set and exceed career goals, accelerating your professional growth."
            },
            {
                "title": "Recognition",
                "description": "We celebrate your contributions and achievements, highlighting your successes to boost motivation and affirm the impact you make on our team."
            },
            {
                "title": "Versatile Experience",
                "description": "We immerse you in diverse projects, encourage cross-domain exploration, and cultivate adaptability, enriching your skills for dynamic growth."
            },
            {
                "title": "Shared Success",
                "description": "We believe in collective success, cultivating a culture where shared goals, teamwork, and mutual support drive achievements that resonate across the team."
            },
            {
                "title": "Supportive Community",
                "description": "We foster collaboration, communication, knowledge sharing, and strong relationships to empower each team member in a supportive environment."
            },
            {
                "title": "Future-Focused",
                "description": "We fuel innovation by involving you in cutting-edge projects, where your work drives our forward-thinking approach and your growth."
            }
        ]
    }
    ,
    {
        "title": "Becoming One of Us",
        "one_of_us": [
            {
                "title": "Innovative",
                "description": "We thrive on fresh ideas, pushing boundaries to create groundbreaking solutions that set us apart as industry leaders."
            },
            {
                "title": "Empathetic",
                "description": "Our empathetic approach allows us to deeply understand user needs, crafting designs that resonate and distinguish us from the rest."
            },
            {
                "title": "Adaptable",
                "description": "Thriving amidst change highlights our flexibility, enabling us to swiftly tackle challenges and solidify our reputation as a resilient and agile team."
            },
            {
                "title": "Collaborative",
                "description": "Diverse perspectives come together in seamless collaboration, fostering a vibrant creative ecosystem that drives us to deliver excellence."
            },
            {
                "title": "Excellent",
                "description": "Striving for excellence defines us, driving us to create extraordinary work that highlights our team's exceptional dedication and skill."
            },
            {
                "title": "Accountable",
                "description": "Ownership builds trust; our dedication to meeting and exceeding expectations enhances our reputation as a reliable and accomplished team."
            }
        ]
    }
]

const openPositios = [
    {
        id: 1,
        positionName: "Back-end Developer",
        location: "Remote",
        type: "Full time",
    },
    {
        id: 6,
        positionName: "Senior Frontend Developer",
        location: "Remote",
        type: "Full time",
    },
    {
        id: 2,
        positionName: "Front-end Developer",
        location: "Remote",
        type: "Full time",
    },
    {
        id: 3,
        positionName: "UX Designer",
        location: "Dhaka, Bangladesh",
        type: "Full time",
    },
    {
        id: 4,
        positionName: "DevOps Engineer",
        location: "Dhaka, Bangladesh",
        type: "Full time",
    },
    {
        id: 5,
        positionName: "Mobile Apps Developer",
        location: "Dhaka, Bangladesh",
        type: "Full time",
    },
];

const leftSideTechs = [
    'Artificial Intelligence', 'Machine Learning', 'Natural Language Processing', 'Computer Vision'
];

const rightSideTechs = [
    'Blockchain', 'Internet of Things', 'Cloud Solutions', 'Augmented & Virtual Reality'
];


const projects = [
    {
        id: '01',
        icon: icon1,
        headings: ["The First Cloud-Based", "Fleet Monetization Platform"],
        status: "(Upcoming Project)",
        des: "Introducing FleetBlox, the revolutionary subscription-based rental platform designed to maximize fleet revenue, enhance operational efficiency, and transform customer experience.",
        video: projectVideo
    },


];

const contents = [
    {
        title: "LlamaMind - Grow with Smart Solutions",
        description: "We innovate at the cutting edge, creating advanced applications that elevate user experiences. Our mission is to transform the app industry through intelligent insights and automation, setting new standards for digital excellence.",
        button: "View Project"
    },
    {
        top: true,
        title: "Empowering Tomorrow's Technology",
        description: "We envision a future where technology seamlessly integrates into everyday life, turning challenges into opportunities and driving progress across all sectors. Our unwavering commitment to excellence and innovation drives us to continuously push the boundaries of what's possible with tech-enhanced applications.",

    },

    {
        top: true,
        title: "Providing Futuristic Solutions",
        description: "Our primary goal is to empower businesses and individuals with intelligent, reliable, and scalable applications that harness the latest technological advancements to fuel growth, enhance decision-making, and create a smarter, more connected world. We are dedicated to making advanced technologies accessible and beneficial to all.",
    },
];

const menuItems = [
    { id: 1, href: '#job-description', label: 'Job Description' },
    { id: 2, href: '#Working-details', label: 'Working details' },
    { id: 3, href: '#Key-Responsibilities', label: 'Key Responsibilities' },
    { id: 4, href: '#Technical-Proficiency', label: 'Technical Proficiency' },
    { id: 5, href: '#Requirements', label: 'Requirements' },
    { id: 6, href: '#Benefits', label: 'Benefits' },
    { id: 7, href: '#Apply', label: 'Apply' },
];

const sections = [
    {
        id: "job-description",
        title: "Job Description",
        content: `We are a startup Canadian company seeking a highly skilled Backend Developer.We are a startup Canadian company seeking a highly skilled Backend Developer`,
    },
    {
        id: "Working-details",
        title: "Working Details",
        content: `
- 09:00 AM - 06:00 PM.
- Sunday to Thursday (5 days a week)
- Friday, Saturday off`,
    },
    {
        id: "Key-Responsibilities",
        title: "Key Responsibilities",
        content: `
- Develop and maintain CI/CD pipelines for automated build, test, and deployment processes.
- Manage and monitor cloud infrastructure and on-premise servers.
- Implement and enforce security best practices and policies.
- Collaborate with development teams to optimize application performance and scalability.
- Troubleshoot and resolve infrastructure and deployment issues.`,
    },
    {
        id: "Technical-Proficiency",
        title: "Technical Proficiency",
        content: `
- Strong knowledge of cloud platforms (AWS, Azure, Google Cloud).
- Experience with containerization and orchestration tools (Docker, Kubernetes).
- Familiarity with configuration management tools (Ansible, Terraform).
- Understanding of networking, security, and system administration.`,
    },
    {
        id: "Requirements",
        title: "Requirements",
        content: `
- Proven experience as a DevOps Engineer or similar role.
- Strong knowledge of cloud platforms (AWS, Azure, Google Cloud).
- Experience with containerization and orchestration tools (Docker, Kubernetes).
- Familiarity with configuration management tools (Ansible, Terraform).
- Understanding of networking, security, and system administration.`,
    },
    {
        id: "Benefits",
        title: "Benefits",
        content: `
- Competitive salary
- Health insurance
- Paid time off
- Professional development opportunities`,
    },
];



export { staticData, openPositios, leftSideTechs, rightSideTechs, projects, contents, menuItems, sections };



