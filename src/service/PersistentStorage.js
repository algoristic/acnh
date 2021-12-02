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

    getPanel(key) {
        let state = this.get('panel_' + key);
        if(state === null) {
            state = true;
            this.setPanel(key, state);
        }
        console.log(`get(panel=${key}, state=${state})`);
        return JSON.parse(state);
    }

    setPanel(key, value) {
        console.log(`set(panel=${key}, state=${value})`);
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
