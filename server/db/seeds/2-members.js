export async function seed(knex) {
  await knex('members').insert([
    { id: 101, name: 'Ambitious Aardvark' },
    { id: 102, name: 'Bamboozled Baboon' },
    { id: 103, name: 'Curious Capybara' },
    { id: 104, name: 'Dilapidated Duck' },
    { id: 105, name: 'Exuberant Elephant' },
  ])
}
