const glob = require('fast-glob');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const md = require('markdown-it')();

const files = glob.sync('src/**/*.pattern.md');

// Create a Set to hold all of the ids
// This will be used to avoid duplicates.
const ids = new Set();

const allPatterns = files.map((file) => {
  // Remove ".pattern.md" from the file name to get the id
  const id = path.basename(file, '.pattern.md');

  if (ids.has(id)) {
    throw new Error(`Duplicate pattern id found: ${id}`);
  }

  ids.add(id);

  // Read markdown file as a string
  const fileContents = fs.readFileSync(file, 'utf-8');

  // Use gray-matter to parse the frontmatter
  const matterResult = matter(fileContents);

  // Render markdown
  const content = md.render(matterResult.content);

  // Combine the data and content with the id
  return {
    id,
    ...matterResult.data,
    content,
  };
});

module.exports = function () {
  return allPatterns;
};
