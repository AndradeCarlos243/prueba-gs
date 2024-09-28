import { useState } from "react";

function DatePickerComponent() {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div className="form-group">
                <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>
        </>
    )
}

export default DatePickerComponent