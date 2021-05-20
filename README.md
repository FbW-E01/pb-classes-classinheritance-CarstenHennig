# Class inheritance

1. Create a base class called `Publication`.

    - All publications need an identifier field
    - All publications need an authors field
    - All publications need a name field
    - All publications need a content field
    - All publications need a created field
    - When a publication is created, save the current date into the created field
    - All other fields are null by default
    - All publications need a method that prints out their description (id, name, authors)

2. Create a class called "Blogpost" that is a child of Publication

    - All blogpost have an edited field (given during their creation)
    - All blogpost have an address field (given during their creation)

3. Create a class called "Book" that is a child of Publication

    - All blogpost have an ISBN field  (given during their creation)
        (for reference https://en.wikipedia.org/wiki/International_Standard_Book_Number)

4. Create a class called "Score" that is a child of Publication

    - All scores must have a type field (given during their creation)

5. Create 3 different blog posts, books and scores and call their description methods.
