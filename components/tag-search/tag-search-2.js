import Autocomplete from "./Autocomplete";

const TagsInput = props => {
  const [tags, setTags] = React.useState(props.tags);
  const [suggestions] = React.useState(props.suggestions);

  const removeTags = indexToRemove => {
    debugger;
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    props.filterTable([...tags.filter((_, index) => index !== indexToRemove)]);
  };
  // const seeSuggestions = suggestions => {
  const onBackBtn = () => {
    debugger;
    let lastIndex = tags.length;
    let newTags = tags.slice(0, lastIndex - 1);
    setTags(newTags);
    props.filterTable(newTags);
  };
  // }
  const addTag = tag => {
    if (tag !== "") {
      setTags([...tags, tag]);
      if (suggestions.includes(tag)) {
        //need to implement tags that have more tags attached
      } else {
        //free text search
        props.filterTable([...tags, tag]);
      }
      // props.selectedTags([...tags, event.target.value]);
      tag = "";
    }
  };
  return (
    <div className="tags-input">
      <div>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                x
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="autocomplete-container">
        <Autocomplete
          suggestions={suggestions}
          onSelect={addTag}
          onBackBtn={onBackBtn}
        ></Autocomplete>
      </div>
    </div>
  );
};

export default TagsInput;
