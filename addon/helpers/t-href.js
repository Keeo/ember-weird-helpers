import Ember from 'ember';
import {hrefTo} from 'ember-href-to/helpers/href-to';
const {inject: {service}, String: {htmlSafe}, assert} = Ember;

export default Ember.Helper.extend({
  i18n: service(),

  compute(hrefParams, options) {
    const name = this.parseName(options);
    const href = ` href="${hrefTo(this, ...hrefParams)}"`;
    const title = options.title ? ` title="${options.title}"` : null;
    const classNames = options.class ? ` class="${options.class}"` : null;

    const parts = [
      '<a',
      href,
      title,
      classNames,
      '>',
      name,
      '</a>',
    ];

    return htmlSafe(parts.join(''));
  },

  parseName({t, name}) {
    assert(`Only one of t or name must be present.`, !name !== !t);

    return t ? this.get('i18n').t(t) : name;
  },
});
