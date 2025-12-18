const {Pool} = require('pg');
const pool = new Pool({
    connectionString: "postgresql://gym_414_user:IVI7w73Qwzfe2I8vWj6BSbuIhUQnXJvh@dpg-d51qii6mcj7s73ei69o0-a.oregon-postgres.render.com/gym_414",
    ssl: {
        rejectUnauthorized: true
    },
});
pool.connect().then(() => {
    console.log('connected');
}).catch((err) => {
    console.log(err);
});
module.exports = pool