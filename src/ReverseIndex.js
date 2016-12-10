import R from 'ramda';

export const createReverseIndex = (languages, searchableProperties) => {
  let index = {};
  R.forEach(language => {
    R.forEach(
      value => {
        if (!index[value]) index[value] = [];
        index[value] = R.concat(index[value], [language]);
      },
      R.uniq(R.flatten(R.values(R.pick(searchableProperties, language))))
    )
  })(languages);
  return index;
};
