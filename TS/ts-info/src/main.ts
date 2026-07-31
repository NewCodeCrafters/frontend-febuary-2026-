import "./style.css";

let level: number = 10;

// level = "Boss";

let heroName: string = "Gideon";
let heroClass: string = "Mage";
let health: number = 120;
let mana: number = 300;

let gold: number = 450;

let isAlive: boolean = true;

console.log(heroName);
console.log(heroClass);
console.log(level);
console.log(health);
console.log(mana);
console.log(gold);
console.log(isAlive);

let xp = 30;
let stamina = 100;

console.log(xp);
console.log(stamina);

let inventory: string[] = ["Sword", "Potion", "Magic Staff"];

console.log(inventory);
// inventory.push(20);

inventory.push("Hat", "Boot", "Coat");

console.log(inventory);

// Tuple
let spawnPosition: [number, number] = [120, 300];
// number[]
// spawnPosition.push(40);

// let coins: number = 250;
// Type inference
let coins = 250;

// coins = "Hey";

// const hero = {
//   name: "Aria",
//   class: "Mage",
//   level: 10,
//   health: 100,
// };

// Type Aliases
type CharacterClass = "Warrior" | "Mage" | "Archer";

type SkillName = "Fireball" | "Heal" | "Teleport" | "Slash";

type Coordinate = {
  x: number;
  y: number;
};
// Type Union
type Weapon = string | null;
type Reward = string | number;
interface Character {
  name: string;
  class: CharacterClass;
  level: number;
  health: number;
  mana: number;
  gold: number;
  position: Coordinate;
  skills: SkillName[];
  weapon?: Weapon;
  reward: Reward;
}
interface Stats {
  health: number;
  mana: number;
}

interface Identity {
  name: string;
  level: number;
}

// Intersections
type NewCharacter = Stats & Identity;
const hero: Character = {
  name: "Hero",
  class: "Mage",
  gold: 300,
  health: 100,
  level: 10,
  mana: 300,
  position: {
    x: 20,
    y: 100,
  },
  skills: ["Fireball", "Heal", "Slash"],
  // weapon: null,
  reward: 20,
};

const warrior: Character = {
  name: "Leon",
  class: "Archer",
  level: 15,
  health: 250,
  mana: 40,
  gold: 90,
  position: {
    x: 300,
    y: 200,
  },
  skills: ["Fireball", "Heal", "Slash"],
  // weapon: "Sword",
  reward: "Magic Sword",
};

const heroes: Character[] = [warrior, hero];

console.log(heroes);

// Assignment solution

type BookGenre = "Fiction" | "Science" | "History" | "Biography" | "Fantasy";
type BookFormat = "Physical" | "Digital";
interface Book {
  id: number;
  title: string;
  author: string;
  genre: BookGenre;
  available: boolean;
}

type MembershipType = "Student" | "Teacher" | "Public";
type Fine = number | null;

interface Person {
  name: string;
  email: string;
}

interface LibraryMember {
  id: number;
  borrowedBooks: Book[];
  type: MembershipType;
  fine: Fine;
}
type Member = Person & LibraryMember;

type TransactionStatus = "Borrowed" | "Returned" | "Overdue";
interface Transaction {
  member: Member;
  book: Book;
  borrowDate: string;
  returnDate: string;
  status: TransactionStatus;
}

const books: Book[] = [
  {
    id: 1,
    title: "The hobbit",
    author: "Unknown",
    available: true,
    genre: "Fiction",
  },
  {
    id: 2,
    title: "Clean code",
    author: "Unknown",
    available: true,
    genre: "Science",
  },
];
const gideon: Member = {
  borrowedBooks: [],
  email: "mail",
  fine: null,
  id: 1,
  name: "Gideon",
  type: "Public",
};

const transactions: Transaction[] = [];

gideon.borrowedBooks.push(books[0]);

books[0].available = false;

transactions.push({
  book: books[0],
  borrowDate: new Date().toDateString(),
  returnDate: "",
  member: gideon,
  status: "Borrowed",
});

books[0].title = "Just testing";
console.log(books);
console.log(gideon);
console.log(transactions);
