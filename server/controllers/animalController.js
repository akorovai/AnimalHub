const connection = require('../data/animalDB');

function showHomePage() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT COUNT(*) AS totalCount FROM animal", (err, rows) => {
            if (err) {
                console.error(err);
                reject({ error: 'Internal Server Error' });
            }
            const isNotEmpty = rows[0].totalCount > 0;
            resolve({ isNotEmpty });
        });
    });
}

function deleteAnimalById(animalId) {
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM animal WHERE id = ?", [animalId], (err, result) => {
            if (err) {
                console.error(err);
                reject({ error: 'Internal Server Error' });
            }
            if (result.affectedRows > 0) {
                resolve();
            } else {
                reject({ error: 'Animal not found' });
            }
        });
    });
}

function modifyAnimal(animalId, animal) {
    return new Promise((resolve, reject) => {
        const { name, age, species, color, sound } = animal;
        connection.query(
            'UPDATE animal SET name = ?, age = ?, species = ?, color = ?, sound = ? WHERE id = ?',
            [name, age, species, color, sound, animalId],
            (err) => {
                if (err) {
                    console.error(err);
                    reject({ error: 'Internal Server Error' });
                } else {
                    resolve();
                }
            }
        );
    });
}

function getAnimalsList() {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM animal", (err, rows) => {
            if (err) {
                console.error(err);
                reject({ error: 'Internal Server Error' });
            }
            resolve({ data: rows });
        });
    });
}

function addAnimal() {
    return 'animals/add';
}

function postAnimal(animal) {
    return new Promise((resolve, reject) => {
        const { name, age, species, color, sound } = animal;

        connection.query('SELECT MAX(id) AS maxId FROM animal', (err, rows) => {
            if (err) {
                console.error(err);
                reject({ error: 'Internal Server Error' });
            }

            const newId = (rows[0].maxId || 0) + 1;

            connection.query(
                'INSERT INTO animal (id, name, age, species, color, sound) VALUES (?, ?, ?, ?, ?, ?)',
                [newId, name, age, species, color, sound],
                (err) => {
                    if (err) {
                        console.error(err);
                        reject({ error: 'Internal Server Error' });
                    } else {
                        resolve('/animals');
                    }
                }
            );
        });
    });
}

function getAnimal(animalId) {
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM animal WHERE id = " + animalId + ";", (err, rows) => {
            if (err) {
                console.error(err);
                reject({ error: 'Internal Server Error' });
            }

            if (!rows || rows.length <= 0) {
                resolve('/animals/' + animalId);
            } else {
                resolve({
                    id: rows[0].id,
                    name: rows[0].name,
                    age: rows[0].age,
                    species: rows[0].species,
                    color: rows[0].color,
                    sound: rows[0].sound
                });
            }
        });
    });
}

module.exports = {
    showHomePage,
    deleteAnimalById,
    modifyAnimal,
    getAnimalsList,
    addAnimal,
    postAnimal,
    getAnimal
};
