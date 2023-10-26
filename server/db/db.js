import knex from 'knex'
import knexfile from './knexfile.js'

const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getMembers() {
  return connection('members').select()
}

export async function getMember(id) {
  return connection('members').where('id', id).first()
}

export async function getGroups() {
  return connection('groups').select()
}

export async function getGroup(id) {
  return connection('groups').where('id', id).first()
}
