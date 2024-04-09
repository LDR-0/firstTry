import fs from 'fs';

const parseFile = (filepath) => {
  try {
    const data = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error parsing file ${filepath}:`, error.message);
    process.exit(1);
  }
};

export default parseFile;
