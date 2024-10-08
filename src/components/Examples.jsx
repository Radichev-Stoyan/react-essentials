import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

/**
 * Examples component that displays different examples based on the selected topic.
 * @returns {JSX.Element} The rendered Examples component.
 */
export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  /**
   * Handles the selection of a topic.
   * @param {string} selectedButton - The selected topic.
   */
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

  return (
    <Section id='examples'>
      <h2>Examples</h2>
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}