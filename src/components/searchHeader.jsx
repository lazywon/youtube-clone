import React, { useRef } from 'react';

const SearchHeader = ({onSearch}) => {
    const formRef = useRef();
    const inputRef = useRef();

    const onSubmit = event => {
        event.preventDefault();
        const keyword = inputRef.current.value;

        keyword && onSearch(keyword);
        formRef.current.reset();
    };

    return (
        <nav className="navbar">
            <a href="/" className="navbar-a">
                <img className="navbar-logo" src="/images/logo.png" alt="Youtube Logo"/>
                <span className="navbar-title">Youtube</span>
            </a>
            <form ref={formRef} className="search-form" onSubmit={onSubmit}>
                <input 
                    ref={inputRef}
                    type="text" 
                    className="search-input" 
                    placeholder="Search Keywords"
                />
                <button className="search-button">
                    <img src="/images/search.png" alt="Search Button" />
                </button>
            </form>
        </nav>
    );
};

export default SearchHeader;