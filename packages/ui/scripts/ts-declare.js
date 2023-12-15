const fs = require('fs');
const path = require('path');

function findDeclarationFiles(directory, extension = '.d.ts') {
    const results = [];

    function traverse(currentDir) {
        const items = fs.readdirSync(currentDir);

        for (const item of items) {
            const itemPath = path.join(currentDir, item);
            const stats = fs.statSync(itemPath);
            if (stats.isDirectory()) {
                traverse(itemPath);
            } else if (stats.isFile() && /\.d\.ts$/i.test(item)) {
                results.push(itemPath);
            }
        }
    }

    traverse(directory);
    return results;
}

const clearBuildDirs = (path, current = false) => path.replace('dist/', current ? '' : './')

function generateExportStatements(files, targetFile) {
    const filtered = files.filter(f => clearBuildDirs(f) !== clearBuildDirs(targetFile, true))
    const exportStatements = filtered.map(file => `export type * from '${clearBuildDirs(file.replace(/\\/g, '/'))}';`)
    const uniqueStatements = [...new Set(exportStatements)]
    return uniqueStatements.join('\n');
}

function createExportFile(targetFile, exportStatements) {
    const content = `${exportStatements}\n`;
    fs.writeFileSync(targetFile, content, 'utf-8');
}

const args = process.argv.slice(2);

const startDirectoryIndex = args.indexOf('--dir');
const targetFileIndex = args.indexOf('--target');

if (startDirectoryIndex === -1 || targetFileIndex === -1) {
    console.error('Kullanım: node ./scripts/ts-declare.js --dir <başlangıç dizini> --target <hedef dosya>');
    process.exit(1);
}


const startDirectory = args[startDirectoryIndex + 1];
const targetFile = args[targetFileIndex + 1];

const declarationFiles = findDeclarationFiles(startDirectory);
const exportStatements = generateExportStatements(declarationFiles, targetFile);
createExportFile(targetFile, exportStatements);

console.log(`Export statements generated and saved to ${targetFile}`);
