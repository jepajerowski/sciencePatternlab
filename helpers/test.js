module.exports = function(Handlebars) {
  Handlebars.registerHelper('test', function() {
    return 'This is a test helper';
  });

  Handlebars.registerHelper('toPx', function(spacerRem) {
    return spacerRem * 16;
  });
};