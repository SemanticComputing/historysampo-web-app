import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import error from './error'
import options from './options'
import events from './history/events'
import eventsFacets from './history/eventsFacets'
import places from './sampo/places'
import leafletMapLayers from './sampo/leafletMapLayers'
import animation from './mmm/animation'
import clientSideFacetedSearch from './sampo/clientSideFacetedSearch'

const reducer = combineReducers({
  events,
  eventsFacets,
  places,
  leafletMapLayers,
  animation,
  options,
  error,
  clientSideFacetedSearch,
  toastr: toastrReducer
})

export default reducer
