# ember-weird-helpers

This README outlines the details of collaborating on this Ember addon.

## Installation

`ember install ember-weird-helpers`

## t-href
```hbs
{{t-href 'route/path' model name=(t 'key') class='foo-class' title=(t 'title')}}
{{t-href 'route/path' model t='key' class='foo-class' title=(t 'title')}}

<a href="/route/path/1" class="foo-class" title="Translated title">
  Translated name
</a>
```
