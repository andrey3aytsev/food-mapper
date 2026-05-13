export const up = (pgm) => {
  pgm.createTable('wellbeing_entries', {
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
    logged_at: { type: 'timestamptz', notNull: true },
    meal_entry_id: {
      type: 'uuid',
      references: '"meal_entries"',
      onDelete: 'SET NULL',
    },
    bloating: {
      type: 'smallint',
      notNull: true,
      check: 'bloating >= 0 AND bloating <= 5',
    },
    abdominal_pain: {
      type: 'smallint',
      notNull: true,
      check: 'abdominal_pain >= 0 AND abdominal_pain <= 5',
    },
    general: {
      type: 'smallint',
      notNull: true,
      check: '"general" >= 0 AND "general" <= 5',
    },
    comment: { type: 'text', notNull: true },
  });
};

export const down = (pgm) => {
  pgm.dropTable('wellbeing_entries');
};
