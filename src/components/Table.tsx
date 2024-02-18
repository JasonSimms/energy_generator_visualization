import { useEIAData } from "../hooks/useEIAData";

export function DataTable() {

    const { loading, data, error } = useEIAData();
    const errorMessage = error ? `Error: ${error.message}` : null;

    return (
        <>
        <h3>INSERT TABLE HERE {errorMessage}</h3>
        <p>{JSON.stringify(data)}</p>
        </>
    )
}