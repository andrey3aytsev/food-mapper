export type RowMapper<TDomain, TRow> = {
  toRow: (domain: TDomain) => TRow;
  fromRow: (row: TRow) => TDomain;
};
