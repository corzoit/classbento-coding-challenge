export const getFlickrFeed = async (tags) => {
    // const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=${encodeURI(tags)}`;
    const url = `https://flickr-api-wrapper.corzo.dev/${encodeURI(tags)}`;
    const response = await fetch(url);
    const {items} = await response.json();

    return items.map(node => {
        return {
            title: node.title,
            link: node.link,
            image: node.media.m,
            author: node.author,
            dateTaken: node.date_taken,
            tags: node.tags,
        };
    });
}
