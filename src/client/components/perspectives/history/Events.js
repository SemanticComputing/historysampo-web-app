import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import PerspectiveTabs from '../../main_layout/PerspectiveTabs'
import ResultTable from '../../facet_results/ResultTable'
import LeafletMap from '../../facet_results/LeafletMap'
import Deck from '../../facet_results/Deck'
import Network from '../../facet_results/Network'
import Export from '../../facet_results/Export'

const Events = props => {
  const { rootUrl, perspective } = props
  return (
    <>
      <PerspectiveTabs
        routeProps={props.routeProps}
        tabs={props.perspective.tabs}
        screenSize={props.screenSize}
      />
      <Route
        exact path={`${rootUrl}/${perspective.id}/faceted-search`}
        render={() => <Redirect to={`${rootUrl}/${perspective.id}/faceted-search/table`} />}
      />
      <Route
        path={`${props.rootUrl}/${perspective.id}/faceted-search/table`}
        render={routeProps =>
          <ResultTable
            data={props.events}
            facetUpdateID={props.facetData.facetUpdateID}
            resultClass='events'
            facetClass='events'
            fetchPaginatedResults={props.fetchPaginatedResults}
            updatePage={props.updatePage}
            updateRowsPerPage={props.updateRowsPerPage}
            sortResults={props.sortResults}
            routeProps={routeProps}
          />}
      />
      <Route
        path={`${rootUrl}/${perspective.id}/faceted-search/export`}
        render={() =>
          <Export
            sparqlQuery={props.perspective1.paginatedResultsSparqlQuery}
            pageType='facetResults'
          />}
      />
    </>
  )
}

Events.propTypes = {
  events: PropTypes.object.isRequired,
  places: PropTypes.object.isRequired,
  leafletMapLayers: PropTypes.object.isRequired,
  facetData: PropTypes.object.isRequired,
  fetchResults: PropTypes.func.isRequired,
  fetchGeoJSONLayers: PropTypes.func.isRequired,
  fetchPaginatedResults: PropTypes.func.isRequired,
  fetchByURI: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  updateRowsPerPage: PropTypes.func.isRequired,
  sortResults: PropTypes.func.isRequired,
  routeProps: PropTypes.object.isRequired,
  updateFacetOption: PropTypes.func.isRequired,
  perspective: PropTypes.object.isRequired,
  animationValue: PropTypes.array.isRequired,
  animateMap: PropTypes.func.isRequired,
  screenSize: PropTypes.string.isRequired,
  rootUrl: PropTypes.string.isRequired
}

export default Events
