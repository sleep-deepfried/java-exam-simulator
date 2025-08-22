const fs = require('fs');
const path = require('path');
const os = require('os');
const pdf = require('pdf-parse');
const { fromBuffer } = require('pdf2pic');
const Tesseract = require('tesseract.js');

function splitCode(text) {
  const lines = text.split(/\r?\n/);
  const codeLines = [];
  const textLines = [];
  let inCode = false;

  for (const line of lines) {
    const looksLikeCode = /(;|\{|\}|class |interface |public |private |protected )/.test(line);
    if (looksLikeCode && line.trim()) {
      inCode = true;
    }
    if (inCode) {
      codeLines.push(line);
      if (!line.trim()) {
        inCode = false;
      }
    } else {
      textLines.push(line);
    }
  }

  return {
    text: textLines.join('\n').trim(),
    code: codeLines.join('\n').trim(),
  };
}

async function parseExamDump(pdfPath) {
  const buffer = fs.readFileSync(pdfPath);
  const data = await pdf(buffer);

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'pdf-'));
  const convert = fromBuffer(buffer, {
    density: 200,
    format: 'png',
    savePath: tmpDir,
    saveFilename: 'page',
  });

  let ocrText = '';
  for (let i = 1; i <= data.numpages; i++) {
    const res = await convert(i);
    const imgPath = res.path;
    const { data: { text } } = await Tesseract.recognize(imgPath, 'eng');
    ocrText += '\n' + text;
    fs.unlinkSync(imgPath);
  }
  fs.rmSync(tmpDir, { recursive: true, force: true });

  const combined = `${data.text}\n${ocrText}`;
  return splitCode(combined);
}

if (require.main === module) {
  (async () => {
    const dir = path.resolve(__dirname, '../data/exam-dump');
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf'));
    for (const file of files) {
      const result = await parseExamDump(path.join(dir, file));
      console.log(`Processed ${file}`);
      console.log(result);
    }
  })();
}

module.exports = { parseExamDump, splitCode };
