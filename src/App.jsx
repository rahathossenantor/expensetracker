import { useRef, useState } from "react";
import Dashboard from "./sections/Dashboard";
import Navbar from "./sections/Navbar";

const App = () => {
  const [isSorterOpen, setIsSorterOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const sorterRef = useRef(null);
  const filterRef = useRef(null);

  const outsideClose = (e) => {
    if (sorterRef.current && !sorterRef.current.contains(e.target)) {
      setIsSorterOpen(false);
    };

    if (filterRef.current && !filterRef.current.contains(e.target)) {
      setIsFilterOpen(false);
    };
  };

  return (
    <div onClick={outsideClose}>
      <Navbar />
      <Dashboard
        isSorterOpen={isSorterOpen}
        isFilterOpen={isFilterOpen}
        setIsSorterOpen={setIsSorterOpen}
        setIsFilterOpen={setIsFilterOpen}
        sorterRef={sorterRef}
        filterRef={filterRef}
      />
    </div>
  );
};

export default App;
