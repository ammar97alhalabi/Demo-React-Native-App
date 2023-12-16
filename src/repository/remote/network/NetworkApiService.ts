import { BaseApiService } from "./BaseApiService";



export class NetworkApiService implements BaseApiService  {
    _baseUrl: string="https://reqres.in";
    public async postApiResponse(url: string, body: any, header?: Headers | undefined, queryParams?: any,) {
            try {
                let response = await fetch(this._baseUrl + url, {
                    body: body,
                    headers: header,
                    method: 'POST'
    
                }).then(res=>{console.log(res.status)
                return res
                })
             
              return returnResponse(response)
            } catch (error) {
                throw error;
            };
    }
    
}


function returnResponse(response: Response) {
    switch (response.status) {
        case 200:
            let responseJson = response.json();
            return responseJson;
        case 404:
            throw console.log(response)
        case 400:
            throw console.log(response)
        }
}