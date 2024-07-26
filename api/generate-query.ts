export type QueriesObj = { [n:string]: string | number | boolean }

export function generateQuery(queryObj: QueriesObj): string {
    if(!queryObj) return "";
    const keys = Object.keys(queryObj);
    if(keys.length === 0) return "";

    let query: string = "?"
    for (const key of keys) {
        if(!query.endsWith("?"))
            query += "&"
        query+=encodeURIComponent(key) + "=" + encodeURIComponent(queryObj[key])
    }

    return query
}