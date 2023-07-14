"use server"
import { cookies } from 'next/headers'
export const deleteCookie = () => {
    console.log("server")
    cookies().set({
        name: 'user',
        value: '',
        expires: new Date('2016-10-05'),
        path: '/', // For all paths
    })
}