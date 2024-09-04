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

export { staticData, openPositios, leftSideTechs, rightSideTechs, projects };


