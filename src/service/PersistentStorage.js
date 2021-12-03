class PersistentStorage {
    constructor() {
        this.storage = window.localStorage;
    }

    get(key) {
        return this.storage.getItem(key);
    }

    set(key, value) {
        this.storage.setItem(key, value);
    }

    getSort() {
        let sort = this.get('sort_order');
        if(sort === null) {
            sort = { property: 'value', order: 'descending' };
            this.setSort(sort);
            return sort;
        }
        sort = JSON.parse(sort);
        return sort;
    }

    setSort(sort) {
        sort = JSON.stringify(sort);
        this.set('sort_order', sort);
    }

    getPanel(key) {
        let state = this.get('panel_' + key);
        if(state === null) {
            state = true;
            this.setPanel(key, state);
        }
        return JSON.parse(state);
    }

    setPanel(key, value) {
        this.set(('panel_' + key), value);
    }

    getHemisphere() {
        let hemisphere = this.get("user_hemisphere");
        if(hemisphere === null) {
            hemisphere = 'northernHemisphere'
            this.setHemisphere(hemisphere);
        }
        return hemisphere;
    }

    setHemisphere(hemisphere) {
        this.set("user_hemisphere", hemisphere);
    }
}

export default PersistentStorage;
