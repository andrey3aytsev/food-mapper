export const up = (pgm) => {
  pgm.createTable('meal_items', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('gen_random_uuid()'),
    },
    meal_entry_id: {
      type: 'uuid',
      notNull: true,
      references: '"meal_entries"',
      onDelete: 'CASCADE',
    },
    food_reference_id: {
      type: 'uuid',
      references: '"food_references"',
      onDelete: 'SET NULL',
    },
    custom_name: { type: 'varchar(512)', notNull: true },
    serving_size: { type: 'double precision', notNull: true },
    serving_unit: { type: 'varchar(64)', notNull: true },
  });
};

export const down = (pgm) => {
  pgm.dropTable('meal_items');
};
