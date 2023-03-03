import db from '../constants/database';
import { onValue, push, ref, remove, onChildAdded } from "firebase/database";
import { useEffect } from 'react';

class itemService {
    static async getItens() {
        onValue(ref(db, '/todos'), (snapshot) => {
            const data = snapshot.val();
            if(!data) {
                return [];
            }
            else {
                console.log(data);
                const itensList = Object.keys(data).map((key) => ({
                    name: data[key].title,
                    desc: data[key].desc,
                }));
                return itensList;
            }
            
        });
    }

    static async deleteItem(name: string) {
        remove(ref(db, '/todos/'));
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