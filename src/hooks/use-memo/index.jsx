import { useMemo, useState } from "react";

const MemoExample = () => {
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [count, setCount] = useState(0);
  
    // Memoized sum calculation
    const totalSum = useMemo(() => {
      console.log('Calculating sum...');
      return numbers.reduce((sum, num) => sum + num, 0);
    }, [numbers]);
  
    return (
      <div>
        <h1>Use Memo Example</h1>
        <h3>Sum Calculator</h3>
        <p>Numbers: {numbers.join(', ')}</p>
        <p>Total Sum: {totalSum}</p>
  
        {/* Add a random number to the array */}
        <button
          onClick={() => setNumbers([...numbers, Math.floor(Math.random() * 10)])}
        >
          Add Random Number
        </button>
  
        {/* Trigger a re-render without affecting numbers */}
        <button onClick={() => setCount(count + 1)}>
          Re-render Component ({count})
        </button>
      </div>
    );
  };
  
  export default MemoExample;


//  Scenario: Filtering and Sorting a Large Dataset
//  Imagine you have a large dataset of products that needs to be filtered and sorted based on user input. 
//  Without useMemo, the filtering and sorting logic would run on every render, even if the dependencies didn't change.

// When to Use useMemo
    // The computation is expensive (e.g., filtering, sorting, or processing large datasets).
    // The dependencies change infrequently.