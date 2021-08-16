import { isColor, getColorToNonColorWord } from './utils'
export function ListTags({ tags, onTagClick }) {

    function onElementClick(e) {
      const index = parseInt(e.target.dataset.index, 10)
      onTagClick(index)
    }

    return (
        <ul>
        {tags.map((tag, index) =>
            <li
              style={{ color: guaranteeColor(tag, index) }}
              className='listItem'
              data-index={index}
              onClick={onElementClick}
              key={index}
            >{tag}</li>
        )}
      </ul>
    )
}
function guaranteeColor(tag, index) {
  return isColor(tag.replace(/\s+/g, "")) ? tag.replace(/\s+/g, "") : getColorToNonColorWord(tag, index);
}