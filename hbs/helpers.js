const hbs = require ('hbs');

// helpers
hbs.registerHelper ('getYear', () => new Date ().getFullYear ());

hbs.registerHelper ('capitalize', text => {
  let letters = text.split (' ');
  letters.forEach ((word, idx) => {
    letters[idx] =
      word.charAt (0).toUpperCase () + word.slice (1).toLowerCase ();
  });

  return letters.join (' ');
});
