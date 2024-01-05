/**
 * @param endPoint url end-point
 * @param path Route
 * @param method POST | GET | PUT | DELETE
 * @param data JSON object
 * @returns 
 */
export default async function httpCustom( path: String, method: string, data: any): Promise<any> {
    let env: any ="https://api.github.com/repos/"

    let opts: any = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': "*",
            "Authorization": "Bearer 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",
            "X-GitHub-Api-Version":" 2022-11-28",
            "Accept": "application/vnd.github+json"
        },
        
    }

    if (['POST', 'PUT'].includes(method)) opts['body'] = JSON.stringify(data)

    let url = path

    if (["GET", "DELETE"].includes(method)) {
        let params: string = "?"
        for (let items in data) {
            params += params.length == 1 ? items + "=" + data[items] + "&" : items + "=" + data[items] + "&"
        }
        let last = String(params).length - 1

        let urlClean: String = ""
        if (String(params).substring(last, params.length).includes("&")) {
            urlClean = url + String(params).substring(0, params.length - 1)
        } else {
            urlClean = url + String(params).substring(0, params.length)
        }
        url = urlClean
    }

    return new Promise((resolve, reject) => {
        fetch(
            env + url,
            opts
        )
            .then(res => res.json())
            .then((res) => {
                resolve(res)
            })
            .catch((error) => {
                reject(error)
            })
    })
}