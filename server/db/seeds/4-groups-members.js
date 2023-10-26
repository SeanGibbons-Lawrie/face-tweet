export async function seed(knex) {
  await knex('groups-members').insert([{ groups_id: 1, members_id: 1 }])
}
