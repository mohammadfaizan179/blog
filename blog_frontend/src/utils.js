const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');

const countWords = str => str.trim().split(/\s+/).length;

const getDate = str => {
    const date = new Date(str)
    return date
};

export {slugify, countWords, getDate}