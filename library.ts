export interface IBook {
    name: string
    author: string
    checkedOut: boolean
}

export interface ILibrary {
    addBook({ name, author }: Partial<IBook>): void
    checkoutBook(name: string): void
    findBook(name: string): IBook | undefined
    isCheckedOut(name: string): boolean
}

export class Library implements ILibrary {
    private books: IBook[] = []
    public static NO_SUCH_BOOK = 'No Such Book'
    public static BOOK_CHECKED_OUT = 'Book Checked Out'

    addBook({ name, author }: Partial<IBook>): void {
        if (name && author) {
            this.books.push({ name, author, checkedOut: false })
        }
    }

    findBook(name: string): IBook | undefined {
        return this.books.find((book) => book.name === name)
    }

    checkoutBook(name: string): void {
        // Check out a book with the name "name".
        // if the book doesn't exist, throw an exception
        const aBook: IBook | undefined = this.findBook(name)
        if (aBook) {
            if (aBook.checkedOut) {
                throw new Error(Library.BOOK_CHECKED_OUT)
            } else {
                aBook.checkedOut = true
            }
        } else {
            throw new Error(Library.NO_SUCH_BOOK)
        }
    }

    isCheckedOut(name: string): boolean {
        let result = false
        const aBook: IBook | undefined = this.findBook(name)
        if (aBook) {
            result = aBook.checkedOut
        } else {
            throw new Error(Library.NO_SUCH_BOOK)
        }
        return result
    }
}
