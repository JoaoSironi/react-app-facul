import db from '../constants/database';
import { onValue, push, ref, remove } from "firebase/database";

class itemService {
    static getItens() {
        var itens: Item[] = [];
        onValue(ref(db, '/todos'), (snapshot) => {
            const data = snapshot.val();
            if(!data) {
                itens = [];
            }
            else {
                const itensList = Object.keys(data).map((key) => ({
                    key: key,
                    name: data[key].title,
                    desc: data[key].desc,
                }));
                itens = itensList;
            }
        });
        return itens;
    }

    static async deleteItem(key: any) {
        remove(ref(db, '/todos/' + key + '/'));
    }

    static async addItem(item: Item) {
        push(ref(db, 'todos/'), {
            title: item.name,
            desc: item.desc,
        });
    }

    static async updateItem(item: Item) {

    }
}

export default itemService;