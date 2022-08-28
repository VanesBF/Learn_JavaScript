export class Book {
    constructor(title, author,description,pages,currentPage,read)
    {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
  } 
 
 
  readBook(page)  
    {
    if(page <1 || page > this.pages)
        return 0;

        if(page > 0 && page < this.pages )
        {
        this.currentPage = page;
        return 1;
        }
        if(page == this.pages )
        {
        this.currentPage = page;
        this.read= true;
        return 1;
        }
    }


}

const livre1 = new Book ("une saison blanche et seche", "Sud-Afrique", "Histoire touchante", 152,10,false); 
const livre2 = new Book ("Madame Bovari", " France","Histoire romantique", 250,68,false);
const livre3 = new Book ("Balafon", "Cameroun","Histoire", 200,95,false);
 
export const books = [livre1,livre2,livre3];



