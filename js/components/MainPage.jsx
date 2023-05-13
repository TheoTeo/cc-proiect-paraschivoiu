// js/components/MainPage.jsx
import { useEffect, useState } from "react";

export default function MainPage() {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        try {
            fetch('/api/records', {
                method: 'GET',
            })
                .then(response => response.json())
                .then(json => setRecords(json.data));
        }
        catch (error) {
            console.log(error);
        }
    }, []);

    const deleteRecord = (event) => {
        event.preventDefault();
        const id = event.target.id;
        try {
            fetch(`/api/records?id=${id}`, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(json => {
                    setRecords(records.filter(record => record._id !== id));
                });
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <section className="bg-tahiti-dark dark ">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="w-[500px] mx-auto text-center text-6xl">Dog facts</h1>
                <p className="w-[600px] mx-auto text-right mt-1 text-1xl">Paraschivoiu Adriana-Teodora</p>
                <p className="w-[1000px] mx-auto text-center mt-4 text-3xl">This is an app that showcases dog facts for dog lovers.</p>
                <p className="w-[1000px] mx-auto text-center mt-4 text-3xl">Go take a look, you might get surprised!</p>

                <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3">
                    {records.map(record => (
                        <div
                            key={record._id}
                            className="block max-w-sm p-6 bg-tahiti-light border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                            { }
                            <p id="fact" className="font-normal text-gray-700 dark:text-gray-400">
                                {record.fact}
                            </p>
                            <div className={"flex justify-center mt-4"}>
                                <button type="button"
                                    id={record._id}
                                    onClick={deleteRecord}
                                    className="focus:outline-none text-tahiti-light bg-tahiti hover:bg-tahiti focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-tahiti dark:hover:bg-tahiti dark:focus:tahiti">Delete
                                </button>
                            </div>
                            {/*  */}



                            {/*  */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}