import http from '@/network/httpConfig'
import baseUrl from '@/network/baseUrl';

//被标记的会员
export const MARKED_MEMBER_TYPE = 1;

//查询主列表
export function memberConsumptionRackList(data) {
    return http.post(
            baseUrl+'/member/consumption/rack/list',
            data
        )
}

export class QueryFrom {
    constructor(obj, page){
        this.scopeDate = obj.scopeDate || ['',''];
        this.promoters = obj.operator || '';
        this.storeName = obj.storeName || '';
        this.memberName = obj.memberName || '';
        this.pageNum = page.pageNum || 1;
        this.pageSize = page.pageSize || 10;
    }
}

export class DataList {
    constructor(obj){
        this.total = obj.total || 0; //总数
        this.pageNum = obj.pageNum || 1; //当前页
        this.pageSize = obj.pageSize || 10; //每页的条数
        this.data = obj.list ? obj.list.map( item => new MemberConsumptionTrack(item)) : [];
    }
}

class MemberConsumptionTrack {
    constructor(obj){
        this.operationDate = obj.orderDate; //操作日期
        this.operator = obj.promoters; //申请人
        this.storeName = obj.storeName; //店铺名
        this.memberName = obj.memberName // 会员名
        this.markFlag = obj.markFlag; //会员名标记。0：未标记 1：被标记
    }
}

export function getCurrentDate(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() < 9 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${month}-${day}`
}