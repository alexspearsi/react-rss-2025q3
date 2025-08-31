import { memo, useCallback, useState } from 'react';
import type { CountryInfo } from '../../types';
import styles from './InnerTable.module.css';

type Props = {
  country: string;
  countryInfo: CountryInfo;
};

export const CountryAdditionalInformation = memo(
  function CountryAdditionalInformation({ country, countryInfo }: Props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMethaneInfoAdded, setIsMethaneInfoAdded] =
      useState<boolean>(false);
    const [isOilInfoAdded, setIsOilInfoAdded] = useState<boolean>(false);
    const [isTemperatureInfoAdded, setIsTemperatureInfoAdded] =
      useState<boolean>(false);

    const handleAddColumnClick = useCallback(() => setIsModalOpen(true), []);
    const handleCloseModal = useCallback(() => setIsModalOpen(false), []);
    const handleAddMethane = useCallback(() => setIsMethaneInfoAdded(true), []);
    const handleAddOil = useCallback(() => setIsOilInfoAdded(true), []);
    const handleAddTemp = useCallback(
      () => setIsTemperatureInfoAdded(true),
      [],
    );

    return (
      <>
        <tr>
          <td colSpan={3} style={{ background: 'black', position: 'relative' }}>
            <button
              style={{
                position: 'absolute',
                right: '9px',
                top: '44px',
                fontSize: '12px',
                cursor: 'pointer',
              }}
              onClick={handleAddColumnClick}
            >
              Add columns +
            </button>
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
                    {isMethaneInfoAdded && <th>Methane</th>}
                    {isOilInfoAdded && <th>Oil CO₂</th>}
                    {isTemperatureInfoAdded && <th>Temp. change</th>}
                  </tr>
                </thead>
                <tbody>
                  {countryInfo?.data
                    .slice()
                    .reverse()
                    .map((yearData) => (
                      <tr key={`${country}-${yearData.year}`}>
                        <td>{yearData.year}</td>
                        <td>
                          {yearData.population?.toLocaleString() ?? 'N/A'}
                        </td>
                        <td>{yearData.co2?.toFixed(4) ?? 'N/A'}</td>
                        <td>{yearData.co2_per_capita?.toFixed(4) ?? 'N/A'}</td>
                        {isMethaneInfoAdded && (
                          <td>{yearData.methane?.toFixed(4) ?? 'N/A'}</td>
                        )}
                        {isOilInfoAdded && (
                          <td>{yearData.oil_co2?.toFixed(4) ?? 'N/A'}</td>
                        )}
                        {isTemperatureInfoAdded && (
                          <td>
                            {yearData.temperature_change_from_co2?.toFixed(4) ??
                              'N/A'}
                          </td>
                        )}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </td>
        </tr>

        {isModalOpen && (
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <h3>Add Additional Columns</h3>
              <p>Here you can add extra columns for data</p>
              <div style={{ margin: '20px' }}>
                <button onClick={handleAddMethane}>
                  Add Methane information
                </button>
                <button onClick={handleAddOil}>Add Oil_co2 information</button>
                <button onClick={handleAddTemp}>
                  Add temperature change information
                </button>
              </div>
              <button onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        )}
      </>
    );
  },
);
