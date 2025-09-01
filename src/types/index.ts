export type DataByYear = {
  year: number;
  population?: number;
  co2?: number;
  co2_per_capita?: number;
  methane?: number;
  oil_co2?: number;
  oil_co2_per_capita?: number;
  temperature_change_from_co2?: number;
};

export type CountryInfo = {
  iso_code?: string;
  data: DataByYear[];
};

export type CountriesData = Record<string, CountryInfo>;
