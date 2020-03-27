import { useEffect } from "react";
import { useRouter } from "next/router";

import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { fetchCountry, fetchRecovered } from "../redux/actions/countries";
import { selectCountry, selectRecovered } from "../selectors/countries";

function useCountry() {
  const dispatch = useDispatch();
  const { query } = useRouter();
  const countryCode = query.id[0];

  const { country, rsf: countryRsf } = useSelector(selectCountry, shallowEqual);
  const { recovered, rsf: recoveredRsf } = useSelector(
    selectRecovered,
    shallowEqual
  );

  useEffect(() => {
    dispatch(fetchCountry(countryCode));
    dispatch(fetchRecovered(countryCode));
  }, []);

  return {
    country,
    countryRsf,
    recovered,
    recoveredRsf,
  };
}

export default useCountry;
