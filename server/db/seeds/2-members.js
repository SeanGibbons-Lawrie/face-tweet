export async function seed(knex) {
  await knex('members').insert([
    { id: 1, name: 'Michael' },
    { id: 2, name: 'Gaby' },
    { id: 3, name: 'Lucy' },
    { id: 4, name: 'Elise' },
    { id: 5, name: 'Gerard' },
  ])
}
