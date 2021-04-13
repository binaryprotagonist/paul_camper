var axios = require('axios');

class apiCallController {

    async getData(){
        return new Promise(async (resolve, reject) => {
        try{
            var config = {
                method: 'get',
                url: 'https://paulcamper.de/api/inventory/search?center_lat=52.504043&center_lng=13.393236&page_size=24',
        
            };
            axios(config).then((response)=> {
                return resolve ({
                    Status:200,
                    Success:true,
                    Data:response.data
                })
            })
            .catch( (error) =>{
                return reject (error)
            });
        }
        catch(error){
            return error
        }
    });
    }
}

module.exports = new apiCallController();

