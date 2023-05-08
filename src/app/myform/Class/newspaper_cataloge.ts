export class NewspaperCatalogue {
    name: string;
    num: number;
    release_date: string;
    page_num: number;
    articles: string[] = [];

    constructor(name: string, num: number, release_date: string, page_num: number, articles: string[]) {
        this.name = name;
        this.num = num;
        this.release_date = release_date;
        this.page_num = page_num;
        this.articles = articles;
    }
}