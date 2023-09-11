import { defineFeature, loadFeature } from "jest-cucumber"
import { ILibrary, IBook, Library } from "../library"

const feature = loadFeature("./features/library.feature")

defineFeature(feature, (test) => {
  let library: ILibrary

  beforeEach(() => {
    library = new Library()
  })

  test("Check out a book.", ({ given, when, then }) => {
    let checkedOutBookName: string // keep in test scope
    given(
      "A user wishes to check out a book from a library with these books:",
      (table) => {
        ;(table as any[]).forEach((row) => {
          library.addBook({ name: row.Name, author: row.Author })
        })
      }
    )

    when("They check out a book with a specific name:", (table) => {
      checkedOutBookName = (table as any[])[0].Name
      library.checkoutBook(checkedOutBookName)
    })

    then("It should be marked as checked out.", () => {
      expect(library.isCheckedOut(checkedOutBookName)).toBe(true)
    })
  })

  test('Try to check out a book that isn\'t present', ({ given, when, then }) => {
    const myBook = "A random book"
    const myAttempt: (name:string) => IBook | null = (name:string) => null

    given('a book you want is not in the library', () => {
      library.addBook({name:"another book", author:"somebody"})
    });

    when('you attempt to check it out', () => {

    });

    then('it throws an error', () => {

    });
  });
})
