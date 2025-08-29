import { CountryAdditionalInformation } from './CountryAdditionalInformation';
import type { CountryInfo } from '../types';

type Props = {
  country: string;
  countryInfo: CountryInfo;
  isExpanded: boolean;
  onClick: (country: string) => void;
};

export function CountryInformation({
  country,
  countryInfo,
  isExpanded,
  onClick,
}: Props) {
  const { iso_code, data } = countryInfo;
  const latestData = data[data.length - 1];

  return (
    <>
      <tr
        onClick={() => onClick(country)}
        style={{
          cursor: 'pointer',
          backgroundColor: isExpanded ? '#121417' : '#323437',
        }}
      >
        <td
          style={{
            maxWidth: '200px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {country}
        </td>
        <td
          style={{
            textAlign: 'right',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {latestData?.population?.toLocaleString() ?? 'N/A'}
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
}
