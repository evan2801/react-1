import * as faker from 'faker';

let employeeList =[];

for(let i = 0; i<50; i++ ) {

    employeeList.push({
        id: faker.random.uuid(),
        name: faker.name.findName(),
        department: faker.commerce.department(),
        city: faker.address.city(),
        imageUrl: faker.image.avatar(),
        
    });
}
export default employeeList;