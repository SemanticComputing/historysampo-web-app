import {
  eventPropertiesFacetResults
  // eventPropertiesInstancePage
} from '../sparql_queries/SparqlQueriesEvents'
import { prefixes } from '../sparql_queries/SparqlQueriesPrefixes'

export const eventsPerspectiveConfig = {
  endpoint: {
    url: 'http://ldf.fi/history/sparql',
    prefixes,
    useAuth: false
  },
  facetClass: 'crm:E5_Event',
  paginatedResults: {
    properties: eventPropertiesFacetResults
  },
  instance: {
    properties: eventPropertiesFacetResults,
    relatedInstances: ''
  },
  facets: {
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
    },
    keyword: {
      id: 'keyword',
      facetValueFilter: `
      `,
      labelPath: 'dc:subject/rdfs:label',
      predicate: 'dc:subject',
      facetLabelFilter: 'FILTER(LANG(?prefLabel_) = \'fi\')',
      type: 'list'
    },

  }
}
