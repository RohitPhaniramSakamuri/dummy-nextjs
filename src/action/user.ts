"use server"

import { connectToDB, disconnectFromDB } from "@/lib/mongoDB"

//getUser
//createUser
//updateUser
//deleteUser
//getAllUser

export async function getUser(email: string | null) {
    const { db, dbClient } = await connectToDB();

    const result = await db.collection("user").findOne({ email: email });

    console.log(result);

    await disconnectFromDB(dbClient);

    return JSON.stringify(result);

}