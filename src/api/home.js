//33333333333333333333333333333333
import request from "@/utils/request"
export const recommendSongList = (params) => {
    return request({
        url:"/personalized",
        params
    });
};
export const newSongList = (params) => {
    return request({
        url:"/personalized/newsong",
        params
    });
};

