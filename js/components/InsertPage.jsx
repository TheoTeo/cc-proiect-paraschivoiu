// js/components/InsertPage.jsx
export default function InsertPage() {


    const insertRecord = (event) => {
        event.preventDefault();
        const fact = document.getElementById("fact").value;
        const data = { fact };
        fetch("/api/records", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then(() => {
            console.log("New record inserted");
            document.getElementById("fact").value = "";
        });
    }


    return (
        <section className="bg-tahiti dark:bg-gray-900">
            <div className="container px-6 py-40 mx-auto">
                <h1 className="w-[900px] mx-auto text-center text-4xl">Do you want to tell people new facts about dogs?</h1>
                <p className="w-[1000px] mx-auto text-center mt-4 text-2xl">This is where you can insert your own fact</p>

                <form>
                    { }
                    <div className="mb-6">
                        <label htmlFor="fact"
                            className="block mb-3 text-sm font-medium text-black dark:text-white ">Tell us your fact:</label>
                        <textarea id="fact"
                            className="bg-tahiti-light border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required />
                    </div>
                    <button type="submit"
                        onClick={insertRecord}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                    </button>
                </form>
            </div>
        </section>
    )
}