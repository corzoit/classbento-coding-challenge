import React, { useContext, useEffect, useState } from 'react'

import { getFlickrFeed } from '../services/getFlickrFeed'
import { SearchContext } from '../context/SearchContext'
import { Card } from './Card'

export const Results = () => {
    const {keywords} = useContext(SearchContext);

    const [images, setImages] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
            setImages({
                data: [],
                loading: true
            });

            getFlickrFeed(keywords).then(images => {
                setImages({
                    data: images,
                    loading: false
                });
            });
    }, [keywords]);

    return (
        <section className="mt-3">
            <div className="row">
            {
                images.data.map((item, index) => {
                    return <Card
                                key={index + item.dateTaken}
                                {...item}
                            />
                })
            }

            </div>
        </section>
    )
}
