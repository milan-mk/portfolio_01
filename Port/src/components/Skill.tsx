import { Code2, BarChart3, Sparkles, Brain, Wrench, Terminal } from "lucide-react";
import type { ReactNode } from "react";
import {
    SiPython, SiCplusplus, SiMysql, SiPandas, SiNumpy,
    SiPlotly, SiJupyter, SiGooglecolab, SiHtml5, SiCss,
    SiJavascript, SiGit, SiGithub, SiLangchain, SiOpenjdk,
} from "react-icons/si";


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
                    { title: "JAVA", icon: <SiOpenjdk color="#ED8B00" size={18} /> },
                    { title: "PYTHON", icon: <SiPython color="#3776AB" size={18} /> },
                ]
            },
            {
                label:"Data & Query",
                skill:[
                    {title:"SQL", icon:<SiMysql color="#4479A1" size={18} />},
                ]
            },

        ]
    },
    {
        title: "Data Science",
        icon: <BarChart3 size={20} />,
        groups: [
            {
                label: "Data Processing",
                skill: [
                    { title: "Pandas", icon: <SiPandas /> },
                    { title: "Numpy", icon: <SiNumpy /> },
                ]
            },
            {
                label: "Visualization",
                skill: [
                    { title: "Matplotlib", icon: <SiPlotly size={18} /> },
                    { title: "Seaborn", icon: <SiPlotly size={18} /> },
                ]
            },
        ]
    },
    {
        title: "Machine Learning",
        icon: <Sparkles size={20} />,
        groups: [
            {
                label: "Core",
                skill: [
                    { title: "Scikit-learn", icon: <SiPython /> },
                    { title: "Predictive Modeling", icon: <SiPython /> }
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
                            className="border border-white/10 rounded-2xl p-6 bg-white/3 hover:bg-white/6"
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
                                                className="flex items-center gap-2 text-sm text-gray-200 border border-white/10 rounded-full px-4 py-2 bg-white/5"
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