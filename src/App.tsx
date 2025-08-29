import { useEffect, useState } from 'react';
import { CountryInformation } from './components/CountryInformation';
import type { CountriesData } from './types';

export default function App() {
  const [countriesData, setCountriesData] = useState<CountriesData>({});
  const [listCountryNames, setListCountryNames] = useState<string[]>([]);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);

  const [query, setQuery] = useState('');

  useEffect(() => {
    async function getCountriesData() {
      // const response = await fetch(
      //   'https://nyc3.digitaloceanspaces.com/owid-public/data/co2/owid-co2-data.json',
      // );
      const response = await fetch('../co2-data.json');
      const data = await response.json();
      setCountriesData(data);
    }

    getCountriesData();
  }, []);

  useEffect(() => {
    setListCountryNames(Object.keys(countriesData));
  }, [countriesData]);

  function handleCountryClick(country: string) {
    setExpandedCountry((prev) => (prev === country ? null : country));
  }

  const filteredList = listCountryNames.filter((country) =>
    country.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>CO2 emissions data by countries</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by country"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <table
        border={1}
        cellPadding={10}
        style={{
          width: '400px',
          tableLayout: 'fixed',
          borderCollapse: 'collapse',
        }}
      >
        <thead>
          <tr>
            <th style={{ width: '200px', textAlign: 'center' }}>Country</th>
            <th style={{ width: '110px', textAlign: 'center' }}>Population</th>
            <th style={{ width: '60px', textAlign: 'center' }}>ISO</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((country: string) => (
            <CountryInformation
              key={country}
              country={country}
              countryInfo={countriesData[country]}
              isExpanded={expandedCountry === country}
              onClick={handleCountryClick}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
