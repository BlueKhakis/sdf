import './App.css';
import React, { useState, useEffect, useCallback } from 'react';
import { ListTags } from './ListTags'
import { AddNewTagForm } from './AddNewTagForm'
import { getListFromURLHash } from './utils'

function App() {
  const [tags, setTags] = useState([]);
  const textInput = React.createRef();
  
  const updateHashList = useCallback(() => {
    const tags = getListFromURLHash('tags')
    setTags(tags)
  }, [])

  useEffect(() => {
    updateHashList()
    window.addEventListener("hashchange", updateHashList);
  }, [updateHashList])
 
  function onAddTag(tag) {
    window.location.hash = `#tags=${[...tags, tag].join(',')}`
  }

  function handleListItemClick(index) {
    window.location.hash = `#tags=${getListFromURLHash('tags').filter((_, i) => index !== i).join(',')}`;
    textInput.current.focus();
  }

  return (
    <div className="App">
      <AddNewTagForm ref={textInput} onAddTag={onAddTag} />
      <div className="App__tags">
        <ListTags tags={tags} onTagClick={handleListItemClick} />
      </div>
    </div>
  );
}

export default App;