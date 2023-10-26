export async function seed(knex) {
  await knex('members').insert([
    { id: 1, name: 'Ambitious Aardvark' },
    { id: 2, name: 'Bamboozled Baboon' },
    { id: 3, name: 'Curious Capybara' },
    { id: 4, name: 'Dilapidated Duck' },
    { id: 5, name: 'Exuberant Elephant' },
  ])
}
