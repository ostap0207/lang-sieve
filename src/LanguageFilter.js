import R from 'ramda';
import {createReverseIndex} from './ReverseIndex';

const LanguageFilter = (languages, searchableProperties) => {
  const reverseIndex = createReverseIndex(languages, searchableProperties);
  return queries => {
    if (R.isEmpty(queries)) return languages;

    const languageSets = queries.map(query => reverseIndex[query.value]);
    if (R.isEmpty(languageSets)) return [];

    return R.flatten(R.reduce(R.intersection, languageSets[0], languageSets));
  };
};

export default LanguageFilter;
