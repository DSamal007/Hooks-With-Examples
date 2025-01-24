import './App.css';
import {UseContextExpained} from './hooks/use-context';
import EffectExplained from './hooks/use-effect';
import MemoExample from './hooks/use-memo';
import ReducerExplained from './hooks/use-reducer';
import RefExample from './hooks/use-ref';
import StateExample from './hooks/use-state';
import { useState } from 'react';

const EXAMPLES = {
  STATE: 'state',
  EFFECT: 'effect',
  CONTEXT: 'context',
  REDUCER: 'reducer',
  REF: 'ref',
  MEMO:'memo'
};

const ExampleComponents = {
  [EXAMPLES.STATE]: <StateExample />,
  [EXAMPLES.EFFECT]: <EffectExplained />,
  [EXAMPLES.CONTEXT]: <UseContextExpained />,
  [EXAMPLES.REDUCER]: <ReducerExplained />,
  [EXAMPLES.REF]: <RefExample />,
  [EXAMPLES.MEMO]: <MemoExample/>
};

function App() {
  const [activeExample, setActiveExample] = useState(EXAMPLES.STATE);

  return (
    <div className="App">
      <nav style={{marginTop:'3%'}}>
        {Object.values(EXAMPLES).map(example => (
          <button
            style={{marginLeft:'1%'}}
            key={example}
            onClick={() => setActiveExample(example)}
            className={activeExample === example ? 'active' : ''}
          >
            use{example.charAt(0).toUpperCase() + example.slice(1)}
          </button>
        ))}
      </nav>
      <main>
        {ExampleComponents[activeExample]}
      </main>
    </div>
  );
}

export default App;
