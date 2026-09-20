export interface NewsEntry {
    date: string;
    /** Rendered with set:html so entries can contain links */
    html: string;
}

export const news: NewsEntry[] = [
    {
        date: "Sep. 2026",
        html: '"From Instruction to Inheritance: Scaling Robot Learning Through Knowledge Circulation" (Kawaharazuka et al.) has been accepted for publication in Advanced Intelligent Systems.',
    },
    {
        date: "Sep. 2026",
        html: '"<a href="https://doi.org/10.1080/01691864.2026.2731664" target="_blank" rel="noopener noreferrer">Adaptive Undulatory Locomotion of Snake-like Robots in Dynamic Viscous Environments via Deep Reinforcement Learning</a>" has been published in Advanced Robotics.',
    },
    {
        date: "Aug. 2026",
        html: 'New preprint "<a href="https://arxiv.org/abs/2608.18672" target="_blank" rel="noopener noreferrer">Orienteering Problem with Uncertain Time-Varying Rewards: Framework and Benchmark for Everyday Service Robotics</a>" is now available on arXiv.',
    },
    {
        date: "May 2026",
        html: 'Selected as a Principal Investigator of the <a href="https://www.jst.go.jp/moonshot/en/news/20260515.html" target="_blank" rel="noopener noreferrer">JST Moonshot R&amp;D Goal 3</a> project "<a href="https://mirai-humanoid.jp/" target="_blank" rel="noopener noreferrer">General-Purpose Autonomous Humanoids Growing through Multi-layered Instruction and Inheritance</a>" (PM: Kento Kawaharazuka).',
    },
    {
        date: "May 2026",
        html: '"Distributed Multi-Vehicle Model Predictive Control with Polygon-aware Collision Avoidance in Constrained Environments" has been accepted to IEEE ITSC 2026.',
    },
    {
        date: "Apr. 2026",
        html: 'New preprint "<a href="https://arxiv.org/abs/2604.07672" target="_blank" rel="noopener noreferrer">Reset-Free Reinforcement Learning for Real-World Agile Driving: An Empirical Study</a>" is now available on arXiv.',
    },
    {
        date: "Jan. 2026",
        html: 'Our tutorial and survey paper "<a href="https://arxiv.org/abs/2511.08019" target="_blank" rel="noopener noreferrer">Model Predictive Control via Probabilistic Inference</a>" has been published in Annual Reviews in Control.',
    },
];
