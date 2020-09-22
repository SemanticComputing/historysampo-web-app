const perspectiveID = 'events'

export const eventPropertiesFacetResults =
  `
      {
        ?id sf:preferredLanguageLiteral (rdfs:label 'fi' '' ?prefLabel__id ) .
        #?id rdfs:label ?prefLabel__id .
        #FILTER (LANG(?prefLabel__id = 'fi'))
        BIND (?prefLabel__id as ?prefLabel__prefLabel)
        BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
        BIND(?id as ?uri__id)
        BIND(?id as ?uri__dataProviderUrl)
        BIND(?id as ?uri__prefLabel)
      }
      UNION
      {
        ?id crm:P130_shows_features_of ?field__id .
        ?field__id rdfs:label ?field__prefLabel .
      }
      UNION
      {
        ?id dc:Subject ?keyword__id .
        ?keyword__id rdfs:label ?keyword__prefLabel .
      }

`
