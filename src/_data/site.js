module.exports = {
  baseHref: process.env.NODE_ENV === 'production' ? '/11ty-project/' : '/',
  languages: [
    {
      code: 'en',
      label: 'English (EN)'
    },
    {
      code: 'hi',
      label: 'हिन्दी (HI)'
    },
    {
      code: 'te',
      label: 'తెలుగు (TE)'
    },
    {
      code: 'ta',
      label: 'தமிழ் (TA)'
    },
    {
      code: 'ml',
      label: 'മലയാളം (ML)'
    }
  ]
};
