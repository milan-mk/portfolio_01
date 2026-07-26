import { Code2, BarChart3, Sparkles, Brain, Wrench, Terminal } from "lucide-react";
import type { ReactNode } from "react";
import {
    SiPython, SiCplusplus, SiMysql, SiPandas, SiNumpy,
    SiPlotly, SiJupyter, SiGooglecolab, SiHtml5, SiCss,
    SiJavascript, SiGit, SiGithub, SiLangchain, SiOpenjdk,
} from "react-icons/si";
import {Icon} from "@iconify/react";


interface skills {
    title: string;
    icon?: ReactNode;
}

interface subgroup {
    label: string;
    skill: skills[];
}

interface skillData {
    title: string;
    icon?: ReactNode;
    groups: subgroup[];
}

const categories: skillData[] = [
    {
        title: "Programming",
        icon: <Code2 size={20} />,
        groups: [
            {
                label: "CORE LANGUAGES",
                skill: [
                    { title: "JAVA", icon: <Icon icon="devicon:java" width={18} height={18} /> },
                    { title: "PYTHON", icon: <Icon icon="catppuccin:python" width={18} height={18} /> },
                ]
            },
            {
                label:"DATA & QUERY",
                skill:[
                    {title:"SQL", icon: <Icon icon="logos:mysql" width={18} height={18} />},
                ]
            },

        ]
    },
    {
        title: "Data Science",
        icon: <BarChart3 size={20} />,
        groups: [
            {
                label: "DATA PROCESSING",
                skill: [
                    { title: "Pandas", icon: <Icon icon="devicon:pandas" width={18} height={18} /> },
                    { title: "Numpy", icon: <Icon icon="devicon:numpy" width={18} height={18} /> },
                ]
            },
            {
                label: "VISUALIZAION",
                skill: [
                    { title: "Matplotlib", icon: <Icon icon="devicon:matplotlib" width={18} height={18} /> },
                    { title: "Seaborn", icon: <Icon icon="devicon:seaborn" width={18} height={18} /> },
                ]
            },
        ]
    },
    {
        title: "Machine Learning",
        icon: <Icon icon="carbon:machine-learning-model" width={18} height={18} />,
        groups: [
            {
                label: "CORE",
                skill: [
                    { title: "Scikit-learn", icon:<Icon icon="devicon:scikitlearn" width={18} height={18} /> },
                    { title: "Predictive Modeling", icon:<Icon icon="iconoir:learning" width={18} height={18} /> }
                ]
            }
        ]
    },
    {
        title: "Development",
        icon: <Icon icon="iconoir:learning" width={18} height={18} />,
        groups: [
            {
                label: "FRONTEND",
                skill: [
                    { title: "HTML", icon:<Icon icon="logos:html-5" width={18} height={18} /> },
                    { title: "TailwindCSS",icon:<Icon icon="devicon:tailwindcss" width={18} height={18} />  },
                    { title: "JavaScript", icon: <Icon icon="catppuccin:javascript" width={18} height={18} /> },
                ]
            },
            {
                label: "BACKEND",
                skill: [
                    { title: "FastApi", icon: <Icon icon="logos:fastapi-icon" width={18} height={18} /> },
                    { title: "Flask", icon: <Icon icon="marketeq:flask-3" width={18} height={18} /> },
                    { title: "Express", icon: <Icon icon="griddy-icons:expressjs" width={18} height={18} /> },
                ]
            }
        ]
    },
]


function Skill() {
    return <>
        <section id="skills" className="min-h-screen px-6 py-24 font-bold">
            <div className="w-full max-w-7xl mx-auto">
                <p className="text-sm tracking-wider text-[#2929a2] mb-3">SKILLS</p>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
                    TOOLS & TECHNOLOGIES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 tracking-wider">
                    {categories.map((cat) => (
                        <div
                            key={cat.title}
                            className="border card border-white/10 rounded-2xl card p-6 bg-white/3 hover:bg-white/6"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-accent/10 text-accent rounded-lg p-2.5">
                                    {cat.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-accent">{cat.title}</h3>
                            </div>

                            {cat.groups.map((group) => (
                                <div key={group.label} className="mb-5 last:mb-0">
                                    <p className="text-xs text-gray-500 tracking-widest mb-3">
                                        {group.label}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {group.skill.map((skill, sIndex) => (
                                            <span
                                                key={sIndex}
                                                className="flex items-center gap-2 text-sm text-white border border-white/10 rounded-full px-4 py-2 bg-white/5"
                                            >
                                                {skill.icon}
                                                {skill.title}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>

}
export default Skill;