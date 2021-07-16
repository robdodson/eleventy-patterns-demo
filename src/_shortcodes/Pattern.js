const patterns = require('../_data/patterns')();
const { html } = require('common-tags');

const Pattern = (id) => {
  const patternData = patterns.find((item) => item.id === id);
  let { tags, content } = patternData;

  const tagsMarkup = html`
    <strong>Tags:</strong>
    <ul>
      ${tags.map((tag) => `<li>${tag}</li>`)}
    </ul>
  `;

  content += tagsMarkup;
  return content;
};

module.exports = { Pattern };
