import knex from 'knex'
import knexfile from './knexfile.js'


const environment = process.env.NODE_ENV || 'development'
const config = knexfile[environment]
export const connection = knex(config)

export async function getMembers() {
  return connection('members').select()
}

export async function getMember(id) {
  return connection('members').select()
  .where('id', id)
  // .join('groups-members', 'member.id', 'groups-members.members_id')
  // .join('groups', 'groups-members.group_id', 'group.id')
  // .select()
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
    .select('groups.name as groupName', 'members.name as memberName', 'members.id as id')
    .where('groups_id',id)
}

export async function getMemberGroups(id) {
  return connection('members')
    .join('groups-members', 'members.id', 'groups-members.members_id')
    .join('groups', 'groups-members.groups_id', 'groups.id')
    .select('groups.name as groupName', 'members.name as memberName', 'groups.id as id')
    .where('members_id',id)
}

