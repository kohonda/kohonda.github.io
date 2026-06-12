export interface Publication {
    title: string;
    author: string[];
    booktitle: string;
    volume?: string;
    number?: string;
    pages?: string;
    year?: string;
    pdf?: string;
    doi?: string;
    movie?: string;
    website?: string;
    code?: string;
    slide?: string;
    poster?: string;
    award?: string;
    desc?: string;
    /** Mark as a selected publication shown at the top of the publications page */
    selected?: boolean;
    /** Short venue label override for the badge (e.g. "RA-L"); otherwise derived from booktitle */
    venue?: string;
}
