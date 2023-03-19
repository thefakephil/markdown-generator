import styles from './options.module.css'

export default function MarkdownOptions() {
    return (
        <div className={styles.options}>
            <label for="cars">Choose a car:</label>
            <select name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
            </select>

            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label for="vehicle1"> I have a bike</label><br />
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car " />
            <label for="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
            <label for="vehicle3"> I have a boat</label><br/>
        </div> 
    )
}