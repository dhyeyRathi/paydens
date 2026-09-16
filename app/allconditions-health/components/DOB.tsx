import React from 'react'

const DOB = () => {
    return (
        <div className="flex gap-4">

            <select className="h-[42px] w-[101px] rounded-xl border border-border bg-white px-4 text-sm text-[#777] outline-none">
                <option value="">DD</option>

                {Array.from({ length: 31 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {String(i + 1).padStart(2, "0")}
                    </option>
                ))}
            </select>

            <select className="h-[42px] w-[101px] rounded-xl border border-border bg-white px-4 text-sm text-[#777] outline-none">
                <option value="">MM</option>

                {Array.from({ length: 12 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {String(i + 1).padStart(2, "0")}
                    </option>
                ))}
            </select>

            <select className="h-[42px] w-[101px] rounded-xl border border-border  bg-white px-4 text-sm text-[#777] outline-none">
                <option value="">YYYY</option>

                {Array.from({ length: 100 }, (_, i) => {
                    const year = new Date().getFullYear() - i;

                    return (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    );
                })}
            </select>
        </div>
    )
}

export default DOB