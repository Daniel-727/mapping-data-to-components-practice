import React from "react";
import Entry from './Entry';
import emojipedia from '../emojipedia';


function createEntry(entry){ //function that we want to pass into map, what we want to happen with each entry that is in the emojipedia array. Basically we want to create a new Entry with every emojipedia object. Each entry will be sent a key to serve as a unique id, an emoji, name, and meaning.
  return(
    <Entry
    key={entry.id}
    emoji={entry.emoji}
    name={entry.name}
    meaning={entry.meaning}
    />
  )
}

function App() {

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(entry => createEntry(entry))} {/*we are using the map function to execute the createEntry function for every object in the emojipedia array*/}
      </dl>
    </div>
  );
}

export default App;
