import "reflect-metadata"
import { DataSource } from "typeorm"
import { Event } from "../entities/Event"

export const db = new DataSource({
    type: "mysql",
    timezone: "Europe/Athens",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "test_db",
    synchronize: true,
    logging: false, 
    entities: [Event],
    migrations: [], 
    subscribers: [],
})
