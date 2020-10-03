import Knex from 'knex';

export async function up(knex: Knex) {
    knex.schema.createTable('connections', table => {
        
        table.increments('id').primary();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASDADE')
        .onDelete('CASDADE');

        table.timestamp('created_at')
        .defaultTo('now()')
        .notNullable();

    });

}

export async function down(knex: Knex) {
    knex.schema.dropTable('connections');
}