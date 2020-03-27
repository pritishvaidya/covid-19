import React from "react";

import Country from "../../src/containers/Countries/Country";

function CountryPage() {
  return <Country />;
}

export async function getServerSideProps() {
  return { props: {} };
}

export default CountryPage;
