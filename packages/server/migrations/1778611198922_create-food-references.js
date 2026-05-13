export const up = (pgm) => {
  pgm.createTable('food_references', {
    id: {
      type: 'uuid',
      notNull: true,
      primaryKey: true,
      default: pgm.func('gen_random_uuid()'),
    },
    name: { type: 'varchar(512)', notNull: true },
    fodmap_category: { type: 'varchar(32)', notNull: true },
    fodmap_level: { type: 'varchar(32)', notNull: true },
    safe_serving_size: { type: 'double precision', notNull: true },
    safe_serving_unit: { type: 'varchar(64)', notNull: true },
    notes: { type: 'text', notNull: true },
  });
};

export const down = (pgm) => {
  pgm.dropTable('food_references');
};
