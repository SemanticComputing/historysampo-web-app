import {
  FETCH_FACET_CONSTRAIN_SELF,
  FETCH_FACET_CONSTRAIN_SELF_FAILED,
  UPDATE_FACET_VALUES_CONSTRAIN_SELF
} from '../../actions'
import {
  fetchFacet,
  fetchFacetFailed,
  updateFacetValues
  // updateFacetOption,
} from '../helpers'

export const INITIAL_STATE = {
  updatedFacet: null,
  facetUpdateID: 0,
  updatedFilter: null,
  facets: {
    prefLabel: {
      id: 'prefLabel',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: null,
      sortDirection: null,
      sortButton: false,
      spatialFilterButton: false,
      isFetching: false,
      searchField: false,
      containerClass: 'one',
      filterType: 'textFilter',
      textFilter: null,
      priority: 1
    },
    field: {
      id: 'field',
      // predicate: defined in backend
      distinctValueCount: 0,
      values: [],
      flatValues: [],
      sortBy: 'instanceCount',
      sortDirection: 'desc',
      sortButton: true,
      spatialFilterButton: false,
      chartButton: false,
      isFetching: false,
      searchField: true,
      containerClass: 'ten',
      filterType: 'uriFilter',
      uriFilter: null,
      priority: 4
    }
  }
}

const eventsFacetsConstrainSelf = (state = INITIAL_STATE, action) => {
  if (action.facetClass === 'events') {
    switch (action.type) {
      case FETCH_FACET_CONSTRAIN_SELF:
        return fetchFacet(state, action)
      case FETCH_FACET_CONSTRAIN_SELF_FAILED:
        return fetchFacetFailed(state, action)
      case UPDATE_FACET_VALUES_CONSTRAIN_SELF:
        return updateFacetValues(state, action)
      default:
        return state
    }
  } else return state
}

export default eventsFacetsConstrainSelf
