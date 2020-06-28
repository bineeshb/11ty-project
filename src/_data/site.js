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
  ],
  en: {
    labelHome: 'Home',
    labelPosts: 'Posts',
    labelAbout: 'About',
    labelPostedOn: 'Posted On',
    labelUpdatedOn: 'Updated On',
    labelSearch: 'Search'
  },
  hi: {
    labelHome: 'मुखपृष्ठ',
    labelPosts: 'पोस्ट',
    labelAbout: 'के बारे में',
    labelPostedOn: 'पर प्रविष्ट किया',
    labelUpdatedOn: 'संशोधित किया गया',
    labelSearch: 'खोज'
  },
  te: {
    labelHome: 'హోమ్పేజీ',
    labelPosts: 'పోస్ట్లు',
    labelAbout: 'గురించి',
    labelPostedOn: 'పోస్ట్ చేయబడింది',
    labelUpdatedOn: 'నవీకరించబడింది',
    labelSearch: 'వెతకండి'
  },
  ta: {
    labelHome: 'முகப்புப்பக்கம்',
    labelPosts: 'இடுகைகள்',
    labelAbout: 'பற்றி',
    labelPostedOn: 'அனுப்பப்பட்டது',
    labelUpdatedOn: 'புதுப்பிக்கப்பட்டது',
    labelSearch: 'தேடல்'
  },
  ml: {
    labelHome: 'ഹോം‌പേജ്',
    labelPosts: 'പോസ്റ്റുകൾ',
    labelAbout: 'കുറിച്ച്',
    labelPostedOn: 'പോസ്റ്റ് ചെയ്തത്',
    labelUpdatedOn: 'അപ്‌ഡേറ്റുചെയ്‌തു',
    labelSearch: 'തിരയുക'
  }
};
