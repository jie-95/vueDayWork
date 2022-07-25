import request from "@/utils/request"

export const searchHotList = (params) => {
    return request({
        url:"/search/hot",
        params
    });
};
export const cloudSearch = (params) => {
    return request({
        url:"/cloudsearch",
        params
    });
};