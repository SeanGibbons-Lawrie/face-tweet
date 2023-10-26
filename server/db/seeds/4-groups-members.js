export async function seed(knex) {
  await knex('groups-members').insert([
    { groups_id: 1, members_id: 1 },
    { groups_id: 1, members_id: 2 },
    { groups_id: 2, members_id: 5 },
    { groups_id: 4, members_id: 4 },
    { groups_id: 5, members_id: 3 },
  
  ])
}
