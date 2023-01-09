const client = require('./database');

const dataMapper = {
    getAllFigurines: async () => {
        const sqlQuery = 'SELECT * FROM "figurine"';
        const result = await client.query(sqlQuery);
        return result.rows;
    },
    getOneFigurine: async function (id) {
        const sqlquery = 'SELECT * FROM "figurine" WHERE "id"=';
        const result = await client.query(sqlquery + id);

        // const sqlQuery = `SELECT * FROM "figurine" WHERE "id"=${id}`;
        // const result = await client.query(sqlquery);

        if (result.rows.length === 0){
            return null
        }
        else {
            return result.rows[0];
        }
    },
}

  







module.exports = dataMapper;


