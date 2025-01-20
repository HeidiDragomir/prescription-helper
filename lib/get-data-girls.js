import fs from 'fs/promises';
import csv from 'csv-parser';

export async function getDataGirls() {
    // const data = await fs.readFile('data/girls.csv', 'utf-8');
    // return data
    fs.createReadStream('data/girls.csv')
    .pipe(csv())
    .on('data', (row) => {
        console.log(row);
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    });
  
}
