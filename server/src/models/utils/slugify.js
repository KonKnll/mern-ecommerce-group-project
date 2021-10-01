const slugify = require('slugify');

const handleSlugs = (schema) => {
  schema.pre('save', function (next) {
    this.slug = slugify(this.name, { lower: true });
    next();
  });
};

module.exports = handleSlugs;
