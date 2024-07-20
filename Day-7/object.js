
const book = {
    title:"meluha",
    author:"Aditya",
    year:1997,

}

console.log(book)
console.log(book.title)
console.log(book.author)
console.log(book.year)
console.log(book['title'])
console.log(book['author'])
console.log(book['year'])

//object methods

const book1 = {
    title:"meluha",
    author:"Aditya",
    year:1997,
    func : function f1(){
        return {title: this.title, author: this.author};
    }
}

console.log(book1.func());

const book2 = {
    title:"meluha",
    author:"Aditya",
    year:1997,
    func : function f1(new_Year){

        this.year = new_Year
        return this.year;
    }
}

console.log(book2.func(2001));



const library = {
    name: 'Aditya Gupta',
    books: {
        book1:{
            title:"meluha",
            author:"me",
            func: function year(){
                return `${this.title}. ${this.author}`
            }
    },
        book2:{
            title:"love",
            author:"me",
            func: function year(){
                return `${this.title}. ${this.author}`
            }
    },
        book3:{
            title:"Scams",
            author:"me",
            func: function year(){
                return `${this.title}. ${this.author}`
            }
    }
    }

}

console.log(library.books)
console.log(library.books.book1.title)
console.log(library.books.book2.title)
console.log(library.books.book3.title)



for (let key in library){
    console.log(`${key} : ${library[key]}`)
}

for (let key in library.books){
    console.log(`${key} : ${library.books[key].func()}`)
}



console.log("---------------------------------------------")
const keys = Object.keys(library)
const value = Object.values(library)

console.log(keys)
console.log(value)


