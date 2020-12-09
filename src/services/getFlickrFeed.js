export const getFlickrFeed = async (tags) => {
    // const url = `https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true&tags=${encodeURI(tags)}`;
    const url = `https://flickr-api-wrapper.corzo.dev/${encodeURI(tags)}`;
    const response = await fetch(url);
    const {items} = await response.json();

    return items.map(node => {

        // only get the email address, otherwise it looks poluted
        const author = node.author.split(" ")[0];

        return {
            title: node.title,
            link: node.link,
            image: node.media.m,
            author: author,
            description: node.description,
            dateTaken: node.date_taken,
            tags: node.tags,
        };
    });
}
