import { useEffect } from "react";
import { useRouter } from "next/router";
import { fetchCountry } from "../redux/actions/countries";
import { shallowEqual, useSelector } from "react-redux";
import { selectCountry } from "../selectors/countries";

function useCountry() {
  const { query } = useRouter();
  const id = query.id;

  const { country, rsf } = useSelector(selectCountry, shallowEqual);

  console.log(country, rsf);

  useEffect(() => {
    fetchCountry(id);
  }, []);
}

export default useCountry;
