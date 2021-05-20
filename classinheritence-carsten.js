// # Class inheritance

// 1. Create a base class called `Publication`.

//     - All publications need an identifier field
//     - All publications need an authors field
//     - All publications need a name field
//     - All publications need a content field
//     - All publications need a created field
//     - When a publication is created, save the current date into the created field
//     - All other fields are null by default
//     - All publications need a method that prints out their description (id, name, authors)

// 2. Create a class called "Blogpost" that is a child of Publication

//     - All blogpost have an edited field (given during their creation)
//     - All blogpost have an address field (given during their creation)

// 3. Create a class called "Book" that is a child of Publication

//     - All blogpost have an ISBN field  (given during their creation)
//         (for reference https://en.wikipedia.org/wiki/International_Standard_Book_Number)

// 4. Create a class called "Score" that is a child of Publication

//     - All scores must have a type field (given during their creation)

// 5. Create 3 different blog posts, books and scores and call their description methods.

class Publication {
  constructor(id, author, name, content, created) {
    this.id = id;
    this.author = author;
    this.name = name;
    this.content = content;
    this.created = new Date(created);
  }

  latestContent() {
    console.log(this.id, this.author, this.name, this.content, this.created);
  }
}

class Blogpost extends Publication {
  edited;
  address;
  constructor(id, author, name, content, created, edited, address) {
    super(id, author, name, content, created, edited, address);
    this.edited = this.created;
    this.address = this.created;
  }
  print() {
    console.log(this.edited, this.address);
    return this.latestContent();
  }
}

class ISBN extends Blogpost {
  ISBNnumber;
  constructor(id, author, name, content, created, edited, address, ISBNnumber) {
    super(id, author, name, content, created, edited, address, ISBNnumber);
    this.ISBNnumber = ISBNnumber;
  }
  print() {
    console.log(this.ISBNnumber);
    return this.latestContent();
  }
}

class Score extends ISBN {
  score;
  constructor(
    id,
    author,
    name,
    content,
    created,
    edited,
    address,
    ISBNnumber,
    score
  ) {
    super(
      id,
      author,
      name,
      content,
      created,
      edited,
      address,
      ISBNnumber,
      score
    );
    this.score = this.created;
  }
  print() {
    console.log(this.score);
    return this.latestContent();
  }
}
let newContent1 = new Score(
  001,
  "Frank Schaetzing",
  "Was wenn wir die Welt retten",
  "Sachbuch",
  "May 20, 2021, 02:00:00",
  "978-3-462-00201-0"
);
newContent1.print();

let newContent2 = new Score(
  002,
  "Johann Wolfgang von Goethe",
  "Die Leiden des jungen Werther",
  "Roman",
  "September 29, 1774; 02:00:00"
);
newContent2.print();

let newContent3 = new Score(
  003,
  "Jesus Christus",
  "The Holy Bible",
  "Book of the Books",
  "December 24, 0000; 02:00:00"
);
newContent3.print();
