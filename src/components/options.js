import styles from './options.module.css'

export default function MarkdownOptions() {
    return (
        <div className={styles.options}>
            <label htmlFor="cars">Size of Document:</label>
                <select name="cars" id="cars">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>

            <input type="checkbox" id="header" name="header" value="True" />
            <label htmlFor="header"> Add Header</label><br />
            {/* <input type="checkbox" id="vehicle2" name="vehicle2" value="True " />
            <label htmlFor="vehicle2"> I have a car</label><br />
            <input type="checkbox" id="vehicle3" name="vehicle3" value="True" />
            <label htmlFor="vehicle3"> I have a boat</label><br/> */}
        </div> 
    )
}