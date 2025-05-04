import * as fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    const jsonData = JSON.stringify(updatedContacts, undefined, 2); // з відступами для читабельності
    await fs.writeFile(PATH_DB, jsonData);
  } catch (error) {
    throw new Error(error.message);
  }
};
