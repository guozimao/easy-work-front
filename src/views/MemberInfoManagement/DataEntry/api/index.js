import http from '@/network/httpConfig'
import baseUrl from '@/network/baseUrl';

//查询被标记的会员名列表
export function markedMember() {
    return http.post(
        baseUrl+'/member/consumption/rack/markedMember',
        {}
    )
}
//更新标记的会员名列表
export function updateMarkedMember(data) {
    return http.post(
        baseUrl+'/member/consumption/rack/updateMarkedMember',
        data
    )
}
//更新会员名
export function updateMemberName(data) {
    return http.post(
        baseUrl+'/member/consumption/rack/updateMemberName',
        new updateMember(data)
    )
}

class updateMember {
    constructor(obj){
        this.oldName = obj.memberName; //原名
        this.newName = obj.newMemberName; //新名
        this.orderDate = obj.date || ''; //日期
    }
}