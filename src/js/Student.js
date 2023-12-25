// export default:
// - 1 module chỉ có thể export default 1 lần
// - Khi import ta có thể đặt tên tuỳ ý và ko cần dấu {}

export default class Student{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
    }
}