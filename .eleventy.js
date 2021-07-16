const { Pattern } = require('./src/_shortcodes/Pattern');

module.exports = function (eleventyConfig) {
  eleventyConfig.addShortcode('Pattern', Pattern);

  return {
    dir: {
      input: 'src',
      output: 'dist',
    },
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  };
};
