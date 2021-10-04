import { createSelector } from 'reselect';

const selectDir = state => state.directory;

export const selectSectionsFromDir = createSelector(
    [selectDir],
    directory => directory.sections
)