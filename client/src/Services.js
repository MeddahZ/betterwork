import axios from 'axios';

const URL ="http://localhost:5000/services/"
class donationService {

    static getService() {
        return new promise(async (resolve, reject) => {
            try{
                const res = await axios.get(URL);
                const data = res.data;
                resolve(
                    data.map(service => ({
                    ...service
                    }))
                )

            } catch(err) {
                reject(err);

            }
        })
    };

    static addService(name, part, chapter, description, link, documents) {
        return axios.post(url, {
            name,
            part,
            chapter,
            description,
            link,
            documents
        })
    }; 

    static deleteService(id) {
        return axios.delete('${url}:${id}')


    }





}
    export default Services;