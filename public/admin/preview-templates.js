/* global CMS */
(function registerPreviewTemplates() {
  if (typeof CMS === 'undefined') {
    return;
  }

  const h = window.React.createElement;

  function renderValue(value) {
    if (Array.isArray(value)) {
      return h(
        'ul',
        { style: { margin: '6px 0 12px 20px' } },
        value.map((item, idx) => h('li', { key: idx }, renderValue(item)))
      );
    }

    if (value && typeof value === 'object') {
      return h(
        'div',
        { style: { marginBottom: '12px', padding: '8px', border: '1px solid #e5e7eb', borderRadius: '6px' } },
        Object.entries(value).map(([key, val]) =>
          h(
            'div',
            { key, style: { marginBottom: '6px' } },
            h('strong', null, key + ': '),
            typeof val === 'object' ? renderValue(val) : String(val ?? '')
          )
        )
      );
    }

    return String(value ?? '');
  }

  function GenericPreview(props) {
    const data = props.entry.get('data') ? props.entry.get('data').toJS() : {};
    const title = data.page_title || data.title || props.entry.getIn(['data', 'name']) || 'Preview';

    return h(
      'div',
      { style: { padding: '16px', fontFamily: 'Arial, sans-serif', color: '#111827' } },
      h('h2', { style: { marginBottom: '12px' } }, title),
      Object.keys(data).map((key) =>
        h(
          'div',
          { key, style: { marginBottom: '10px' } },
          h('strong', null, key),
          h('div', { style: { marginTop: '4px' } }, renderValue(data[key]))
        )
      )
    );
  }

  [
    'home',
    'call-for-papers',
    'contact',
    'dates',
    'events',
    'program',
    'authors',
    'committee',
    'gallery',
    'registration',
    'authors-call-for-papers',
    'authors-submission',
    'registration-author',
    'registration-delegate',
    'program-schedule',
    'program-keynotes',
    'committee-organizing',
    'committee-national',
    'committee-international',
    'gallery-2021',
    'gallery-2022',
    'gallery-2023'
  ].forEach((templateName) => {
    CMS.registerPreviewTemplate(templateName, GenericPreview);
  });
})();
