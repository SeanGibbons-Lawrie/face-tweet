export async function seed(knex) {
  await knex('members').insert([
    { id: 99901, name: 'Ambitious Aardvark' },
    { id: 99902, name: 'Bamboozled Baboon' },
    { id: 99903, name: 'Curious Capybara' },
    { id: 99904, name: 'Dilapidated Duck' },
    { id: 99905, name: 'Exuberant Elephant' },
  ])
}
