const perspectiveID = 'events'

export const eventsPropertiesFacetResults =
  ` 
      {
        ?id sf:preferredLanguageLiteral (rdfs:label 'fi' '' ?prefLabel__id ) .
        #?id rdfs:label ?prefLabel__id .
        #FILTER (LANG(?prefLabel__id = 'fi'))
        BIND (?prefLabel__id as ?prefLabel__prefLabel)
        BIND(CONCAT("/${perspectiveID}/page/", REPLACE(STR(?id), "^.*\\\\/(.+)", "$1")) AS ?prefLabel__dataProviderUrl)
      }
      UNION
      {
        ?id crm:P130_shows_features_of ?field__id .
        ?field__id rdfs:label ?field__prefLabel .
      }

`
