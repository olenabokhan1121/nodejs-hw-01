import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
import { faker } from '@faker-js/faker';
export const generateContacts = async (number) => {
  try {
    const contacts = await readContacts(); // Отримуємо поточний масив контактів з файлу
    const fakeContacts = faker.helpers.multiple(createFakeContact, {
      count: number,
    });
    // Генеруємо необхідну кількість фейкових контактів

    const updatedContacts = [...contacts, ...fakeContacts]; // Додаємо нові контакти до існуючих

    return await writeContacts(updatedContacts); // Записуємо оновлений масив назад у файл
  } catch (error) {
    console.error(error.message);
  }
};

generateContacts(3);
