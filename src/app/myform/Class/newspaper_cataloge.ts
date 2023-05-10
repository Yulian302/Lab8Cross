export class NewspaperCatalogue {
    title: string;
    num: number;
    release_date: string;
    page_num: number;
    articles: string[] = [];

    constructor(title: string, num: number, release_date: string, page_num: number, articles: string[]) {
        this.title = title;
        this.num = num;
        this.release_date = release_date;
        this.page_num = page_num;
        this.articles = articles;
    }
}