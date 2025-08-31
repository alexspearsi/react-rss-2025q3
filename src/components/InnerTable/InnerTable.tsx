import type { CountryInfo } from '../../types';

type Props = {
  country: string;
  countryInfo: CountryInfo;
};

export function CountryAdditionalInformation({ country, countryInfo }: Props) {
  return (
    <tr>
      <td colSpan={3} style={{ background: 'black' }}>
        <h4 style={{ textAlign: 'center' }}>Details for {country}</h4>
        <div style={{ height: '500px', overflowY: 'auto' }}>
          <table
            border={1}
            cellPadding={5}
            style={{
              width: '100%',
              tableLayout: 'fixed',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr>
                <th>Year</th>
                <th>Population</th>
                <th>CO₂</th>
                <th>CO₂ / cap</th>
              </tr>
            </thead>
            <tbody>
              {countryInfo?.data
                .slice()
                .reverse()
                .map((yearData) => (
                  <tr key={`${country}-${yearData.year}`}>
                    <td>{yearData.year}</td>
                    <td>{yearData.population?.toLocaleString() ?? 'N/A'}</td>
                    <td>{yearData.co2?.toFixed(4) ?? 'N/A'}</td>
                    <td>{yearData.co2_per_capita?.toFixed(4) ?? 'N/A'}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </td>
    </tr>
  );
}
