import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import {axios} from 'axios';

export async function GET() {
    
    console.log("Inside fn")

    let data;
    try {
      data = cookies.get('data');
    }
    catch (e) {
      data = "No data";
      console.log("Error", e);
    }
    
    return NextResponse.json({ data:  data});
  }

  export async function POST(req, {params}) {
    // //const body = await req.body.json();
    // new Promise((resolve, reject) => {
    //   const body = await params;
    //   resolve(body);
    //   reject("Error");
    // }).then((res) => {
    //   console.log("Body", res);
    //   cookies.set('data', res.data );
    //   return NextResponse.json({ message: 'Data Set!' });
    // }).catch((e) => {
    //   console.log("Error", e);
    //   return NextResponse.json({ message: 'Error!' });
    // })

    try{
      const body = await params;
      console.log("Body", body);

     // cookies.set(res.data);
      return NextResponse.json({ message: 'Data Set!' });
    }catch(error){
      console.log("Error", error);
    }

  }