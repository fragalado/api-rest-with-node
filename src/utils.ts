import { NewDiaryEntry, Visibility, Weather } from "./types";

/**
 * Parses a comment and returns it as a string.
 *
 * @param {any} comment - The comment to be parsed.
 * @return {string} The parsed comment.
 * @throws {Error} If the comment is not a string.
 */
const parseComment = (comment: any): string => {
  if (!isString(comment)) {
    throw new Error("Incorrect or missing comment");
  }
  return comment;
};

/**
 * Parses a date and returns it as a string.
 *
 * @param {any} date - The date to be parsed.
 * @return {string} The parsed date as a string.
 * @throws {Error} If the date is not a string or is not a valid date.
 */
const parseDate = (date: any): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date");
  }
  return date;
};

/**
 * Parses the given weather value and returns it as a Weather enum value.
 *
 * @param {any} weather - The weather value to be parsed.
 * @return {Weather} The parsed weather value.
 * @throws {Error} If the weather value is not a string or is not a valid Weather enum value.
 */
const parseWeather = (weather: any): Weather => {
  if (!isString(weather) || !isWeather(weather)) {
    throw new Error("Incorrect or missing weather");
  }

  return weather;
};

/**
 * Parses the given visibility and returns it if it is a valid string.
 *
 * @param {any} visibility - The visibility to be parsed.
 * @return {Visibility} The parsed visibility.
 * @throws {Error} If the visibility is not a string or is not a valid visibility.
 */
const parseVisibility = (visibility: any): Visibility => {
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error("Incorrect or missing visibility");
  }

  return visibility;
};

/**
 * Checks if the given value is a string.
 *
 * @param {any} text - The value to check.
 * @return {boolean} Returns true if the value is a string, false otherwise.
 */
const isString = (text: any): boolean => {
  return typeof text === "string" || text instanceof String;
};

/**
 * Checks if the given value is a valid date string.
 *
 * @param {string} date - The date string to be checked.
 * @return {boolean} Returns true if the date string is valid, false otherwise.
 */
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

/**
 * Checks if the given weather value is a valid weather enum value.
 *
 * @param {any} weather - The weather value to check.
 * @return {boolean} Returns true if the weather value is a valid enum value, false otherwise.
 */
const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather);
};

/**
 * Checks if the given visibility is a valid visibility enum value.
 *
 * @param {any} visibility - The visibility value to check.
 * @return {boolean} Returns true if the visibility is a valid enum value, false otherwise.
 */
const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility);
};

/**
 * Converts an object into a new diary entry.
 *
 * @param {any} object - The object containing the diary entry data.
 * @return {NewDiaryEntry} The new diary entry.
 */
const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment),
  };
  return newEntry;
};

export default toNewDiaryEntry;
