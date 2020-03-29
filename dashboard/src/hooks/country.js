import { useEffect } from "react";
import { useRouter } from "next/router";
import numeral from "numeral";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchCountry, fetchRecovered } from "../redux/actions/countries";
import { selectCountry, selectRecovered } from "../selectors/countries";

function useCountry() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const countryCode = "AU" || query.id[0];

  const { country, rsf: countryRsf } = useSelector(selectCountry, shallowEqual);
  const { recovered, rsf: recoveredRsf } = useSelector(
    selectRecovered,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchCountry(countryCode));
    dispatch(fetchRecovered(countryCode));
  }, []);

  const formatValue = (prop, key) => {
    if (key === 2) {
      return prop && prop > 0 ? `${numeral(prop).format("0,0")}` : 0;
    }
    return prop;
  };

  const data = [
    [1, "Overall", country.total_cases],
    [2, "Active", country.total_active_cases],
    [3, "Recovered", country.total_recovered],
    [4, "Deaths", country.total_deaths],
    [5, "Serious", country.total_serious_cases],
    [6, "Unresolved", country.unresolved],
    [7, "New Cases Today", country.new_cases_today],
    [8, "New Deaths Today", country.new_deaths_today],
  ];

  return {
    country,
    countryRsf,
    recovered,
    recoveredRsf,
    data,
    formatValue,
  };
}

export default useCountry;
