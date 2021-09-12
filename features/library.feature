Feature: Book tracking

    Scenario: Check out a book.
        Given A user wishes to check out a book from a library with these books:
            | Name                      | Author      |
            | Romeo and Juliet          | Shakespeare |
            | The Origin of the Species | Darwin      |
        When They check out a book with a specific name:
            | Name                      |
            | The Origin of the Species |
        Then It should be marked as checked out.
