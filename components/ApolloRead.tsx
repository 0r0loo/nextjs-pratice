import { gql, useQuery } from "@apollo/client";

interface Country {
  code: string;
  emoji: string;
  name: string;
}

interface CountryData {
  countries: Country[];
}

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

export function ApolloRead() {
  const { data, loading, error } = useQuery<CountryData>(GET_COUNTRIES);

  if (loading) return <h2>로딩중...</h2>;

  if (error) return <h1>에러발생</h1>;

  const countries = data?.countries.slice(0, 4);

  return (
    <div>
      {countries?.map((country: Country, index: number) => (
        <div key={`country-${index}`}>
          {country.code} /{country.name} /{country.emoji}
        </div>
      ))}
    </div>
  );
}
