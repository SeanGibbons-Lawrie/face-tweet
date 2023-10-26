export async function seed(knex) {
  await knex('groups').insert([
    { id: 1, name: 'music-people' },
    { id: 2, name: 'artists' },
    { id: 3, name: 'tech-nerds' },
    { id: 4, name: 'pet-lovers' },
    { id: 5, name: 'sportspeople' },
  ])
}
