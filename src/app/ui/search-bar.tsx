import next from "next";

export default function SearchBar() {
  return (
    <div>
        <form>
            <input type="search" />
            <label>Choose a car:</label>
            <select name="cars" id="country">
                <option value="mexico">Mexico</option>
                <option value="usa">Usa</option>
            </select>
            <select name="estate" id="estate" disabled>
                <option value="sonora">Sonora</option>
                <option value="jalisco">Jalisco</option>
                <option value="cdmx">CDMX</option>
            </select>
            <select name="city" id="city" disabled>
                <option value="hermosillo">hermosillo</option>
                <option value="zapopan">Zapopan</option>
                <option value="vallarta">Vallarta</option>
            </select>
            <input type="submit" value="Submit"/>
        </form>
    </div> 
  );
}
