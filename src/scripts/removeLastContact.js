import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Список контактів порожній. Видалення не потрібне.');
      return;
    }

    const removed = contacts.pop(); // видаляємо останній контакт

    await writeContacts(contacts); // зберігаємо оновлений список

    console.log('Останній контакт видалено:', removed);
  } catch (error) {
    console.error(error.message);
  }
};

removeLastContact();
