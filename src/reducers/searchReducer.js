const initalState = {
    loading: false,
    data: {},
    error: null,
    search: false
}

export default function searchReducer(state = initalState, action) {
    switch (action.type) {
        case 'SEARCH_MUSIC_ARTIST_STARTED':
            return {
                loading: true,
                search: true
            };
        case 'SEARCH_MUSIC_ARTIST_SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
                search: true
            };
        case 'SEARCH_MUSIC_ARTIST_FAILURE':
            return {
                loading: false,
                data: {},
                error: action.payload.error,
                search: true
            };
        default:
            return state;
    }
}