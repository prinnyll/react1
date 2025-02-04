import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

// const CoreConcept = (props) => {
//   return (
//     <li>
//       <img src={props.image} alt={props.title} />
//       <h2>{props.title}</h2>
//       <p>{props.description}</p>
//     </li>
//   );
// };

function App() {
  function handleSelect(selectedTab) {
    //selectedTab => "Components", "jsx", "Props","state"
    console.log(selectedTab);
    // Implement tab navigation logic here
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />

            <CoreConcept {...CORE_CONCEPTS[1]} />

            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("Components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
