import styles from './CountryInformation.module.css';

import type { CountryInfo } from '../../types';
import clsx from 'clsx';
import { CountryAdditionalInformation } from '../InnerTable/InnerTable';
import { memo, useMemo } from 'react';

type Props = {
  country: string;
  countryInfo: CountryInfo;
  isExpanded: boolean;
  onClick: (country: string) => void;
  year: number;
  isHighlighted: boolean;
};

export const CountryInformation = memo(function CountryInformation({
  country,
  countryInfo,
  isExpanded,
  onClick,
  year,
  isHighlighted,
}: Props) {
  const { iso_code, data } = countryInfo;

  const selectedYearData = useMemo(
    () => data.find((element) => element.year == year),
    [data, year],
  );

  return (
    <>
      <tr
        onClick={() => onClick(country)}
        style={{
          cursor: 'pointer',
          backgroundColor: isExpanded ? '#121417' : '#323437',
        }}
      >
        <td className={styles.country_cell}>{country}</td>
        <td
          className={clsx(styles.population_cell, {
            [styles.highlight]: isHighlighted,
          })}
        >
          {selectedYearData?.population?.toLocaleString() ?? 'N/A'}
        </td>
        <td style={{ textAlign: 'center' }}>{iso_code ?? 'N/A'}</td>
      </tr>

      {isExpanded && (
        <CountryAdditionalInformation
          country={country}
          countryInfo={countryInfo}
        />
      )}
    </>
  );
});
