/* Написать функцуию которая принимает обхект query параметров и возвращает строку для вставки
{
    search: 'Вася', 
    take: 10,
} 
//search=Вася&take=10
*/

function buildQueryString(query) {
    let queryString = '';
    for (let key in query) {
        if (queryString !== '') {
            queryString += '&';
        }
        queryString += `${key}=${query[key]}`;
    }
    return queryString;
}

const query = {
    search: 'Вася',
    take: 10,
};

const queryString = buildQueryString(query);
console.log(queryString); // search=Вася&take=10