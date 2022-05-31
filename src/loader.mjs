import { readFile } from 'node:fs/promises';

class DokfileLoader {
  async load(filePath) {
    return readFile(filePath, 'utf8');
  }
}

export default DokfileLoader;
