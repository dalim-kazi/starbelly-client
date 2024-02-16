const { baseAPI, getData } = require("../CommonService")


// menus all service
export const allMenusService = async () => {
    const url =`${baseAPI}menu/get`
    const result = await getData(url)
     if (result) {
        return result
    }
} 