export const up = (pgm) => {
  pgm.createTable('meal_entries', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('gen_random_uuid()'),
    },
    user_id: {
      type: 'uuid',
      notNull: true,
      references: '"users"',
      onDelete: 'CASCADE',
    },
    meal_date: { type: 'date', notNull: true },
    meal_type: { type: 'varchar(32)', notNull: true },
    occurred_at: { type: 'timestamptz', notNull: true },
  });
};

export const down = (pgm) => {
  pgm.dropTable('meal_entries');
};
