export async function seed(knex) {
  await knex('users', 'members', 'groups').del()
}
