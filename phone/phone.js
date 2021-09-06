class Mobile {
    constructor(_name) {
        this.name = _name;
        this.battery = 100;
        this.draft = "";
        this.inbox = [];
        this.outbox = [];
        this.status = true;
    }

    checkStatus() {
        return this.battery > 0;

    }

    onOff() {
        this.status = !this.status;
    }

    writting(text) {
        this.draft = text;
    }

    sendMessage(phone) {
        phone.inbox.push(this.draft);
        this.outbox.push(this.draft);
        this.draft = "";
    }

    getInbox() {
        return this.inbox
    }
    getOutbox() {
        return this.outbox;
    }

}
let dtCuaToi=new Mobile("Toi");
let dtCuaBan=new Mobile("Ban");