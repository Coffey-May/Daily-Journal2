
import EntryListComponent from "./JournalEntryList.js";
import { getEntries } from "./JournalDataProvider.js";
import { JournalFormComponent } from "./JournalForm.js";
import { journalEdit } from "./JournalEdit.js";
import { moodFilter } from "./moodFilter.js";

JournalFormComponent()
getEntries().then(() => EntryListComponent())
journalEdit()
moodFilter()