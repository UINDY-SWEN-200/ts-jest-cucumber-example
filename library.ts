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

  addBook({ name, author }: Partial<IBook>): void {
    if (name && author) {
      this.books.push({ name, author, checkedOut: false })
    }
  }

  findBook(name: string): IBook | undefined {
    return this.books.find((book) => book.name === name)
  }

  checkoutBook(name: string): void {
    const aBook: IBook | undefined = this.findBook(name)
    if (aBook) {
      aBook.checkedOut = true
    }
  }

  isCheckedOut(name: string): boolean {
    let result = false
    const aBook: IBook | undefined = this.findBook(name)
    if (aBook) {
      result = aBook.checkedOut
    }
    return result
  }
}
