import { createSelector } from "reselect";
import { selectCurrentUser, selectCurrentUserFollowing } from "../user/user.selectors";
import memoize from 'lodash/memoize';
import moment from 'moment';

export const sortByDate = eventsObj => {
  return Object.values(eventsObj).sort((a, b) => {
    a = a.start.toDate();
    b = b.start.toDate();

    return a > b ? 1 : a < b ? -1 : 0;
  });
}

const selectEvents = state => state.events;

export const selectAllEvents = createSelector(
  [selectEvents],
  (events) => events.events
);

export const selectEventById = createSelector(
  [selectAllEvents],
  (events) => memoize(id => {
    return events.hasOwnProperty(id) ? events[id]: null
  })
);

export const selectEventsIsLoading = createSelector(
  [selectEvents],
  (events) => events.isLoading
);

export const selectIsEventsFinishedLoading = createSelector(
  [selectAllEvents],
  events => Boolean(Object.keys(events).length)
);

export const selectFilter = createSelector(
  [selectEvents],
  (events) => events.filter
);

export const selectGuestFilter = createSelector(
  [selectFilter],
  (filter) => filter.guestFilter
);

export const selectHostFilter = createSelector(
  [selectFilter],
  (filter) => filter.hostFilter
);

export const selectSortedEvents = createSelector(
  [selectAllEvents],
  (events) => {
    return sortByDate(events);
  }
);

export const selectUpcomingEvents = createSelector(
  [selectSortedEvents],
  (events) => { 
    return events.filter(event => {
      if (moment(event.start.toDate()).isSameOrAfter(new Date(), 'day')) {
        return true
      } else {
        return false;
      }
    });
  }
);

export const selectFilteredEvents = createSelector(
  [selectSortedEvents, selectFilter, selectCurrentUser],
  (events, filter, currentUser) => {
    if ( !filter.guestFilter.includes("none") && currentUser) {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUser)) {
          return filter.guestFilter.includes(event.guests[currentUser]) ? true : false;
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  }
);

export const selectUpcomingEventsFilteredByGuestType = createSelector(
  [selectUpcomingEvents, selectFilter, selectCurrentUser],
  (events, filter, currentUser) => {
    if (filter.guestFilter.length) {
      return events.filter(event => {
        if (event.guests.hasOwnProperty(currentUser)) {
          if (filter.guestFilter.includes(event.guests[currentUser])) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      });
    } else {
      return events;
    }
  }
)

export const selectUpcomingFilteredEvents = createSelector(
  [selectUpcomingEventsFilteredByGuestType, selectCurrentUserFollowing],
  (events, following) => {
    return events.filter(event => {
      return event.hosts.some(host => {
        if (following.hasOwnProperty(host)) {
          return following[host]
        } else {
          return false;
        }
      }) 
    })
  }
)

export const selectEventsByUserId = createSelector(
  [selectUpcomingEvents],
  events => memoize(userId => {
    if (userId === null) {
      return events;
    } else {
      return events.filter(event => {
        if (event.hosts.includes(userId)) {
          return true;
        } else {
          return false;
        }
      });
    }
  })
);