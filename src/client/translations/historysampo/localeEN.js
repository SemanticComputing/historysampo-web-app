export default {
  languageLabel: 'English',
  html: {
    title: 'HistorySampo – Finnish History on the Semantic Web',
    description: 'HistorySampo is a semantic portal for searching and browsing historical events based on times, places, types, themes and keywords.'
  },
  appTitle: {
    short: 'HistorySampo',
    mobile: 'HS',
    long: 'HistorySampo',
    subheading: `
      Finnish History on the Semantic Web
    `
  },
  selectPerspective: 'Select a perspective to search and browse the knowledge graph:',
  mainPageImageLicence: 'Images used under license from Shutterstock.com',
  topBar: {
    feedback: 'feedback',
    info: {
      info: 'Info',
      blog: 'Project blog',
      blogUrl: 'https://seco.cs.aalto.fi',
      aboutThePortal: 'About the Portal'
    },
    searchBarPlaceHolder: 'Search all content',
    searchBarPlaceHolderShort: 'Search',
    instructions: 'instructions'
  },
  facetBar: {
    results: 'Results',
    filters: 'Filters',
    activeFilters: 'Active filters:',
    removeAllFilters: 'Remove all',
    narrowDownBy: 'Narrow down by',
    filterOptions: 'Filter options',
    filterByName: 'Filter by name',
    filterByBoundingBox: 'Filter by bounding box',
    selectionOptions: 'Selection options',
    selectAlsoSubconcepts: 'Automatically select all subconcepts',
    doNotSelectSubconcepts: 'Do not select subconcepts',
    sortingOptions: 'Sorting options',
    sortAlphabetically: 'Sort alphabetically',
    sortByNumberOfSearchResults: 'Sort by number of search results',
    useDisjunction: 'Use logical OR between selections',
    useConjuction: 'Use logical AND between selections',
    minYear: 'Min year',
    maxYear: 'Max year',
    min: 'Min',
    max: 'Max',
    facetSearchFieldPlaceholder: 'Search...',
    applyFacetSelection: 'apply'
  },
  tabs: {
    table: 'table',
    map: 'map',
    production_places: 'production places',
    production_places_heatmap: 'production heatmap',
    last_known_locations: 'last known locations',
    migrations: 'migrations',
    network: 'network',
    export: 'export',
    production_dates: 'production dates',
    event_dates: 'event dates',
    map_clusters: 'clustered map',
    map_markers: 'map',
    heatmap: 'heatmap',
    statistics: 'statistics',
    download: 'download'
  },
  table: {
    rowsPerPage: 'Rows per page',
    of: 'of'
  },
  lineChart: {
    productionCount: 'Production',
    transferCount: 'Transfer of custody',
    observationCount: 'Observation'
  },
  exportToYasgui: 'open the result table query in yasgui sparql editor',
  openInLinkedDataBrowser: 'open in linked data browser',
  resultsAsCSV: 'download the search results as a CSV table',
  facets: {
    dateFacet: {
      invalidDate: 'Epäkelpo päivämäärä.',
      toBeforeFrom: 'Alkupäivämäärän täytyy olla ennen loppupäivämäärää.',
      minDate: 'Aikaisin sallittu päivämäärä on {minDate}',
      maxDate: 'Myöhäisin sallittu päivämäärä on {maxDate}',
      cancel: 'Peruuta',
      fromLabel: 'Alku',
      toLabel: 'Loppu'
    },
    textFacet: {
      inputLabel: 'Etsi nimellä'
    }
  },
  leafletMap: {
    basemaps: {
      mapbox: {
        'light-v10': 'Mapbox Light'
      },
      googleRoadmap: 'Google Maps',
      topographicalMapNLS: 'Topographical map (National Land Survey of Finland)',
      backgroundMapNLS: 'Background map (National Land Survey of Finland)'
    },
    externalLayers: {
      arkeologiset_kohteet_alue: 'Register of Archaeological Sites, areas',
      arkeologiset_kohteet_piste: 'Register of Archaeological Sites, points',
      karelianMaps: 'Karelian maps, 1:100 000 topographic (SeCo)',
      senateAtlas: 'Senate atlas, 1:21 000 topographic (SeCo)',
      'kotus:pitajat': 'Finnish parishes in 1938 (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueet': 'Dialectical regions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-sms-alueosat': 'Dialectical subregions in Finland (Institute for the Languages of Finland)',
      'kotus:rajat-lansi-ita': 'Border between western and eastern dialects in Finland (Institute for the Languages of Finland)'
    },
    mapModeButtons: {
      markers: 'Markers',
      heatmap: 'Heatmap'
    },
    wrongZoomLevel: 'The map zoom level has to at least 11',
    wrongZoomLevelFHA: 'The map zoom level has to be at least 13 in order to show this layer',
    tooManyResults: 'More than 3000 results, please use clustered map or heatmap'
  },
  instancePageGeneral: {
    introduction: `
      <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
        [ instructions here]
      </p>
    `
  },
  perspectives: {
    places: {
      label: 'Places',
      facetResultsType: 'places',
      shortDescription: 'Historical places'
    },
    people: {
      label: 'People',
      facetResultsType: 'people',
      shortDescription: 'Historical people'
    },
    periods: {
      label: 'Periods',
      facetResultsType: 'periods',
      shortDescription: 'Historical periods'
    },
    events: {
      label: 'Events',
      facetResultsType: 'events',
      shortDescription: 'Historical events',
      longDescription: `
        <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
          [ instructions here]
        </p>
        <ul class="MuiTypography-root MuiTypography-body1">
          <li>
            <strong>TABLE</STRONG>
          </li>
          <li>
            <strong>MAP</STRONG> 
          </li>
          <li>
            <strong>...</strong>
          </li>
        </ul>
      `,
      instancePage: {
        label: 'Event',
        description: `
        `
      },
      properties: {
        uri: {
          label: 'URI',
          description: 'Uniform Resource Identifier'
        },
        prefLabel: {
          label: 'Label',
          description: 'A short label describing the manuscript.'
        },
        field: {
          label: 'Field',
          description: 'A field of history'
        },
        keyword: {
          label: 'Subject',
          description: 'Subjectmatter keyword'
        },
        timespan: {
          label: 'Time',
          description: 'Time of the event'
        },
        description: {
          label: 'Kuvaus',
          description: 'Tapahtuman kuvaus'
        }
      }
    }
  },
  aboutThePortalPartOne: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      About the Portal
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      
    </p>
  `,
  instructions: `
    <h1 class="MuiTypography-root MuiTypography-h2 MuiTypography-gutterBottom">
      Instructions
    </h1>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The search functionality of the ... portal is based on the
      <a href="https://doi.org/10.2200/S00190ED1V01Y200904ICR005" target='_blank' rel='noopener noreferrer'>
      faceted search</a> paradigm. By default each perspective displays
      all results from the corresponding class (Manuscripts, Works, Events, Actors, or Places).
      This default result set can be narrowed down by using the filters on the left.
    </p>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using a single filter
    </h2>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Selecting values within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      All possible values for a filter are displayed either as a list or as a hierarchical
      tree structure (if available). The number of results is shown in brackets for each value.
      Once a value is selected, the results are automatically updated. To prevent further
      selections that do not return any results, also the possible values for all
      other filters are updated at the same time.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Multiple values can be selected within a single filter. Selecting multiple values
      generates results that contain any of the selected values. For example, selecting
      both <i>Saint Augustine</i> and <i>Saint Jerome</i> as an Author returns results that
      include either <i>Saint Augustine</i> <strong>OR</strong> <i>Saint Jerome</i> as an Author.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Selected values of a filter appear in the Active filters section at the top of the list
      of filters. To deselect a filter, click the X mark next to it within the Active filters
      section. You can also deselect a filter value by unchecking the checkmark in the
      filter’s value list. The Active filters section only appears if there are filter
      values currently selected.
    </p>

    <h3 class="MuiTypography-root MuiTypography-h6 MuiTypography-gutterBottom">
      Searching within a filter
    </h3>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Search within a filter by using the search field at the top of each filter.
      All possible values of a filter remain visible at all times. The values of
      the filter that match the search term are indicated by a purple underline.
    </p>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      Steps for searching within filters:
    </p>
    <ol class="MuiTypography-root MuiTypography-body1 MuiTypography-gutterBottom">
      <li>
        Type search term into search field. If there are matches, a number
        will appear to the right of the search field, indicating the number
        of filter values that match the search term.
      </li>
      <li>
        Click the arrows to the right of the search field to cycle
        through the results. As you click the arrow, a different filter value
        will appear at the top of the list. Matched filters are underlined in
        purple.
      </li>
      <li>
        Click the checkmark next to a filter value to activate it. The results
        (and also other filters) are automatically updated.
      </li>
    </ol>

    <h2 class="MuiTypography-root MuiTypography-h4 MuiTypography-gutterBottom">
      Using multiple filters simultaneously
    </h2>
    <p class="MuiTypography-root MuiTypography-body1 MuiTypography-paragraph">
      The effectiveness of faceted search is realized when multiple filters are
      applied at the same time. As in many e-commerce sites, a logical AND is
      always used between the filters. For example selecting <i>Saint Augustine </i>
      and <i>Saint Jerome</i> as an Author and <i>Sir Thomas Phillipps</i> and
      <i> Thomas Thorpe</i> as an Owner, the results are narrowed down as follows:
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Author: <i>Saint Augustine</i> <strong>OR</strong> Author: <i>Saint Jerome</i>)
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
        <strong>AND</strong>
    </p>
    <p class="MuiTypography-root MuiTypography-body1">
      (Owner: <i>Sir Thomas Phillipps</i> <strong>OR</strong> Owner: <i>Thomas Thorpe</i>)
    </p>
  `
}
