export interface NewsEntry {
    date: string;
    /** Rendered with set:html so entries can contain links */
    html: string;
}

export const news: NewsEntry[] = [
    {
        date: "Jan. 2026",
        html: 'Our tutorial and survey paper "<a href="https://arxiv.org/abs/2511.08019" target="_blank" rel="noopener noreferrer">Model Predictive Control via Probabilistic Inference</a>" has been published in Annual Reviews in Control.',
    },
    {
        date: "Jun. 2025",
        html: '"GSplatVNM: Point-of-View Synthesis for Visual Navigation Models Using Gaussian Splatting" has been accepted to IEEE/RSJ IROS 2025.',
    },
    {
        date: "Apr. 2025",
        html: 'Awarded JSPS Grant-in-Aid for Research Activity Start-up and selected as a <a href="https://www.t-gex.nagoya-u.ac.jp/en/" target="_blank" rel="noopener noreferrer">T-GEx</a> fellow.',
    },
    {
        date: "Dec. 2024",
        html: 'Joined <a href="https://www.suzlab.mae.nagoya-u.ac.jp/en/" target="_blank" rel="noopener noreferrer">Nagoya University</a> as an Assistant Professor and <a href="https://research.cyberagent.ai/research/activity-understanding/" target="_blank" rel="noopener noreferrer">CyberAgent AI Lab</a> as a cross-appointed Research Scientist.',
    },
    {
        date: "Dec. 2024",
        html: "Received the SICE System Integration Division Young Investigator Award.",
    },
];
