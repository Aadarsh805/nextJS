import React from "react";
import useSWR from "swr";

const fetcher = async () => {
  const res = await fetch("http://localhost:3004/dashboard");
  const data = await res.json();
};

const DashboardSWR = () => {
  const {data, error} = useSWR("dashboard", fetcher);

  if(error) return 'An error has occured'

  if(!data) return 'Loading'

  return (
    <div>Haarroo</div>
  )
};

export default DashboardSWR;