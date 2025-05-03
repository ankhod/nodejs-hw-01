import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      const updatedContacts = contacts.slice(0, -1);
      await writeContacts(updatedContacts);
      console.log('Last contact removed successfully.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
};

removeLastContact();
