import http from '@/network/httpConfig'
import baseUrl from '@/network/baseUrl';

export function fetchPermission() {
    return http.get(baseUrl+'/user/getPermission')
}

export function guestLogin() {
    return http.post(baseUrl+'/user/login',{userName:'guest', passWord: '123456'})
}

export function login(data) {
    return http.post(baseUrl+'/user/login',data)
}