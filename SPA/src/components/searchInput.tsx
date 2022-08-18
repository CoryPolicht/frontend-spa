import Reach, {useState, useCallback, ChangeEvent} from 'react';
import _ from 'lodash';


const SearchInput = () => {
    const [query, setQuery] = useState("");
    const delay = useCallback(_.debounce(q => sendQuery(q), 500), []);

    //todo this should send to the api/store and look into how to tie this into components and dynamically update store
    const sendQuery = (logQuery:String) => console.log(logQuery);

    const onChange = (e:ChangeEvent) => {
        setQuery((e.target as HTMLInputElement).value);
        delay((e.target as HTMLInputElement).value);
    };

    return (
        <div>
            <input onChange={onChange} value={query} />
        </div>
    )
}

export default SearchInput;
