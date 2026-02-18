const storageKeys = {
    theme: "theme",
}
const localStorageService = {

    encrypt: (value: string) => value,
    decrypt: (encrypted: string) => encrypted,
    set(key: string, value: string) {
        localStorage.setItem(this.encrypt(key), this.encrypt(value));
    },
    get(key: string, defaultValue?: any) {
        try {
            const encryptedValue = localStorage.getItem(this.encrypt(key))
            return this.decrypt(encryptedValue as string);
        } catch (error) {
            return defaultValue;
        }
    }
}

export { localStorageService, storageKeys }