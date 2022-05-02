
export type Frontmatter = {
    title: string;
    date: string;
    categories: string;
    isPublished: boolean;
    seoExcerpt: string;
    difficulty: 'basic' | 'intermediate' | 'advanced'
}

export type Article = Frontmatter & {
    slug: string;
    readTime: number;
}

export type Articles = Article[]

export type Frontmatters = Frontmatter[]

export type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type EmphasizeTypes = 'prohibit' | 'warning' | 'important';