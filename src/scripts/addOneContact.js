import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts(); // Отримуємо поточний масив контактів з файлу
    const newContact = createFakeContact(); // генеруємо один контакт

    const updatedContacts = [...contacts, newContact];

    return await writeContacts(updatedContacts); // Записуємо оновлений масив назад у файл
  } catch (error) {
    console.error(error.message);
  }
};
addOneContact();
