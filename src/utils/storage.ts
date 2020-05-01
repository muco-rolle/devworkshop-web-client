export const storage = {
    get(key: string) {
        const devworkshop = JSON.parse(localStorage.getItem(key) as string);

        if (!devworkshop) {
            this.save({});
            return JSON.parse(localStorage.getItem("devworkshop") as string);
        }

        return devworkshop;
    },

    save(data: any) {
        return localStorage.setItem("devworkshop", JSON.stringify(data));
    },
};
