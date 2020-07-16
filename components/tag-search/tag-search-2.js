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
  // const seeSuggestions = suggestions => {
  const onBackBtn = () => {
    //debugger;
    let lastIndex = tags.length;
    let newTags = tags.slice(0, lastIndex - 1);
    setTags(newTags);
    props.filterTable(newTags);
  };
  // }
  debugger;
  let firstPartOfTag="";
  const addTag = tag => {
    //debugger;
    if (tag !== "") {  
      debugger;       
       if (Object.keys(suggestions.doubleLayerSuggestions).includes(tag)) {
           firstPartOfTag = tag +": ";
      }     
      else if (suggestions.singleLayerSuggestions.includes(tag)) {
        setTags([...tags, tag]);
        props.filterTable([...tags, tag]);
        tag = "";
      } else {
        //free text search
        if (firstPartOfTag !== "") {
          setTags([...tags, firstPartOfTag + tag]);
          props.filterTable([...tags, tag]);
          tag = "";
          firstPartOfTag="";
        }
        else{
          setTags([...tags,tag]);
          props.filterTable([...tags, tag]);
          tag = "";
        }
      }
      // props.selectedTags([...tags, event.target.value]);
    }
  };
  return (
    <div className="tags-input">
      <div>
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              {/* <span className="tag-title"> {doubleLayerTagFirstSuggestion}</span> */}
              <span className="tag-title">{'#' + tag}</span>
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
