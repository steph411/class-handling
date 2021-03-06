import { writable } from "svelte/store";

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

export const students = writable(initialStudents);
export const classes = writable(initialClasses);
export const selectedStudentId = writable(1);
export const loading = writable(false);
export const modal = writable(false);



const StudentStore = {

    subscribe: students.subscribe,

    add: (data) => {
          console.log(`adding ${element.nom}`);
          const docRef = await database.collection("students").add( data
            );

          const snapShot = await docRef.get();
          console.log(`Added: ${snapShot.data().nom}`);
          
        
    },

    update: (id, data) => {
        console.log("updating")
    },

    delete: (id) => {
        console.log(deleting)
    }

}


const classesStore = {

    subscribe: classes.subscribe,

    add: (data) => {
          console.log(`adding ${element.nom}`);
          const docRef = await database.collection("classes").add( data
            );

          const snapShot = await docRef.get();
          console.log(`Added: ${snapShot.data().nom}`);

        
    },

    update: (id, data) => {
        console.log("updating")
    },

    delete: (id) => {
        console.log(deleting)
    }

}