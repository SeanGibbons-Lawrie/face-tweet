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

export async function getGroupMembers(id) {
  return connection('groups')
    .join('groups-members', 'groups.id', 'groups-members.groups_id')
    .join('members', 'groups-members.members_id', 'members.id')
    .select('groups.name as groupName', 'members.name as memberName')
    .where('groups_id',id)
}
