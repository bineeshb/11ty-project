const htmlmin = require('html-minifier');
const i18n = require('eleventy-plugin-i18n');
const moment = require('moment');
const translations = require('./src/_data/i18n');

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

  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'en'
    }
  });

  eleventyConfig.addTransform('htmlmin', function (content, outputPath) {
    if (outputPath.endsWith('.html')) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });

      return minified;
    }

    return content;
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
