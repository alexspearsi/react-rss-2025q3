import { useEffect, useRef, useState } from 'react';
import { CountryInformation } from './components/CountryInformation/CountryInformation';
import type { CountriesData } from './types';

export default function App() {
  const [countriesData, setCountriesData] = useState<CountriesData>({});
  const [listCountryNames, setListCountryNames] = useState<string[]>([]);
  const [expandedCountry, setExpandedCountry] = useState<string | null>(null);
  const [query, setQuery] = useState('');
  const [year, setYear] = useState<number>(2023);

  const prevYearRef = useRef<number>(year);
  const [changedCountries, setChangedCountries] = useState<string[]>([]);

  useEffect(() => {
    async function getCountriesData() {
      const data = await fetch('../co2-data.json').then((res) => res.json());
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

  function handleYearChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newYear = Number(e.target.value);
    const prevYear = prevYearRef.current;

    const changed: string[] = [];

    Object.entries(countriesData).forEach(([country, info]) => {
      const prevData = info.data.find((element) => element.year === prevYear);
      const newData = info.data.find((element) => element.year === newYear);

      if (prevData?.population !== newData?.population) {
        changed.push(country);
      }
    });

    setChangedCountries(changed);
    setYear(newYear);

    prevYearRef.current = newYear;

    setTimeout(() => setChangedCountries([]), 1000);
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
        <select value={year} onChange={handleYearChange}>
          <option value={2023}>2023</option>
          <option value={2022}>2022</option>
          <option value={2021}>2021</option>
          <option value={2020}>2020</option>
          <option value={2019}>2019</option>
          <option value={2018}>2018</option>
          <option value={2017}>2017</option>
          <option value={2016}>2016</option>
          <option value={2015}>2015</option>
          <option value={2014}>2014</option>
          <option value={2013}>2013</option>
          <option value={2012}>2012</option>
          <option value={2011}>2011</option>
          <option value={2010}>2010</option>
          <option value={2009}>2009</option>
          <option value={2008}>2008</option>
        </select>
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
            <th
              style={{
                width: '110px',
                textAlign: 'center',
              }}
            >
              Population
            </th>
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
              year={year}
              isHighlighted={changedCountries.includes(country)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
