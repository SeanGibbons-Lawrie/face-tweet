export async function seed(knex) {
  await knex('groups-members').del()
  await knex('groups').del()
  await knex('members').del()
  await knex('users').del()
}
