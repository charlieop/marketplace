export function generateRandomProduct() {
  const product = {
    name:
      "New Product Type-" +
      letter[randInt(0, letter.length - 1)] +
      letter[randInt(0, letter.length - 1)],
    price: randInt(100, 1000),
    code:
      "testCode-" +
      letter[randInt(0, letter.length - 1)] +
      letter[randInt(0, letter.length - 1)] +
      letter[randInt(0, letter.length - 1)],
    version: "1." + Math.random().toFixed(3),
    dimension:
      randInt(10, 100) + "x" + randInt(10, 100) + "x" + randInt(10, 100),
    description:
      "This is a new product: " + generateRandomParagraph(randInt(20, 40)),
    requirement:
      "This is a requirement: " + generateRandomParagraph(randInt(10, 20)),
    remark: "This is a remark: " + generateRandomParagraph(randInt(15, 30)),
  };
  return product;
}

function generateRandomWords() {
  const words = [
    "lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "sed",
    "do",
    "eiusmod",
    "tempor",
    "incididunt",
    "ut",
    "labore",
    "et",
    "dolore",
    "magna",
    "aliqua",
    "ut",
    "enim",
    "ad",
    "minim",
    "veniam",
    "quis",
    "nostrud",
    "exercitation",
    "ullamco",
    "laboris",
    "nisi",
    "ut",
    "aliquip",
    "ex",
    "ea",
    "commodo",
    "consequat",
    "duis",
    "aute",
    "irure",
    "dolor",
    "in",
    "reprehenderit",
    "in",
    "voluptate",
    "velit",
    "esse",
    "cillum",
    "dolore",
    "eu",
    "fugiat",
    "nulla",
    "pariatur",
    "excepteur",
    "sint",
    "occaecat",
    "cupidatat",
    "non",
    "proident",
    "sunt",
    "in",
    "culpa",
    "qui",
    "officia",
    "deserunt",
    "mollit",
    "anim",
    "id",
    "est",
    "laborum",
  ];
  return words[Math.floor(Math.random() * words.length)];
}

function generateRandomParagraph(words: number) {
  let paragraph = "";
  for (let i = 0; i < words; i++) {
    paragraph += generateRandomWords() + " ";
  }
  return paragraph;
}

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const letter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
