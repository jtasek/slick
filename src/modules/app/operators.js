// @flow
export function searchAndFilter(items, path, tag, text) {
    let keys = Object.keys(items)
    // tag filter
    if (tag) {
        keys = keys.filter(key => {
            const item = items[key]
            return item.tags.includes(tag)
        })
    }
    // text search
    if (text) {
        keys = keys.filter(key => {
            const item = items[key]
            return (
                (item.title && item.title.includes(text)) ||
                (item.description && item.description.includes(text))
            )
        })
    }
    // result
    return keys.map(key => ({
        id: key,
        list: items[key].list,
        path: `${path}.${key}`
    }))
}
