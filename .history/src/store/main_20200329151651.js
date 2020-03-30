import { writable } from "svelte/store";
import { collectionData } from "rxfire/firestore";
import { database } from "../firebase.js";
import { of } from "rxjs";

import constants from "./constants.js";

const initialStudents = [
  {
    id: 1,
    nom: "etaba andela",
    prenoms: "lionel stephane",
    age: 26,
    moyenne: 16.5
  },
  {
    id: 2,
    nom: "Marjory",
    prenoms: " Okuneva",
    age: 17,
    moyenne: 12.5
  },
  {
    id: 3,
    nom: "Aric ",
    prenoms: "Macejkovic",
    age: 22,
    moyenne: 11
  },
  {
    id: 4,
    nom: "etaba andela",
    prenoms: "lionel stephane",
    age: 26,
    moyenne: 16.5
  },
  {
    id: 5,
    nom: "shields",
    prenoms: "Jena",
    age: 18,
    moyenne: 15.5
  },
  {
    id: 6,
    nom: "Harman Lima",
    prenoms: "Roberto",
    age: 28,
    moyenne: 13.5
  },
  {
    id: 7,
    nom: "Ledner",
    prenoms: "Garrison",
    age: 16,
    moyenne: 15.5
  },
  {
    id: 8,
    nom: "Stanton",
    prenoms: "Ebba",
    age: 14,
    moyenne: 16.5
  },
  {
    id: 9,
    nom: "Collier",
    prenoms: "Bud",
    age: 120,
    moyenne: 12.5
  },
  {
    id: 10,
    nom: "Kunze",
    prenoms: "Walter",
    age: 15,
    moyenne: 17.5
  }
];

const initialClasses = [
  { nom: "maths", description: "maths", coefficient: 4, professeur: "prof" },
  {
    nom: "anglais",
    description: "anglais",
    coefficient: 2,
    professeur: "prof"
  },
  {
    nom: "français",
    description: "français",
    coefficient: 3,
    professeur: "prof"
  },
  {
    nom: "espagnol",
    description: "espagnol",
    coefficient: 2,
    professeur: "prof"
  },
  {
    nom: "littérature",
    description: "littérature",
    coefficient: 2,
    professeur: "prof"
  },
  {
    nom: "physique",
    description: "physique",
    coefficient: 4,
    professeur: "prof"
  },
  {
    nom: "chimie",
    description: "chimie",
    coefficient: 3,
    professeur: "prof"
  },
  {
    nom: "informatique",
    description: "informatique",
    coefficient: 2,
    professeur: "prof"
  },
  {
    nom: "philosophie",
    description: "philosophie",
    coefficient: 3,
    professeur: "prof"
  },
  {
    nom: "SVT",
    description: "sciences naturelles",
    coefficient: 5,
    professeur: "prof"
  }
];

export const students = writable([]);
// export let students = collectionData(
//   database.collection(constants.STUDENTS_COLLECTION)
// );

// export const students = of(initialStudents);
export const classes = writable(initialClasses);
// export let classes = collectionData(
//   database.collection(constants.CLASSES_COLLECTION)
// );

export const selectedStudentId = writable(1);
export const loading = writable(false);
export const modal = writable(false);



export const studentsStore = {
  subscribe: students.subscribe,

  add: async data => {
    console.log(`adding ${element.nom}`);
    const docRef = await database
      .collection(constants.STUDENTS_COLLECTION)
      .add(data);
    const snapShot = await docRef.get();
    console.log({ added: snapShot.data() });
  },

  getData: () => {
    const snapShots = await database.collection(constants.STUDENTS_COLLECTION).get();
    const docs = docRefs.docs.map(doc => doc.data());
    students.set(docs)

},

  update: async (id, data) => {
    console.log("updating");
  },

  delete: async id => {
    console.log(deleting);
  }
};

export const classesStore = {
  subscribe: classes.subscribe,

  add: async data => {
    console.log(`adding ${element.nom}`);
    const docRef = await database
      .collection(constants.CLASSES_COLLECTION)
      .add(data);

    const snapShot = await docRef.get();
    console.log({ added: snapShot.data() });
  },

  update: async (id, data) => {
    console.log("updating");
  },

  delete: async id => {
    console.log(deleting);
  }
};
