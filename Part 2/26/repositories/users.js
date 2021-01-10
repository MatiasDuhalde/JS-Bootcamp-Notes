const fs = require('fs');
const crypto = require('crypto');
const util = require('util');

const scrypt = util.promisify(crypto.scrypt);

class UsersRepository {
    constructor(filename) {
        if (!filename) {
            throw new Error('Creating a repository requires a filename');
        }
        this.filename = filename;
        try {
            fs.accessSync(this.filename);
        } catch(err) { 
            fs.writeFileSync(this.filename, '[]');
        }
    }

    async getAll() {
        return JSON.parse(await fs.promises.readFile(this.filename, {
            encoding: 'utf-8'
        }));
    }

    async getOne(id) {
        const records = await this.getAll();
        return records.find(record => record.id === id);
    }

    async getOneBy(filters) {
        const records = await this.getAll();
        for (let record of records) {
            let found = true;
            for (let key in filters) {
                if (record[key] !== filters[key]) {
                    found = false;
                }
            }
            if (found) {
                return record;
            }
        }
    }

    async create(attrs) {
        attrs.id = this.randomId();

        const salt = crypto.randomBytes(8).toString('hex');
        const hashed = await scrypt(attrs.password, salt, 64);

        const records = await this.getAll();
        const record = {
            ...attrs,
            password: `${hashed.toString('hex')}.${salt}`
        }
        records.push(record);
        await this.writeAll(records);

        return record;
    }

    async update(id, attrs) {
        const records = await this.getAll();
        const record = records.find(record => record.id === id);
        if (!record) {
            throw new Error(`Record with ID ${id} not found`);
        }
        Object.assign(record, attrs);
        await this.writeAll(records);
    }

    async delete(id) {
        const records = await this.getAll();
        const filteredRecords = records.filter(record => record.id !== id);
        await this.writeAll(filteredRecords);
    }

    randomId() {
        return crypto.randomBytes(4).toString('hex');
    }

    async writeAll(records) {
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2), {
            encoding: 'utf-8'
        });
    }

    async comparePasswords(saved, supplied) {
        const [hashedSaved, salt] = saved.split('.');
        const hashedSupplied = await scrypt(supplied, salt, 64);

        return hashedSaved === hashedSupplied.toString('hex');
    }
}

module.exports = new UsersRepository('users.json');
