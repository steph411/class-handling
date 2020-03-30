import { writable } from "svelte/store";

export const students = writable([]);
export const classes = writable([]);
export const selectedStudentId = writable(undefined);
