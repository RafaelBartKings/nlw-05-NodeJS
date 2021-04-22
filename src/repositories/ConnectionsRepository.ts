import { Entity, EntityRepository, Repository } from "typeorm";
import { Connection } from "../entities/Connection";

@EntityRepository(Connection)
class ConnectionsRpository extends Repository<Connection> {} 

export { ConnectionsRpository };