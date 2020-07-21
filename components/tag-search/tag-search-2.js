import Autocomplete from "./Autocomplete";

const TagsInput = props => {
  const [tags, setTags] = React.useState(props.tags);
  const [suggestions] = React.useState(props.suggestions);
  //const [doubleLayerSuggestions] = React.useState(props.doubleLayerSuggestions)

  const removeTags = indexToRemove => {
    //debugger;
    setTags([...tags.filter((_, index) => index !== indexToRemove)]);
    props.filterTable([...tags.filter((_, index) => index !== indexToRemove)]);
  };

  const onBackBtn = () => {
    //debugger;
    let lastIndex = tags.length;
    let newTags = tags.slice(0, lastIndex - 1);
    setTags(newTags);
    props.filterTable(newTags);
  };

  let firstPartOfTag = "";
  let delimiter = ":";
  let doubleLayerSuggestionKeys = Object.keys(suggestions.doubleLayerSuggestions);
  const addTag = (tag,isFreeText) => {
    if (tag !== "" ) {
      //debugger;
      if (!isFreeText) {
        //if single layer suggestion was chosen
        if (suggestions.singleLayerSuggestions.includes(tag)) {
          setTags([...tags, tag]);
          props.filterTable([...tags, tag]);
          tag = "";
        }
        //if the key of double layer suggestion was chosen
        else if (doubleLayerSuggestionKeys.some( suggestion => suggestion === tag)) {
          firstPartOfTag = tag;
        }
        //if the value of doubleLayer suggestion was chosen
        else if (
          suggestions.doubleLayerSuggestions[firstPartOfTag].includes(tag)
        ) {
          setTags([...tags, firstPartOfTag + delimiter + tag]);
          props.filterTable([...tags, tag]);
          tag = "";
          firstPartOfTag = "";
        }
      }
      //free text tag
      else {
        setTags([...tags, tag]);
        props.filterTable([...tags, tag]);
        tag = "";
      }
    }
  };
  return (
    <div className="tags-input">
      <div>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{"#" + tag}</span>
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
