import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import error from './error'
import options from './options'
import events from './history/events'
import perspective1 from './sampo/perspective1'
import perspective2 from './sampo/perspective2'
import perspective3 from './sampo/perspective3'
import eventsFacets from './history/eventsFacets'
import perspective1Facets from './sampo/perspective1Facets'
import perspective1FacetsConstrainSelf from './sampo/perspective1FacetsConstrainSelf'
import perspective2Facets from './sampo/perspective2Facets'
import perspective3Facets from './sampo/perspective3Facets'
import places from './sampo/places'
import leafletMapLayers from './sampo/leafletMapLayers'
import animation from './mmm/animation'
import clientSideFacetedSearch from './sampo/clientSideFacetedSearch'

const reducer = combineReducers({
  events,
  perspective1,
  perspective2,
  perspective3,
  eventsFacets,
  perspective1Facets,
  perspective1FacetsConstrainSelf,
  perspective2Facets,
  perspective3Facets,
  places,
  leafletMapLayers,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  toastr: toastrReducer
})

export default reducer
