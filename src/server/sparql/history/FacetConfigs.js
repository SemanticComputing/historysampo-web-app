export const endpoint = 'http://ldf.fi/history/sparql'
// export const endpoint = 'http://localhost:3050/ds/sparql';

export const endpointUseAuth = false

const invalidTransferOfCustodyTimespans = `
        <http://ldf.fi/mmm/time/bibale_element_478356>,
        <http://ldf.fi/mmm/time/bibale_element_503431>,
        <http://ldf.fi/mmm/time/bibale_element_515064>,
        <http://ldf.fi/mmm/time/bibale_element_515527>,
        <http://ldf.fi/mmm/time/bibale_element_524327>,
        <http://ldf.fi/mmm/time/bibale_element_524686>,
        <http://ldf.fi/mmm/time/bibale_element_526456>,
        <http://ldf.fi/mmm/time/bibale_element_527378>,
        <http://ldf.fi/mmm/time/bibale_element_528274>,
        <http://ldf.fi/mmm/time/bibale_element_530550>,
        <http://ldf.fi/mmm/time/bibale_element_456150>,
        <http://ldf.fi/mmm/time/bibale_element_466496>,
        <http://ldf.fi/mmm/time/bibale_element_471075>
`

const invalidActors = `
        <http://ldf.fi/mmm/actor/sdbm_names/>
`

const invalidLanguages = `
        <http://ldf.fi/mmm/language/sdbm_languages/>
`

const invalidMaterials = `
        <http://ldf.fi/mmm/material/>
`

export const facetConfigs = {
  events: {
    facetClass: 'crm:E5_Event',
    prefLabel: {
      id: 'prefLabel',
      labelPath: 'rdfs:label',
      textQueryPredicate: '', // empty for querying the facetClass
      textQueryProperty: 'rdfs:label', // limit only to prefLabels
      type: 'text'
    },
    field: {
      id: 'field',
      facetValueFilter: `
      `,
      labelPath: 'crm:P130_shows_features_of/rdfs:label',
      predicate: 'crm:P130_shows_features_of',
      type: 'list'
    }
  }
}
