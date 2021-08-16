import React, { useState } from 'react';

export const AddNewTagForm = React.forwardRef(function AddNewTagForm({ onAddTag }, textInputRef) {
    const [colourInput, setColourInput] = useState('');
    const [isWrong, setIsWrong] = useState(false);

    const handleNewTagInput = (event) => {
        setIsWrong(false)
        setColourInput(event.target.value);
      };
    function handleOnSubmit(e) {
        e.preventDefault()
        if (colourInput.trim() === '') {
            setIsWrong(true)
            setColourInput('')
            setTimeout(() => {
                setIsWrong(false)
            }, 500)
            return;
        }
        setColourInput('')
        onAddTag(colourInput);
        textInputRef.current.focus();
    }

    return (
        <form id="addTagForm" className={isWrong ? 'shake-it' : ''} onSubmit={handleOnSubmit}>
            <input
                type="text"
                placeholder="New Tag"
                name="newTag"
                id="newTag"
                className='text-input'
                value={colourInput}
                ref={textInputRef}
                onChange={handleNewTagInput}
                autoFocus
            />
            <input type="submit" className='submit-button' value="Add Tag" />
            {isWrong && <span>Type something</span>}
            </form>
    )
})