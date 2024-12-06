import React from "react"

function Search() {
  return (
    <div className="search-overlay">
      <div className="search-overlay-top">
        <div className="wrapper container">
          <label htmlFor="live-search-field" className="search-overlay-icon">
            <i className="fas fa-search"></i>
          </label>
          <input autoFocus type="text" autoComplete="off" id="live-search-field" placeholder="What are you interested in?" />
          <span className="search-overlay-close">
            <i className="fas fa-times-circle"></i>
          </span>
        </div>
      </div>

      <div className="search-overlay-bottom">
        <div className="wrapper">
          <div className="live-search-results live-search-results--visible">
            <div className="list-group shadow-sm">
              <div className="list-group-item active">
                <strong>Search Results</strong> (3 items found)
              </div>
              <a href="http://localhost:3000/" className="list-group-item list-group-item-action">
                <img alt="avatar" className="headline-avatar" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #1</strong>
                <span className="text-muted small">by brad on 2/10/2020 </span>
              </a>
              <a href="http://localhost:3000/" className="list-group-item list-group-item-action">
                <img alt="avatar" className="headline-avatar" src="https://gravatar.com/avatar/b9216295c1e3931655bae6574ac0e4c2?s=128" /> <strong>Example Post #2</strong>
                <span className="text-muted small">by barksalot on 2/10/2020 </span>
              </a>
              <a href="http://localhost:3000/" className="list-group-item list-group-item-action">
                <img alt="avatar" className="headline-avatar" src="https://gravatar.com/avatar/b9408a09298632b5151200f3449434ef?s=128" /> <strong>Example Post #3</strong>
                <span className="text-muted small">by brad on 2/10/2020 </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
