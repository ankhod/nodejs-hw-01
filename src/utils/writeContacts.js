import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};

export default writeContacts;
