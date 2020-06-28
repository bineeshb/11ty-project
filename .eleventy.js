const moment = require('moment');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/assets');

  // date filter (localized)
  eleventyConfig.addNunjucksFilter('date', function (date, format, locale) {
    locale = locale ? locale : 'en';
    moment.locale(locale);
    return moment(date).format(format);
  });

  eleventyConfig.addCollection('posts_en', function (collection) {
    return collection.getFilteredByGlob('./src/en/posts/*.md');
  });

  eleventyConfig.addCollection('posts_hi', function (collection) {
    return collection.getFilteredByGlob('./src/hi/posts/*.md');
  });

  eleventyConfig.addCollection('posts_te', function (collection) {
    return collection.getFilteredByGlob('./src/te/posts/*.md');
  });

  eleventyConfig.addCollection('posts_ta', function (collection) {
    return collection.getFilteredByGlob('./src/ta/posts/*.md');
  });

  eleventyConfig.addCollection('posts_ml', function (collection) {
    return collection.getFilteredByGlob('./src/ml/posts/*.md');
  });

  return {
    passthroughCopy: true,
    markdownTemplateEngine: 'njk',
    templateFormats: ['html', 'md', 'njk'],
    dir: {
      input: 'src',
      output: 'docs',
      include: 'includes'
    }
  };
};
