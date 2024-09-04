import { Circles } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="loader">
      <Circles height="80" width="80" color="#4fa94d" ariaLabel="loading" />
    </div>
  );
}
