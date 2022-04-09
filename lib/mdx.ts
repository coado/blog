import dayjs from 'dayjs';
import type { Articles } from '../types/types';


export const sortArticlesByDate = (articles: Articles): Articles => {
    return articles.sort((articleA, articleB) => {
        const articleDateA = dayjs(articleA.date, 'DD-MM-YYYY')
        const articleDateB = dayjs(articleB.date, 'DD-MM-YYYY')
        return articleDateA.isBefore(articleDateB) ? 1 : -1
    })
}