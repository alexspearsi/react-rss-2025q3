
import { saveAs } from 'file-saver';
import { Character } from '../../../types/character';

export async function downloadCSV(characters: Character[]) {
  const headers = ['Name', 'URL', 'Status'];
  const rows = characters.map(character => [character.name, character.url, character.status]);
  const csvContent = [headers, ...rows].map(row => row.join(' - ')).join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const csvName = `${characters.length}_items.csv`;

  saveAs(blob, csvName);
}