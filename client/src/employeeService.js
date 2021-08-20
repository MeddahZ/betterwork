import { reject } from "core-js/fn/promise";
import axios from 'axios';

const url = 'http://localhost:5000/employees/';

class employeeService {

    static getEmployee() {
        return new promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(employee => ({
                    ...employee, createdAt: new date(employee.createdAt)

                    }))
                )

            } catch(err) {
                reject(err);

            }
        })
    };

    static addEmployee(firstname, lastname, email, phoneNumber, dateOfBirth, job, ccp) {
        return axios.post(url, {
            firstname,
            lastname,
            email,
            phoneNumber,
            dateOfBirth,
            job,
            ccp
        })
    }; 

    static deleteEmployee(id) {
        return axios.delete('${url}:${id}')


    }





}
    export default employeeService;