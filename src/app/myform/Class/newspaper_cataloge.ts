export class NewspaperCatalogue{
    name:string;
    num:number;
    release_date:string;
    page_num:number;
    constructor(name:string, num:number, release_date:string, page_num:number)
    {
        this.name = name;
        this.num = num;
        this.release_date = release_date;
        this.page_num = page_num;
    }
}