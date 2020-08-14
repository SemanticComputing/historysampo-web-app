import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
// general reducers:
import error from './error'
import options from './options'
import animation from './animation'
import leafletMap from './leafletMap'
// portal spefic reducers:
import fullTextSearch from './sampo/fullTextSearch'
import clientSideFacetedSearch from './sampo/clientSideFacetedSearch'
import places from './history/places'
import events from './history/events'
import eventsFacets from './history/eventsFacets'
import eventsFacetsConstrainSelf from './history/eventsFacetsConstrainSelf'

const reducer = combineReducers({
  places,
  events,
  eventsFacets,
  eventsFacetsConstrainSelf,
  leafletMap,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  fullTextSearch,
  toastr: toastrReducer
})

export default reducer
