import React from 'react'

export default function MovieInfo({
                                      params: {
                                          movieId
                                      }
                                  }: {
    params: {
        movieId: string
    }
}): React.ReactElement {

    return (
        <div>{movieId}</div>
    )
}