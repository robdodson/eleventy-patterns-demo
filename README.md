# How does this work?

`_data/patterns.js` looks for any "*.pattern.md" files. It parses the markdown
and frontmatter for these files, and stores them in a global data object.

We do a little bit of trickery to cache this data so we can share it with our
`{% Pattern %}` shortcode. Note: One downside to this approach is that you have
to restart the server to view changes to the pattern.

The `{% Pattern %}` shortcode returns the markdown from the pattern, and
manipulates it by appending a tags section. This is really just to demonstrate
how we can combine frontmatter with markdown since Eleventy does not parse
frontmatter for things like `_includes`.

## Hard stuff

- I'm not sure what is the best way to tease out the code blocks and feed them
to a tabs widgets. Because the markdown has already been converted to an
html string, one option might be to parse it with something like cheerio so we
can use html selectors:

```
const css = $('pre.language-css')
```

But cheerio is kinda slow :(

- We're going to have to run everything through Prism ourselves to get syntax
  highlighting.