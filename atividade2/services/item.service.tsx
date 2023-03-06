import db from '../constants/database';
import { get, onValue, push, ref, remove, update } from "firebase/database";

class itemService {
    static async getItens() {
        try {
          const snapshot = await get(ref(db, "/todos"));
          const data = snapshot.val();
          
          if (!data) {
            return [];
          }
          
          const itensList = Object.keys(data).map((key) => ({
            key: key,
            name: data[key].title,
            desc: data[key].desc,
          }));
          
          return itensList;
        } catch (error) {
          return [];
        }
      }

    static deleteItem(key: any) {
        remove(ref(db, '/todos/' + key + '/'));
    }

    static addItem(item: Item) {
        push(ref(db, 'todos/'), {
            title: item.name,
            desc: item.desc,
        });
    }

    static updateItem(item: Item) {
        update(ref(db, 'todos/' + item.key), {
            title: item.name,
            desc: item.desc,
        });
    }
}

export default itemService;