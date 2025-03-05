"use client";

const SubMenu = ({ suggestions, searchTerm, onSuggestionClick }) => {

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="submenu">
      {filteredSuggestions.length > 0 ? (
        filteredSuggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="suggestion-item"
            onClick={() => onSuggestionClick(suggestion.name)}
          >
            <p className="suggestion-name">{suggestion.name}</p>
            <p className="suggestion-region">{suggestion.region}</p>
          </div>
        ))
      ) : (
        <p>Nenhuma sugestão disponível.</p>
      )}
    </div>
  );
};

export default SubMenu;