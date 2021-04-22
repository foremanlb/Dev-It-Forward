import React from 'react'

export default function LanguageMap(props) {
  const languages = ['Ruby', 'React', 'HTML', 'PHP', 'Django', 'CSS', 'Python']
  const input = props.input
  const setInput = props.setInput
  

  const handleLanguage = (e) => {
    if (e.target.checked) {
      setInput((prevState) => {
        let languageArr = [...prevState.programmingLanguage, e.target.value];
        return { ...prevState, programmingLanguage: languageArr };
      });
    } else {
      setInput((prevState) => {
        let index = prevState.programmingLanguage.indexOf(e.target.value);
        let languageArr = prevState.programmingLanguage.slice();
        languageArr.splice(index, 1);
        return { ...prevState, programmingLanguage: languageArr };
      });
    }
  }

  return (
    <div>
      {languages.map((language) => {
        if (input.programmingLanguage.includes(language)) {
          return (
            <div key={language}>
              <label name={language}>{language}</label>
              <input
                type='checkbox'
                name="programmingLanguage"
                value={language}
                checked='checked'
                onChange={handleLanguage}
              />
            </div>
          )
        } else {
          return (
            <div key={language}>
              <label name={language}>{language}</label>
              <input
                type='checkbox'
                name="programmingLanguage"
                value={language}
                onChange={handleLanguage}
              />
            </div>
          )
        }
      }
      )}
    </div>
  )
}
