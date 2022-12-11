import React from 'react'

export default function anilist() {

    const query = `
    query ($page: Int, $perPage: Int, $search: String) {
        Page(page: $page, perPage: $perPage) {
        pageInfo {
        total
        perPage
        }
        media(search: $search, type: ANIME, sort: FAVOURITES_DESC) {
        id
        title {
            romaji
            english
            native
        }
        type
        genres
        }
        } 
        }
`;

}
 
