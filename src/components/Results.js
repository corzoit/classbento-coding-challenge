import React, { useEffect, useState } from 'react'
import { getFlickrFeed } from '../services/getFlickrFeed'
import { Card } from './Card'

export const Results = () => {


    const [images, setImages] = useState({
        data: [],
        loading: true
    });

    const tag = "red";

    useEffect(() => {
        // setTimeout(() => {
            getFlickrFeed(tag).then(images => {
                setImages({
                    data: images,
                    loading: false
                });
            });
        // }, 1000)
    }, [tag]);

    console.log(images);

    return (
        <section className="mt-3">
            <div className="row">
            {
                images.data.map((item, index) => {
                    return <Card
                                key={index}
                                {...item}
                            />
                })
            }

            </div>
        </section>
    )
}
